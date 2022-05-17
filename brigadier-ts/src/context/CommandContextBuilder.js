"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandContextBuilder = void 0;
const internal_1 = require("../internal");
class CommandContextBuilder {
    constructor(dispatcher, source, rootNode, start) {
        this.dispatcher = dispatcher;
        this.source = source;
        this.rootNode = rootNode;
        this.range = internal_1.StringRange.at(start);
        this.nodes = [];
        this.arguments = new Map();
    }
    withSource(source) {
        this.source = source;
        return this;
    }
    getSource() {
        return this.source;
    }
    getRootNode() {
        return this.rootNode;
    }
    withArgument(name, argument) {
        this.arguments.set(name, argument);
        return this;
    }
    getArguments() {
        return this.arguments;
    }
    withChild(child) {
        this.child = child;
        return this;
    }
    getChild() {
        return this.child;
    }
    getLastChild() {
        let result = this;
        while (result.getChild() != null) {
            result = result.getChild();
        }
        return result;
    }
    withCommand(command) {
        this.command = command;
        return this;
    }
    getCommand() {
        return this.command;
    }
    withNode(node, range) {
        this.nodes.push(new internal_1.ParsedCommandNode(node, range));
        this.range = internal_1.StringRange.encompassing(this.range, range);
        this.modifier = node.getRedirectModifier();
        this.forks = node.isFork();
        return this;
    }
    getNodes() {
        return this.nodes;
    }
    copy() {
        const copy = new CommandContextBuilder(this.dispatcher, this.source, this.rootNode, this.range.getStart());
        copy.command = this.command;
        copy.child = this.child;
        copy.range = this.range;
        copy.nodes.push(...this.nodes);
        this.arguments.forEach((v, k) => {
            copy.arguments.set(k, v);
        });
        return copy;
    }
    build(input) {
        const child = this.child == null ? null : this.child.build(input);
        return new internal_1.CommandContext(this.source, input, this.arguments, this.command, this.rootNode, this.nodes, this.range, child, this.modifier, this.forks);
    }
    getDispatcher() {
        return this.dispatcher;
    }
    getRange() {
        return this.range;
    }
    findSuggestionContext(cursor) {
        if (this.range.getStart() <= cursor) {
            if (this.range.getEnd() < cursor) {
                if (this.child != null) {
                    return this.child.findSuggestionContext(cursor);
                }
                else if (this.nodes.length > 0) {
                    const last = this.nodes[this.nodes.length - 1];
                    return new internal_1.SuggestionContext(last.getNode(), last.getRange().getEnd() + 1);
                }
                else {
                    return new internal_1.SuggestionContext(this.rootNode, this.range.getStart());
                }
            }
            else {
                let prev = this.rootNode;
                for (const node of this.nodes) {
                    const nodeRange = node.getRange();
                    if (nodeRange.getStart() <= cursor && cursor <= nodeRange.getEnd()) {
                        return new internal_1.SuggestionContext(prev, nodeRange.getStart());
                    }
                    prev = node.getNode();
                }
                if (prev === null) {
                    throw new Error("Can't find node before cursor");
                }
                return new internal_1.SuggestionContext(prev, this.range.getStart());
            }
        }
        throw new Error("Can't find node before cursor");
    }
}
exports.CommandContextBuilder = CommandContextBuilder;
//# sourceMappingURL=CommandContextBuilder.js.map