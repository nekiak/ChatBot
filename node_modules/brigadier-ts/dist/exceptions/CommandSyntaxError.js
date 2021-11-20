"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandSyntaxError = void 0;
var internal_1 = require("../internal");
var CONTEXT_AMOUNT = 10;
var CommandSyntaxError = /** @class */ (function (_super) {
    __extends(CommandSyntaxError, _super);
    function CommandSyntaxError(message, input, cursor) {
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, CommandSyntaxError.prototype);
        _this.input = input;
        _this.cursor = cursor;
        if (input && cursor >= 0) {
            _this.message += " at position " + cursor + ": ";
            var cursor2 = Math.min(_this.input.length, _this.cursor);
            _this.message += cursor > CONTEXT_AMOUNT ? "..." : "";
            _this.message += _this.input.substring(Math.max(0, cursor2 - CONTEXT_AMOUNT), cursor2);
            _this.message += "<--[HERE]";
        }
        return _this;
    }
    CommandSyntaxError.DOUBLE_TOO_SMALL = new internal_1.CommandErrorType(function (found, min) { return "Double must not be less than " + min + ", found " + found; });
    CommandSyntaxError.DOUBLE_TOO_BIG = new internal_1.CommandErrorType(function (found, max) { return "Double must not be more than " + max + ", found " + found; });
    CommandSyntaxError.FLOAT_TOO_SMALL = new internal_1.CommandErrorType(function (found, min) { return "Float must not be less than " + min + ", found " + found; });
    CommandSyntaxError.FLOAT_TOO_BIG = new internal_1.CommandErrorType(function (found, max) { return "Float must not be more than " + max + ", found " + found; });
    CommandSyntaxError.INTEGER_TOO_SMALL = new internal_1.CommandErrorType(function (found, min) { return "Integer must not be less than " + min + ", found " + found; });
    CommandSyntaxError.INTEGER_TOO_BIG = new internal_1.CommandErrorType(function (found, max) { return "Integer must not be more than " + max + ", found " + found; });
    CommandSyntaxError.LONG_TOO_SMALL = new internal_1.CommandErrorType(function (found, min) { return "Long must not be less than " + min + ", found " + found; });
    CommandSyntaxError.LONG_TOO_BIG = new internal_1.CommandErrorType(function (found, max) { return "Long must not be more than " + max + ", found " + found; });
    CommandSyntaxError.LITERAL_INCORRECT = new internal_1.CommandErrorType(function (expected) { return "Expected literal " + expected; });
    CommandSyntaxError.READER_EXPECTED_START_OF_QUOTE = new internal_1.CommandErrorType(function () { return "Expected quote to start a string"; });
    CommandSyntaxError.READER_EXPECTED_END_OF_QUOTE = new internal_1.CommandErrorType(function () { return "Unclosed quoted string"; });
    CommandSyntaxError.READER_INVALID_ESCAPE = new internal_1.CommandErrorType(function (character) { return "Invalid escape sequence '" + character + "' in quoted string"; });
    CommandSyntaxError.READER_INVALID_BOOL = new internal_1.CommandErrorType(function (value) { return "Invalid bool, expected true or false but found '" + value + "'"; });
    CommandSyntaxError.READER_EXPECTED_BOOL = new internal_1.CommandErrorType(function () { return "Expected bool"; });
    CommandSyntaxError.READER_INVALID_INT = new internal_1.CommandErrorType(function (value) { return "Invalid integer '" + value + "'"; });
    CommandSyntaxError.READER_EXPECTED_INT = new internal_1.CommandErrorType(function () { return "Expected integer"; });
    CommandSyntaxError.READER_INVALID_FLOAT = new internal_1.CommandErrorType(function (value) { return "Invalid float '" + value + "'"; });
    CommandSyntaxError.READER_EXPECTED_FLOAT = new internal_1.CommandErrorType(function () { return "Expected float"; });
    CommandSyntaxError.DISPATCHER_UNKNOWN_COMMAND = new internal_1.CommandErrorType(function () { return "Unknown Command"; });
    CommandSyntaxError.DISPATCHER_UNKNOWN_ARGUMENT = new internal_1.CommandErrorType(function () { return "Incorrect argument for command"; });
    CommandSyntaxError.DISPATCHER_EXPECTED_ARGUMENT_SEPARATOR = new internal_1.CommandErrorType(function () { return "Expected whitespace to end one argument, but found trailing data"; });
    CommandSyntaxError.DISPATCHER_PARSE_ERROR = new internal_1.CommandErrorType(function (message) { return "Could not parse command: " + message; });
    return CommandSyntaxError;
}(Error));
exports.CommandSyntaxError = CommandSyntaxError;
