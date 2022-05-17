"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArgumentBuilder = void 0;
const internal_1 = require("../internal");
class ArgumentBuilder {
    constructor() {
        this.arguments = new internal_1.RootCommandNode();
        this.requirement = s => true;
    }
    then(argument) {
        const child = argument instanceof internal_1.CommandNode ? argument : argument.build();
        this.arguments.addChild(child);
        return this.getThis();
    }
    executes(command) {
        this.command = command;
        return this.getThis();
    }
    requires(requirement) {
        this.requirement = requirement;
        return this.getThis();
    }
    redirect(target, modifier = null) {
        return this.forward(target, modifier, false);
    }
    fork(target, modifier) {
        return this.forward(target, modifier, true);
    }
    forward(target, modifier, forks) {
        this.target = target;
        this.modifier = modifier;
        this.forks = forks;
        return this.getThis();
    }
    getArguments() {
        return this.arguments.getChildren();
    }
    getCommand() {
        return this.command;
    }
    getRequirement() {
        return this.requirement;
    }
    getRedirect() {
        return this.target;
    }
    getRedirectModifier() {
        return this.modifier;
    }
    isFork() {
        return this.forks;
    }
}
exports.ArgumentBuilder = ArgumentBuilder;
//# sourceMappingURL=ArgumentBuilder.js.map