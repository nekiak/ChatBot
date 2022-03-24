import {model, Schema} from "mongoose";
import {WAMessage} from "@adiwajshing/baileys";

export interface IMessageModel {
    message: Object
}

export const MessageSchema = model<IMessageModel>('MessageSchema', new Schema<IMessageModel>({
    message: {
        type: Object,
        required: true,
        unique: true
    }
}));
