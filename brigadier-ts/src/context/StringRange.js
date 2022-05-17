"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringRange = void 0;
class StringRange {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    static at(pos) {
        return new StringRange(pos, pos);
    }
    static encompassing(a, b) {
        const start = Math.min(a.getStart(), b.getStart());
        const end = Math.max(a.getEnd(), b.getEnd());
        return new StringRange(start, end);
    }
    getStart() {
        return this.start;
    }
    getEnd() {
        return this.end;
    }
    isEmpty() {
        return this.start === this.end;
    }
    getLength() {
        return this.end - this.start;
    }
}
exports.StringRange = StringRange;
//# sourceMappingURL=StringRange.js.map