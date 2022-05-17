"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandSyntaxError = void 0;
const internal_1 = require("../internal");
const CONTEXT_AMOUNT = 10;
class CommandSyntaxError extends Error {
    constructor(message, input, cursor) {
        super(message);
        Object.setPrototypeOf(this, CommandSyntaxError.prototype);
        this.input = input;
        this.cursor = cursor;
        if (input && cursor >= 0) {
            this.message += ` at position ${cursor}: `;
            const cursor2 = Math.min(this.input.length, this.cursor);
            this.message += cursor > CONTEXT_AMOUNT ? "..." : "";
            this.message += this.input.substring(Math.max(0, cursor2 - CONTEXT_AMOUNT), cursor2);
            this.message += "<--[HERE]";
        }
    }
}
exports.CommandSyntaxError = CommandSyntaxError;
CommandSyntaxError.DOUBLE_TOO_SMALL = new internal_1.CommandErrorType((found, min) => `Double must not be less than ${min}, found ${found}`);
CommandSyntaxError.DOUBLE_TOO_BIG = new internal_1.CommandErrorType((found, max) => `Double must not be more than ${max}, found ${found}`);
CommandSyntaxError.FLOAT_TOO_SMALL = new internal_1.CommandErrorType((found, min) => `Float must not be less than ${min}, found ${found}`);
CommandSyntaxError.FLOAT_TOO_BIG = new internal_1.CommandErrorType((found, max) => `Float must not be more than ${max}, found ${found}`);
CommandSyntaxError.INTEGER_TOO_SMALL = new internal_1.CommandErrorType((found, min) => `Integer must not be less than ${min}, found ${found}`);
CommandSyntaxError.INTEGER_TOO_BIG = new internal_1.CommandErrorType((found, max) => `Integer must not be more than ${max}, found ${found}`);
CommandSyntaxError.LONG_TOO_SMALL = new internal_1.CommandErrorType((found, min) => `Long must not be less than ${min}, found ${found}`);
CommandSyntaxError.LONG_TOO_BIG = new internal_1.CommandErrorType((found, max) => `Long must not be more than ${max}, found ${found}`);
CommandSyntaxError.LITERAL_INCORRECT = new internal_1.CommandErrorType((expected) => `Expected literal ${expected}`);
CommandSyntaxError.READER_EXPECTED_START_OF_QUOTE = new internal_1.CommandErrorType(() => `Expected quote to start a string`);
CommandSyntaxError.READER_EXPECTED_END_OF_QUOTE = new internal_1.CommandErrorType(() => `Unclosed quoted string`);
CommandSyntaxError.READER_INVALID_ESCAPE = new internal_1.CommandErrorType((character) => `Invalid escape sequence '${character}' in quoted string`);
CommandSyntaxError.READER_INVALID_BOOL = new internal_1.CommandErrorType((value) => `Invalid bool, expected true or false but found '${value}'`);
CommandSyntaxError.READER_EXPECTED_BOOL = new internal_1.CommandErrorType(() => `Expected bool`);
CommandSyntaxError.READER_INVALID_INT = new internal_1.CommandErrorType((value) => `Invalid integer '${value}'`);
CommandSyntaxError.READER_EXPECTED_INT = new internal_1.CommandErrorType(() => `Expected integer`);
CommandSyntaxError.READER_INVALID_FLOAT = new internal_1.CommandErrorType((value) => `Invalid float '${value}'`);
CommandSyntaxError.READER_EXPECTED_FLOAT = new internal_1.CommandErrorType(() => `Expected float`);
CommandSyntaxError.DISPATCHER_UNKNOWN_COMMAND = new internal_1.CommandErrorType(() => `Unknown Command`);
CommandSyntaxError.DISPATCHER_UNKNOWN_ARGUMENT = new internal_1.CommandErrorType(() => `Incorrect argument for command`);
CommandSyntaxError.DISPATCHER_EXPECTED_ARGUMENT_SEPARATOR = new internal_1.CommandErrorType(() => `Expected whitespace to end one argument, but found trailing data`);
CommandSyntaxError.DISPATCHER_PARSE_ERROR = new internal_1.CommandErrorType((message) => `Could not parse command: ${message}`);
//# sourceMappingURL=CommandSyntaxError.js.map