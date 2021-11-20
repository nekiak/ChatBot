import {Command} from "../../lib/struct/Command";
import {literal} from "brigadier-ts";
import {WAMessage} from "@adiwajshing/baileys-md";
import {animStickerToVideo, formatImageToSticker, formatToSticker} from "../../utils/MediaUtils";

export default class FullSticker extends Command {
    constructor() {
        super({
            id: "fullsticker",
            description: "test",
            usage: "test",
            aliases: ["fullsticker", "fs"],
            tags: ["needsAnimatedSticker", "needsStaticSticker"],
            cooldown: 5
        });
    }

    init() {
        this.dispatcher.register(literal(this.id)
            .executes(async context => {
                const message: WAMessage = context.getSource();
                const media = await this.downloadMedia(message);
                if (media.isAnimSticker) {
                    await this.sendMessage(message.key.remoteJid, {video: (await animStickerToVideo(media.buffer))})
                } else {
                    await this.sendMessage(message.key.remoteJid, {image: (await formatImageToSticker(media.buffer))})
                }
            })
        )
    }

}
