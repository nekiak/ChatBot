import {Command} from "../../lib/struct/Command";
import {literal} from "../../../brigadier-ts";
import {WAMessage} from "@adiwajshing/baileys";
import {formatToSticker} from "../../utils/MediaUtils";
import {cleanJid, getMimetype} from "../../utils/Utils";

export default class Sticker extends Command {
    constructor() {
        super({
            id: "sticker",
            description: "test",
            usage: "test",
            aliases: ["sticker", "s"],
            tags: ["needsImage", "needsVideo"],
            cooldown: 5
        });
    }

    init() {
        this.dispatcher.register(literal(this.id)
            .executes(async context => {
                    const message: WAMessage = context.getSource();
                    const media = await this.downloadMedia(message)
                    const stickerBuf = await formatToSticker(media.buffer, getMimetype(message), {
                        name: `+${cleanJid(this.client.sock.user.id).split("@")[0]}`,
                        author: this.client.sock.user.name
                    });
                    await this.sendMessage(message.key.remoteJid, {sticker: stickerBuf})
                }
            )
        )
    }
}
