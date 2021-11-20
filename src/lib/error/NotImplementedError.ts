import {ClientError} from "./Error";

export class NotImplementedError extends ClientError {
    constructor(message?: string) {
        super("Not Implemented Error", message);
    }
}
