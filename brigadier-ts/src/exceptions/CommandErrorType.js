"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandErrorType = void 0;
const internal_1 = require("../internal");
class CommandErrorType {
    constructor(func) {
        this.func = func;
    }
    create(...args) {
        const message = this.func(...args);
        return new internal_1.CommandSyntaxError(message);
    }
    createWithContext(reader, ...args) {
        const message = this.func(...args);
        return new internal_1.CommandSyntaxError(message, reader.getString(), reader.getCursor());
    }
}
exports.CommandErrorType = CommandErrorType;
//# sourceMappingURL=CommandErrorType.js.map