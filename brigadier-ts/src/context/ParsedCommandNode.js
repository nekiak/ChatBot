"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParsedCommandNode = void 0;
class ParsedCommandNode {
    constructor(node, range) {
        this.node = node;
        this.range = range;
    }
    getNode() {
        return this.node;
    }
    getRange() {
        return this.range;
    }
}
exports.ParsedCommandNode = ParsedCommandNode;
//# sourceMappingURL=ParsedCommandNode.js.map