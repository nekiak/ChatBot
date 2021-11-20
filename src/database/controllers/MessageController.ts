import {IMessageModel, MessageSchema} from '../models/MessageModel';
import mongo from "mongoose";
import config from "../../config.json";
import {proto} from "@adiwajshing/baileys-md";

// mongoose find element in schema
export namespace MessageController {
    import WebMessageInfo = proto.WebMessageInfo;
    import IWebMessageInfo = proto.IWebMessageInfo;

    export async function findOne(filter: {}) {
        const msg = await MessageSchema.findOne(filter);
        return msg
    }

    export async function findAll(): Promise<IMessageModel[]> {
        return MessageSchema.find();
    }

    export async function create(message: IMessageModel): Promise<IMessageModel> {
        return await MessageSchema.create(message);
    }

    export async function remove(filter: {}): Promise<IMessageModel> {
        return MessageSchema.remove(filter);
    }
}

