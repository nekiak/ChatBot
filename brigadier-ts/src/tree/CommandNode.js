"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandNode = void 0;
const internal_1 = require("../internal");
class CommandNode {
    constructor(command, requirement, redirect, modifier, forks) {
        this.children = new Map();
        this.literals = new Map();
        this.arguments = new Map();
        this.command = command;
        this.requirement = requirement;
        this.redirect = redirect;
        this.modifier = modifier;
        this.forks = forks;
    }
    getCommand() {
        return this.command;
    }
    getChildren() {
        return Array.from(this.children.values());
    }
    getChild(name) {
        return this.children.get(name);
    }
    getRedirect() {
        return this.redirect;
    }
    getRedirectModifier() {
        return this.modifier;
    }
    isFork() {
        return this.forks;
    }
    canUse(source) {
        return this.requirement(source);
    }
    addChild(node) {
        const child = this.children.get(node.getName());
        if (child != null) {
            if (node.getCommand() != null) {
                child.command = node.getCommand();
            }
            node.getChildren().forEach((grandChild) => {
                child.addChild(grandChild);
            });
        }
        else {
            this.children.set(node.getName(), node);
            if (node instanceof internal_1.LiteralCommandNode) {
                this.literals.set(node.getName(), node);
            }
            else if (node instanceof internal_1.ArgumentCommandNode) {
                this.arguments.set(node.getName(), node);
            }
        }
    }
    getRelevantNodes(input) {
        if (this.literals.size > 0) {
            const cursor = input.getCursor();
            while (input.canRead() && input.peek() != " ") {
                input.skip();
            }
            const text = input.getString().substring(cursor, input.getCursor());
            input.setCursor(cursor);
            const literal = this.literals.get(text);
            if (literal != null) {
                return [literal];
            }
        }
        return Array.from(this.arguments.values());
    }
}
exports.CommandNode = CommandNode;
//# sourceMappingURL=CommandNode.js.map