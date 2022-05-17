"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParsedArgument = void 0;
const internal_1 = require("../internal");
class ParsedArgument {
    constructor(start, end, result) {
        this.range = new internal_1.StringRange(start, end);
        this.result = result;
    }
    getRange() {
        return this.range;
    }
    getResult() {
        return this.result;
    }
}
exports.ParsedArgument = ParsedArgument;
//# sourceMappingURL=ParsedArgument.js.map