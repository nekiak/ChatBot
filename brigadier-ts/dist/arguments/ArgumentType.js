"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArgumentType = void 0;
var internal_1 = require("../internal");
var ArgumentType = /** @class */ (function () {
    function ArgumentType() {
    }
    ArgumentType.prototype.listSuggestions = function (context, builder) {
        return internal_1.Suggestions.empty();
    };
    return ArgumentType;
}());
exports.ArgumentType = ArgumentType;
