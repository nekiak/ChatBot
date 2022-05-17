"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArgumentCommandNode = void 0;
const internal_1 = require("../internal");
class ArgumentCommandNode extends internal_1.CommandNode {
    constructor(name, type, command, requirement, redirect, modifier, forks) {
        super(command, requirement, redirect, modifier, forks);
        this.name = name;
        this.type = type;
    }
    getType() {
        return this.type;
    }
    parse(reader, contextBuilder) {
        const start = reader.getCursor();
        const result = this.type.parse(reader);
        const parsed = new internal_1.ParsedArgument(start, reader.getCursor(), result);
        contextBuilder.withArgument(this.name, parsed);
        contextBuilder.withNode(this, parsed.getRange());
    }
    getName() {
        return this.name;
    }
    getUsageText() {
        return "<" + this.name + ">";
    }
    listSuggestions(context, builder) {
        return internal_1.Suggestions.empty();
    }
}
exports.ArgumentCommandNode = ArgumentCommandNode;
//# sourceMappingURL=ArgumentCommandNode.js.map