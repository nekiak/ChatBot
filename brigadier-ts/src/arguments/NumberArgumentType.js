"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberArgumentType = void 0;
const internal_1 = require("../internal");
class NumberArgumentType extends internal_1.ArgumentType {
    constructor(minimum, maximum) {
        super();
        this.minimum = minimum;
        this.maximum = maximum;
    }
    getMinimum() {
        return this.minimum;
    }
    getMaximum() {
        return this.maximum;
    }
    parse(reader) {
        const start = reader.getCursor();
        const result = this.readNumber(reader);
        if (result < this.minimum) {
            reader.setCursor(start);
            throw this.getTooSmallError().createWithContext(reader, result, this.minimum);
        }
        else if (result > this.maximum) {
            reader.setCursor(start);
            throw this.getTooBigError().createWithContext(reader, result, this.maximum);
        }
        return result;
    }
}
exports.NumberArgumentType = NumberArgumentType;
//# sourceMappingURL=NumberArgumentType.js.map