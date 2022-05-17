"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.literal = exports.LiteralArgumentBuilder = void 0;
const internal_1 = require("../internal");
class LiteralArgumentBuilder extends internal_1.ArgumentBuilder {
    constructor(literal) {
        super();
        this.literal = literal;
    }
    getThis() {
        return this;
    }
    getLiteral() {
        return this.literal;
    }
    build() {
        const result = new internal_1.LiteralCommandNode(this.getLiteral(), this.getCommand(), this.getRequirement(), this.getRedirect(), this.getRedirectModifier(), this.isFork());
        for (const argument of this.getArguments()) {
            result.addChild(argument);
        }
        return result;
    }
}
exports.LiteralArgumentBuilder = LiteralArgumentBuilder;
function literal(name) {
    return new LiteralArgumentBuilder(name);
}
exports.literal = literal;
//# sourceMappingURL=LiteralArgumentBuilder.js.map