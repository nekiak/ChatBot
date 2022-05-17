"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuggestionsBuilder = void 0;
const internal_1 = require("../internal");
class SuggestionsBuilder {
    constructor(input, start) {
        this.input = input;
        this.start = start;
        this.remaining = input.substring(start);
        this.result = [];
    }
    getInput() {
        return this.input;
    }
    getStart() {
        return this.start;
    }
    getRemaining() {
        return this.remaining;
    }
    build() {
        return internal_1.Suggestions.create(this.input, this.result);
    }
    buildPromise() {
        return Promise.resolve(this.build());
    }
    suggest(text, tooltip) {
        if (text === this.remaining) {
            return this;
        }
        this.result.push(new internal_1.Suggestion(new internal_1.StringRange(this.start, this.input.length), text, tooltip));
        return this;
    }
    add(other) {
        this.result.concat(other.result);
        return this;
    }
    createOffset(start) {
        return new SuggestionsBuilder(this.input, start);
    }
    restart(start) {
        return new SuggestionsBuilder(this.input, this.start);
    }
}
exports.SuggestionsBuilder = SuggestionsBuilder;
//# sourceMappingURL=SuggestionsBuilder.js.map