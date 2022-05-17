"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Suggestion = void 0;
class Suggestion {
    constructor(range, text, tooltip) {
        this.range = range;
        this.text = text;
        this.tooltip = tooltip;
    }
    getRange() {
        return this.range;
    }
    getText() {
        return this.text;
    }
    getTooltip() {
        return this.tooltip;
    }
    apply(input) {
        if (this.range.getStart() == 0 && this.range.getEnd() === input.length) {
            return this.text;
        }
        let result = "";
        if (this.range.getStart() > 0) {
            result += input.substring(0, this.range.getStart());
        }
        result += this.text;
        if (this.range.getEnd() < input.length) {
            result += input.substring(this.range.getEnd());
        }
        return result;
    }
    expand(command, range) {
        if (range === this.range) {
            return this;
        }
        let result = "";
        if (range.getStart() < this.range.getStart()) {
            result += command.substring(range.getStart(), this.range.getStart());
        }
        result += this.text;
        if (range.getEnd() > this.range.getEnd()) {
            result += command.substring(this.range.getEnd(), range.getEnd());
        }
        return new Suggestion(range, result, this.tooltip);
    }
}
exports.Suggestion = Suggestion;
//# sourceMappingURL=Suggestion.js.map