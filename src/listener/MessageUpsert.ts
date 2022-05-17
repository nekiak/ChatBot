import {Listener} from "../lib/struct/Listener";
import {BaileysEventMap, MessageUpdateType, proto, SignalCreds, WAMessage} from "@adiwajshing/baileys";
import {getMimetype} from "../utils/Utils";
import {MessageController} from "../database/controllers/MessageController";
import IWebMessageInfo = proto.IWebMessageInfo;
import WebMessageInfo = proto.WebMessageInfo;
import {getAcr} from "../database/controllers/AcrController";

export default class MessageUpsert extends Listener {
    private stop: boolean;

    constructor() {
        super({
            event: "messages.upsert",
            id: "messages.upsert"
        });
        this.stop = false;
    }


    async execute(msg: {messages: WAMessage[], type: MessageUpdateType}): Promise<void> {
        const message = msg.messages[0]
        const text = (message.message?.imageMessage?.caption ?? message.message?.conversation) ||
        (message.message?.extendedTextMessage?.text ?? message.message?.videoMessage?.caption)

        if (text) {
            const acr = await getAcr(text.toLowerCase(), message.key.remoteJid)
            if (acr) {
                let msg = new WebMessageInfo(acr.message as unknown as IWebMessageInfo)
                await this.client.limit(() => this.client.sock.sendMessage(message.key.remoteJid, {forward: msg}));
            }
        }
    }

    async saveMessage(message: WAMessage) {
        await MessageController.create({message: JSON.parse(JSON.stringify(message))})
    }
}
