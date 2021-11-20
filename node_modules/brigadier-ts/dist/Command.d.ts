import { CommandContext } from "./internal";
export declare type Command<S> = (c: CommandContext<S>) => number | void | Promise<void>;
