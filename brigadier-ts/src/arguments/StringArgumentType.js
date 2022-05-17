"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greedyString = exports.string = exports.word = exports.StringArgumentType = void 0;
const internal_1 = require("../internal");
class StringArgumentType extends internal_1.ArgumentType {
    constructor(type) {
        super();
        this.type = type;
    }
    getType() {
        return this.type;
    }
    parse(reader) {
        if (this.type === "greedy_phrase") {
            const text = reader.getRemaining();
            reader.setCursor(reader.getTotalLength());
            return text;
        }
        else if (this.type === "single_word") {
            return reader.readUnquotedString();
        }
        else {
            return reader.readString();
        }
    }
}
exports.StringArgumentType = StringArgumentType;
function word() {
    return new StringArgumentType("single_word");
}
exports.word = word;
function string() {
    return new StringArgumentType("quotable_phrase");
}
exports.string = string;
function greedyString() {
    return new StringArgumentType("greedy_phrase");
}
exports.greedyString = greedyString;
//# sourceMappingURL=StringArgumentType.js.map