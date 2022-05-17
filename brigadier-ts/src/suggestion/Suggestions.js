"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Suggestions = void 0;
const internal_1 = require("../internal");
class Suggestions {
    constructor(range, suggestions) {
        this.range = range;
        this.suggestions = suggestions;
    }
    getRange() {
        return this.range;
    }
    getList() {
        return this.suggestions;
    }
    isEmpty() {
        return this.suggestions.length === 0;
    }
    static empty() {
        return Promise.resolve(Suggestions.EMPTY);
    }
    static merge(command, input) {
        if (input.length === 0) {
            return Suggestions.EMPTY;
        }
        else if (input.length === 1) {
            return input[0];
        }
        const texts = new Set();
        for (const suggestions of input) {
            suggestions.getList().forEach(s => texts.add(s));
        }
        return Suggestions.create(command, Array.from(texts));
    }
    static create(command, suggestions) {
        if (suggestions.length === 0) {
            return Suggestions.EMPTY;
        }
        let start = Infinity;
        let end = -Infinity;
        for (const suggestion of suggestions) {
            start = Math.min(suggestion.getRange().getStart(), start);
            end = Math.max(suggestion.getRange().getEnd(), end);
        }
        const range = new internal_1.StringRange(start, end);
        const texts = [];
        for (const suggestion of suggestions) {
            texts.push(suggestion.expand(command, range));
        }
        return new Suggestions(range, texts.sort());
    }
}
exports.Suggestions = Suggestions;
Suggestions.EMPTY = new Suggestions(internal_1.StringRange.at(0), []);
//# sourceMappingURL=Suggestions.js.map