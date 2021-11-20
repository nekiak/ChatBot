"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParsedArgument = void 0;
var internal_1 = require("../internal");
var ParsedArgument = /** @class */ (function () {
    function ParsedArgument(start, end, result) {
        this.range = new internal_1.StringRange(start, end);
        this.result = result;
    }
    ParsedArgument.prototype.getRange = function () {
        return this.range;
    };
    ParsedArgument.prototype.getResult = function () {
        return this.result;
    };
    return ParsedArgument;
}());
exports.ParsedArgument = ParsedArgument;
