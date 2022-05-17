import {model, Schema} from "mongoose";

export interface IAcr {
    name: string,
    key: string,
    participant: string,
    message: {}
}

const Acr = model<IAcr>('Acr', new Schema<IAcr>({
    name: { type: String, required: true },
    key: { type: String, required: true },
    participant: { type: String, required: true },
    message: { type: Schema.Types.Mixed, required: true }
}));

export {Acr};