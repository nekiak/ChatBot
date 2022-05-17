import {Category, Command} from "../../lib/struct/Command";
import {literal} from "../../../brigadier-ts";
import {WAMessage} from "@adiwajshing/baileys";
import {formatToSticker} from "../../utils/MediaUtils";
import {cleanJid, getMimetype, getQuotedMessage} from "../../utils/Utils";

export default class Sticker extends Command {
    constructor() {
        super({
            id: "sticker",
            description: "Hace stickers",
            usage: "sticker",
            aliases: ["sticker", "s"],
            category: Category.IMAGEN,
            tags: ["needsImage", "needsVideo"]
        });
    }

    init() {
        this.dispatcher.register(literal(this.id)
            .executes(async context => {
                const message: WAMessage = context.getSource();
                try {
                        const media = await this.downloadMedia(message)
                        const stickerBuf = await formatToSticker(media.buffer, getMimetype(message), {
                            name: `+${cleanJid(this.client.sock.user.id).split("@")[0]}`,
                            author: this.client.sock.user.name
                        });
                        await this.sendMessage(message.key.remoteJid, {sticker: stickerBuf}, getQuotedMessage(message) ? {quoted: getQuotedMessage(message)} : {quoted: message})
                    } catch {
                        await this.sendMessage(message.key.remoteJid, {text: "Hubo un error mientras se convertía la imagen/video a sticker."}, {quoted: message})
                    }
                }
            )
        )
    }
}
