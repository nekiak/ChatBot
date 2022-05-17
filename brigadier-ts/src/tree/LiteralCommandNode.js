"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiteralCommandNode = void 0;
const internal_1 = require("../internal");
class LiteralCommandNode extends internal_1.CommandNode {
    constructor(literal, command, requirement, redirect, modifier, forks) {
        super(command, requirement, redirect, modifier, forks);
        this.literal = literal;
    }
    parse(reader, contextBuilder) {
        const start = reader.getCursor();
        const end = this.parseInternal(reader);
        if (end > -1) {
            contextBuilder.withNode(this, new internal_1.StringRange(start, end));
            return;
        }
        throw internal_1.CommandSyntaxError.LITERAL_INCORRECT.createWithContext(reader, this.literal);
    }
    parseInternal(reader) {
        const start = reader.getCursor();
        if (reader.canRead(this.literal.length)) {
            const end = start + this.literal.length;
            if (reader.getString().substr(start, this.literal.length) === this.literal) {
                reader.setCursor(end);
                if (!reader.canRead() || reader.peek() == " ") {
                    return end;
                }
                else {
                    reader.setCursor(start);
                }
            }
        }
        return -1;
    }
    getName() {
        return this.literal;
    }
    getUsageText() {
        return this.literal;
    }
    listSuggestions(context, builder) {
        if (this.literal.toLowerCase().startsWith(builder.getRemaining().toLowerCase())) {
            return builder.suggest(this.literal).buildPromise();
        }
        else {
            return internal_1.Suggestions.empty();
        }
    }
}
exports.LiteralCommandNode = LiteralCommandNode;
//# sourceMappingURL=LiteralCommandNode.js.map