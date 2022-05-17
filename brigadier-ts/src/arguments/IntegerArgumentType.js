"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegerArgumentType = void 0;
const internal_1 = require("../internal");
class IntegerArgumentType extends internal_1.NumberArgumentType {
    constructor(minimum = -2147483648, maximum = 2147483647) {
        super(minimum, maximum);
    }
    readNumber(reader) {
        return reader.readInt();
    }
    getTooSmallError() {
        return internal_1.CommandSyntaxError.INTEGER_TOO_SMALL;
    }
    getTooBigError() {
        return internal_1.CommandSyntaxError.INTEGER_TOO_BIG;
    }
}
exports.IntegerArgumentType = IntegerArgumentType;
//# sourceMappingURL=IntegerArgumentType.js.map