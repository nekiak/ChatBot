"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.argument = exports.RequiredArgumentBuilder = void 0;
const internal_1 = require("../internal");
class RequiredArgumentBuilder extends internal_1.ArgumentBuilder {
    constructor(name, type) {
        super();
        this.name = name;
        this.type = type;
    }
    getThis() {
        return this;
    }
    getName() {
        return this.name;
    }
    getType() {
        return this.type;
    }
    build() {
        const result = new internal_1.ArgumentCommandNode(this.getName(), this.getType(), this.getCommand(), this.getRequirement(), this.getRedirect(), this.getRedirectModifier(), this.isFork());
        for (const argument of this.getArguments()) {
            result.addChild(argument);
        }
        return result;
    }
}
exports.RequiredArgumentBuilder = RequiredArgumentBuilder;
function argument(name, type) {
    return new RequiredArgumentBuilder(name, type);
}
exports.argument = argument;
//# sourceMappingURL=RequiredArgumentBuilder.js.map