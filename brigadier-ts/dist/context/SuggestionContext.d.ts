import { CommandNode } from "../internal";
export declare class SuggestionContext<S> {
    parent: CommandNode<S>;
    startPos: number;
    constructor(parent: CommandNode<S>, startPos: number);
}
