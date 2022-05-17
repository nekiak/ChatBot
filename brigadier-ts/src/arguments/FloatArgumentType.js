"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloatArgumentType = void 0;
const internal_1 = require("../internal");
class FloatArgumentType extends internal_1.NumberArgumentType {
    constructor(minimum = -Infinity, maximum = Infinity) {
        super(minimum, maximum);
    }
    readNumber(reader) {
        return reader.readFloat();
    }
    getTooSmallError() {
        return internal_1.CommandSyntaxError.FLOAT_TOO_SMALL;
    }
    getTooBigError() {
        return internal_1.CommandSyntaxError.FLOAT_TOO_BIG;
    }
}
exports.FloatArgumentType = FloatArgumentType;
//# sourceMappingURL=FloatArgumentType.js.map