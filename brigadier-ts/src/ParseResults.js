"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseResults = void 0;
class ParseResults {
    constructor(context, reader, errors) {
        this.context = context;
        this.reader = reader;
        this.errors = errors;
    }
    getContext() {
        return this.context;
    }
    getReader() {
        return this.reader;
    }
    getErrors() {
        return this.errors;
    }
}
exports.ParseResults = ParseResults;
//# sourceMappingURL=ParseResults.js.map