"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringReader = void 0;
const CommandSyntaxError_1 = require("./exceptions/CommandSyntaxError");
class StringReader {
    constructor(string) {
        if (string instanceof StringReader) {
            this.string = string.getString();
            this.cursor = string.getCursor();
        }
        else {
            this.string = string;
            this.cursor = 0;
        }
    }
    getString() {
        return this.string;
    }
    getCursor() {
        return this.cursor;
    }
    setCursor(cursor) {
        this.cursor = cursor;
    }
    getRemainingLength() {
        return this.string.length - this.cursor;
    }
    getTotalLength() {
        return this.string.length;
    }
    getRead() {
        return this.string.substring(0, this.cursor);
    }
    getRemaining() {
        return this.string.substring(this.cursor);
    }
    canRead(length = 1) {
        return this.cursor + length <= this.string.length;
    }
    peek(offset = 0) {
        return this.string.charAt(this.cursor + offset);
    }
    read() {
        const char = this.string.charAt(this.cursor);
        this.cursor += 1;
        return char;
    }
    skip() {
        this.cursor += 1;
    }
    isAllowedNumber(c) {
        return c >= "0" && c <= "9" || c === "." || c === "-";
    }
    readInt() {
        const start = this.cursor;
        while (this.canRead() && this.isAllowedNumber(this.peek())) {
            this.skip();
        }
        const number = this.string.substring(start, this.cursor);
        if (number.length === 0) {
            throw CommandSyntaxError_1.CommandSyntaxError.READER_EXPECTED_INT.createWithContext(this);
        }
        try {
            return parseInt(number);
        }
        catch (e) {
            this.cursor = start;
            throw CommandSyntaxError_1.CommandSyntaxError.READER_INVALID_INT.createWithContext(this, number);
        }
    }
    readFloat() {
        const start = this.cursor;
        while (this.canRead() && this.isAllowedNumber(this.peek())) {
            this.skip();
        }
        const number = this.string.substring(start, this.cursor);
        if (number.length === 0) {
            throw CommandSyntaxError_1.CommandSyntaxError.READER_EXPECTED_FLOAT.createWithContext(this);
        }
        try {
            return parseFloat(number);
        }
        catch (e) {
            this.cursor = start;
            throw CommandSyntaxError_1.CommandSyntaxError.READER_INVALID_FLOAT.createWithContext(this, number);
        }
        return 0;
    }
    isAllowedInUnquotedString(c) {
        return c >= "0" && c <= "9"
            || c >= "A" && c <= "Z"
            || c >= "a" && c <= "z"
            || c == "_" || c == "-"
            || c == "." || c == "+";
    }
    isQuotedStringStart(c) {
        return c === "'" || c === "\"";
    }
    readUnquotedString() {
        const start = this.cursor;
        while (this.canRead() && this.isAllowedInUnquotedString(this.peek())) {
            this.skip();
        }
        return this.string.substring(start, this.cursor);
    }
    readStringUntil(terminator) {
        let result = [];
        let escaped = false;
        while (this.canRead()) {
            const c = this.read();
            if (escaped) {
                if (c === terminator || c === "\\") {
                    result.push(c);
                    escaped = false;
                }
                else {
                    this.setCursor(this.cursor - 1);
                    throw CommandSyntaxError_1.CommandSyntaxError.READER_INVALID_ESCAPE.createWithContext(this, c);
                }
            }
            else if (c === "\\") {
                escaped = true;
            }
            else if (c === terminator) {
                return result.join("");
            }
            else {
                result.push(c);
            }
        }
        throw CommandSyntaxError_1.CommandSyntaxError.READER_EXPECTED_END_OF_QUOTE.createWithContext(this);
    }
    readString() {
        if (!this.canRead()) {
            return "";
        }
        const next = this.peek();
        if (this.isQuotedStringStart(next)) {
            this.skip();
            return this.readStringUntil(next);
        }
        return this.readUnquotedString();
    }
    readBoolean() {
        const start = this.cursor;
        const value = this.readUnquotedString();
        if (value.length === 0) {
            throw CommandSyntaxError_1.CommandSyntaxError.READER_EXPECTED_BOOL.createWithContext(this);
        }
        if (value === "true") {
            return true;
        }
        else if (value === "false") {
            return false;
        }
        else {
            throw CommandSyntaxError_1.CommandSyntaxError.READER_INVALID_BOOL.createWithContext(this, value);
        }
    }
}
exports.StringReader = StringReader;
//# sourceMappingURL=StringReader.js.map