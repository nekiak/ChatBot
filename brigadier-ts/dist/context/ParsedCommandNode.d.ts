import { CommandNode, StringRange } from "../internal";
export declare class ParsedCommandNode<S> {
    private node;
    private range;
    constructor(node: CommandNode<S>, range: StringRange);
    getNode(): CommandNode<S>;
    getRange(): StringRange;
}
