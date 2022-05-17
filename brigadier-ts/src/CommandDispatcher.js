"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandDispatcher = void 0;
const internal_1 = require("./internal");
class CommandDispatcher {
    constructor() {
        this.root = new internal_1.RootCommandNode();
    }
    register(command) {
        const build = command.build();
        this.root.addChild(build);
        return build;
    }
    execute(parse, source) {
        if (typeof (parse) === "string") {
            parse = this.parse(new internal_1.StringReader(parse), source);
        }
        if (parse.getReader().canRead()) {
            if (parse.getErrors().size == 1) {
                throw parse.getErrors().values().next();
            }
            else if (parse.getContext().getRange().isEmpty()) {
                throw internal_1.CommandSyntaxError.DISPATCHER_UNKNOWN_COMMAND.createWithContext(parse.getReader());
            }
            else {
                throw internal_1.CommandSyntaxError.DISPATCHER_UNKNOWN_ARGUMENT.createWithContext(parse.getReader());
            }
        }
        let result = 0;
        let successfulForks = 0;
        let forked = false;
        let foundCommand = false;
        const command = parse.getReader().getString();
        const original = parse.getContext().build(command);
        let contexts = [original];
        let next = [];
        while (contexts.length > 0) {
            const size = contexts.length;
            for (let i = 0; i < size; i++) {
                const context = contexts[i];
                const child = context.getChild();
                if (child !== null) {
                    forked = forked || context.isForked();
                    if (child.hasNodes()) {
                        foundCommand = true;
                        const modifier = context.getRedirectModifier();
                        if (modifier === null) {
                            next.push(child.copyFor(context.getSource()));
                        }
                        else {
                            try {
                                const results = modifier(context);
                                results.forEach(source => {
                                    next.push(child.copyFor(source));
                                });
                            }
                            catch (e) {
                                if (!forked)
                                    throw e;
                            }
                        }
                    }
                }
                else if (context.getCommand()) {
                    foundCommand = true;
                    try {
                        const value = context.getCommand()(context);
                        result += value ? value : 1;
                        successfulForks++;
                    }
                    catch (e) {
                        if (!forked)
                            throw e;
                    }
                }
            }
            contexts = next;
            next = [];
        }
        if (!foundCommand) {
            throw internal_1.CommandSyntaxError.DISPATCHER_UNKNOWN_COMMAND.createWithContext(parse.getReader());
        }
        return forked ? successfulForks : result;
    }
    parse(reader, source) {
        reader = new internal_1.StringReader(reader);
        const context = new internal_1.CommandContextBuilder(this, source, this.root, reader.getCursor());
        return this.parseNodes(this.root, reader, context);
    }
    parseNodes(node, originalReader, contextSoFar) {
        const source = contextSoFar.getSource();
        const errors = new Map();
        let potentials = [];
        const cursor = originalReader.getCursor();
        for (const child of node.getRelevantNodes(originalReader)) {
            if (!child.canUse(source)) {
                continue;
            }
            const context = contextSoFar.copy();
            const reader = new internal_1.StringReader(originalReader);
            try {
                try {
                    child.parse(reader, context);
                }
                catch (e) {
                    if (e instanceof internal_1.CommandSyntaxError) {
                        throw e;
                    }
                    else {
                        throw internal_1.CommandSyntaxError.DISPATCHER_PARSE_ERROR.createWithContext(reader, e.message);
                    }
                }
                if (reader.canRead() && reader.peek() !== " ") {
                    throw internal_1.CommandSyntaxError.DISPATCHER_EXPECTED_ARGUMENT_SEPARATOR.createWithContext(reader);
                }
            }
            catch (e) {
                if (e instanceof internal_1.CommandSyntaxError) {
                    errors.set(child, e);
                    reader.setCursor(cursor);
                    continue;
                }
                else {
                    throw e;
                }
            }
            context.withCommand(child.getCommand());
            if (reader.canRead(child.getRedirect() === null ? 2 : 1)) {
                reader.skip();
                if (child.getRedirect()) {
                    const childContext = new internal_1.CommandContextBuilder(this, source, child.getRedirect(), reader.getCursor());
                    const parse = this.parseNodes(child.getRedirect(), reader, childContext);
                    context.withChild(parse.getContext());
                    return new internal_1.ParseResults(context, parse.getReader(), parse.getErrors());
                }
                else {
                    potentials.push(this.parseNodes(child, reader, context));
                }
            }
            else {
                potentials.push(new internal_1.ParseResults(context, reader, new Map()));
            }
        }
        if (potentials.length == 0) {
            potentials.push(new internal_1.ParseResults(contextSoFar, originalReader, errors));
        }
        return potentials[0];
    }
    getAllUsage(node, source, restricted) {
        const result = [];
        this.getAllUsageImpl(node, source, result, "", restricted);
        return result;
    }
    getAllUsageImpl(node, source, result, prefix, restricted) {
        if (restricted && !node.canUse(source)) {
            return;
        }
        if (node.getCommand() != null) {
            result.push(prefix);
        }
        if (node.getRedirect() != null) {
            const redirect = node.getRedirect() === this.root ? "..." : "-> " + node.getRedirect().getUsageText();
            result.push(prefix.length === 0 ? node.getUsageText() + " " + redirect : prefix + " " + redirect);
        }
        else if (node.getChildren().length > 0) {
            for (const child of node.getChildren()) {
                const newPrefix = prefix.length === 0 ? child.getUsageText() : prefix + " " + child.getUsageText();
                this.getAllUsageImpl(child, source, result, newPrefix, restricted);
            }
        }
    }
    async getCompletionSuggestions(parse, cursor) {
        if (cursor === undefined) {
            cursor = parse.getReader().getTotalLength();
        }
        const context = parse.getContext();
        const nodeBeforeCursor = context.findSuggestionContext(cursor);
        const parent = nodeBeforeCursor.parent;
        const start = Math.min(nodeBeforeCursor.startPos, cursor);
        const fullInput = parse.getReader().getString();
        const truncatedInput = fullInput.substring(0, cursor);
        let promises = [];
        for (const node of parent.getChildren()) {
            let promise = internal_1.Suggestions.empty();
            try {
                promise = node.listSuggestions(context.build(truncatedInput), new internal_1.SuggestionsBuilder(truncatedInput, start));
            }
            catch (ignored) {
                console.log("???", ignored);
            }
            promises.push(promise);
        }
        const suggestions = await Promise.all(promises);
        return internal_1.Suggestions.merge(fullInput, suggestions);
    }
    getSmartUsage(node, source, optional, deep) {
        if (optional === undefined && deep === undefined) {
            const result = new Map();
            const optional = node.getCommand() !== undefined && node.getCommand() !== null;
            const children = node.getChildren();
            for (const index in children) {
                const child = children[index];
                const usage = this.getSmartUsage(child, source, optional, false);
                if (usage !== undefined) {
                    result.set(child, usage);
                }
            }
            return result;
        }
        else {
            if (!node.canUse(source)) {
                return undefined;
            }
            const self = optional ? CommandDispatcher.USAGE_OPTIONAL_OPEN + node.getUsageText() + CommandDispatcher.USAGE_OPTIONAL_CLOSE : node.getUsageText();
            const childOptional = node.getCommand() !== undefined;
            const open = childOptional ? CommandDispatcher.USAGE_OPTIONAL_OPEN : CommandDispatcher.USAGE_REQUIRED_OPEN;
            const close = childOptional ? CommandDispatcher.USAGE_OPTIONAL_CLOSE : CommandDispatcher.USAGE_REQUIRED_CLOSE;
            if (!deep) {
                if (node.getRedirect() !== undefined) {
                    const redirect = node.getRedirect() === this.root ? "..." : "-> " + node.getRedirect().getUsageText();
                    return self + " " + redirect;
                }
                else {
                    const children = node.getChildren().filter(c => c.canUse(source));
                    if (children.length === 1) {
                        const usage = String(this.getSmartUsage(children[0], source, childOptional, childOptional));
                        if (usage !== undefined) {
                            return self + " " + usage;
                        }
                    }
                    else if (children.length > 1) {
                        let childUsage = new Set();
                        for (const index in children) {
                            const child = children[index];
                            const usage = this.getSmartUsage(child, source, childOptional, true);
                            if (usage !== undefined) {
                                childUsage.add(usage);
                            }
                        }
                        if (childUsage.size === 1) {
                            const usage = childUsage.values().next().value;
                            return self + " " + (childOptional ? CommandDispatcher.USAGE_OPTIONAL_OPEN + usage + CommandDispatcher.USAGE_OPTIONAL_CLOSE : usage);
                        }
                        else if (childUsage.size > 1) {
                            let builder = open;
                            for (let index = 0; index < children.length; index++) {
                                const child = children[index];
                                if (index > 0) {
                                    builder += CommandDispatcher.USAGE_OR;
                                }
                                builder += child.getUsageText();
                            }
                            if (children.length > 0) {
                                builder += close;
                                return self + " " + builder;
                            }
                        }
                    }
                }
            }
        }
    }
    getRoot() {
        return this.root;
    }
}
exports.CommandDispatcher = CommandDispatcher;
CommandDispatcher.USAGE_OPTIONAL_OPEN = "[";
CommandDispatcher.USAGE_OPTIONAL_CLOSE = "]";
CommandDispatcher.USAGE_REQUIRED_OPEN = "(";
CommandDispatcher.USAGE_REQUIRED_CLOSE = ")";
CommandDispatcher.USAGE_OR = "|";
//# sourceMappingURL=CommandDispatcher.js.map