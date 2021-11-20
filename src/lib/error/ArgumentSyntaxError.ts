import {ClientError} from "./Error";

export class ArgumentSyntaxError extends ClientError {
    constructor(message?: string) {
        super("Argument Syntax Error", message);
    }
}
