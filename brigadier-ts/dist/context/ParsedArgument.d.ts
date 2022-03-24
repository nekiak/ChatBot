import { StringRange } from "../internal";
export declare class ParsedArgument<T> {
    private range;
    private result;
    constructor(start: number, end: number, result: T);
    getRange(): StringRange;
    getResult(): T;
}
