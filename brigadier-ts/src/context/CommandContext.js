"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandContext = void 0;
class CommandContext {
    constructor(source, input, parsedArguments, command, rootNode, nodes, range, child, modifier, forks) {
        this.source = source;
        this.input = input;
        this.arguments = parsedArguments;
        this.command = command;
        this.rootNode = rootNode;
        this.nodes = nodes;
        this.range = range;
        this.child = child;
        this.modifier = modifier;
        this.forks = forks;
    }
    copyFor(source) {
        if (this.source === source) {
            return this;
        }
        return new CommandContext(source, this.input, this.arguments, this.command, this.rootNode, this.nodes, this.range, this.child, this.modifier, this.forks);
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
    getCommand() {
        return this.command;
    }
    getSource() {
        return this.source;
    }
    getRootNode() {
        return this.rootNode;
    }
    get(name) {
        const argument = this.arguments.get(name);
        // TODO: Throw exception when argument is null
        return argument.getResult();
    }
    getRedirectModifier() {
        return this.modifier;
    }
    getRange() {
        return this.range;
    }
    getInput() {
        return this.input;
    }
    getNodes() {
        return this.nodes;
    }
    hasNodes() {
        return this.nodes.length !== 0;
    }
    isForked() {
        return this.forks;
    }
}
exports.CommandContext = CommandContext;
//# sourceMappingURL=CommandContext.js.map