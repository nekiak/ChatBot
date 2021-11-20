import { ArgumentType, StringReader, CommandErrorType } from "../internal";
export declare abstract class NumberArgumentType extends ArgumentType<number> {
    private minimum;
    private maximum;
    constructor(minimum: number, maximum: number);
    getMinimum(): number;
    getMaximum(): number;
    parse(reader: StringReader): number;
    abstract readNumber(reader: StringReader): number;
    abstract getTooSmallError(): CommandErrorType;
    abstract getTooBigError(): CommandErrorType;
}
