import {Listener} from "../lib/struct/Listener";
import {BaileysEventMap, WAMessage} from "@adiwajshing/baileys-md";
import {getMimetype} from "../utils/Utils";
import {MessageController} from "../database/controllers/MessageController";

export default class MessageUpsert extends Listener {
    private stop: boolean;

    constructor() {
        super({
            event: "messages.upsert",
            id: "messages.upsert"
        });
        this.stop = false;
    }

    async execute(args: BaileysEventMap["messages.upsert"]): Promise<void | Promise<void>> {
        const message = args.messages[0];
        await this.saveMessage(message)

    }

    async saveMessage(message: WAMessage) {
        await MessageController.create({message: JSON.parse(JSON.stringify(message))})
    }
}
