import {Category, Command} from "../../lib/struct/Command";
import {literal} from "../../../brigadier-ts";
import {WAMessage} from "@adiwajshing/baileys";
import {getQuotedMessage} from "../../utils/Utils";

import {Tag} from "../../lib/handler/command/Tag";
import {animStickerToVideo, formatImageToSticker} from "../../utils/MediaUtils";
import {promises as fs} from "fs";


export default class FullSticker extends Command {
    constructor() {
        super({
            id: "fullsticker",
            description: "Amplía los stickers",
            usage: "fullsticker",
            aliases: ["fullsticker", "fs"],
            category: Category.IMAGEN,
            tags: [Tag.needsAnimatedSticker, Tag.needsStaticSticker],
            cooldown: 5
        });
    }

    init() {
        this.dispatcher.register(literal(this.id)
            .executes(async context => {
                    const message: WAMessage = context.getSource();
                    try {
                        const media = await this.downloadMedia(message)
                        if (media.isAnimSticker) {
                            await this.sendMessage(message.key.remoteJid, {video: (await animStickerToVideo(media.buffer)), gifPlayback: true})
                        } else {
                            await this.sendMessage(message.key.remoteJid, {image: (await formatImageToSticker(media.buffer))})
                        }
                    } catch {
                        await this.sendMessage(message.key.remoteJid, {text: "Error al descargar el sticker."})
                    }
                }
            )
        )
    }
}
