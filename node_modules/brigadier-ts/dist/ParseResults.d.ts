import { CommandContextBuilder, StringReader, CommandNode, CommandSyntaxError } from "./internal";
export declare class ParseResults<S> {
    private context;
    private reader;
    private errors;
    constructor(context: CommandContextBuilder<S>, reader: StringReader, errors: Map<CommandNode<S>, CommandSyntaxError>);
    getContext(): CommandContextBuilder<S>;
    getReader(): StringReader;
    getErrors(): Map<CommandNode<S>, CommandSyntaxError>;
}
