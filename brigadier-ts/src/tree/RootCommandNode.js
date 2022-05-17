"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootCommandNode = void 0;
const internal_1 = require("../internal");
class RootCommandNode extends internal_1.CommandNode {
    constructor() {
        super(null, c => true, null, c => null, false);
    }
    parse(reader, contextBuilder) {
    }
    getName() {
        return "";
    }
    getUsageText() {
        return "";
    }
    listSuggestions(context, builder) {
        return internal_1.Suggestions.empty();
    }
}
exports.RootCommandNode = RootCommandNode;
//# sourceMappingURL=RootCommandNode.js.map