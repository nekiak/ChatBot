import {Command} from "../../lib/struct/Command";
import {literal} from "../../../brigadier-ts";
import {WAMessage} from "@adiwajshing/baileys";
import {formatToSticker} from "../../utils/MediaUtils";
import {cleanJid, createMessageCollector, getMimetype} from "../../utils/Utils";

export default class Sticker extends Command {
    constructor() {
        super({
            id: "randommessage",
            description: "test",
            usage: "randommessage",
            aliases: ["rm", "randommessage", "mensajerandom"],
            tags: [],
            cooldown: 5
        });
    }

    init() {
        this.dispatcher.register(literal(this.id)
            .executes(async context => {
                const replyMessage = await this.sendMessage(context.getSource().key.remoteJid, {text: "A"});
                const collectorFilter = (m) => {
                    return (m.key.remoteJid === replyMessage.key.remoteJid && m.message?.extendedTextMessage?.contextInfo?.stanzaId === replyMessage.key.id);
                };

                const collector = createMessageCollector(context.getSource(), collectorFilter, {
                    time: 30 * 1000,
                    max: 10
                }, this.client.sock);

                collector.on(("collect"), async (msg) => {
                    await this.sendMessage(msg.key.remoteJid, {text: "AHAHAA"});
                });
            })
        )
    }
}
