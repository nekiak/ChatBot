import * as googleTTS from "google-tts-api";
import {formatMp3ToOgg} from "../../utils/MediaUtils";
import {splitString} from "../../utils/Utils";
import {Category, Command} from "../../lib/struct/Command";
import {argument, literal, StringArgumentType} from "../../../brigadier-ts";
import {WAMessage} from "@adiwajshing/baileys";

export default class extends Command {
    constructor() {
        super({
            id: "tts",
            aliases: ["tts"],
            description: "Convierte texto en audio!",
            category: Category.MISCELANEO,
            usage: "tts <texto>",
        });
    }

    init() {
        this.dispatcher.register(literal(this.id)
            .then(argument("texto", new StringArgumentType("greedy_phrase"))
                .executes(async c => {
                    const message: WAMessage = c.getSource()
                    await this.sendMessage(message.key.remoteJid, {audio: (await this.getBase64Audio(c.get("texto").substring(0, 10000))), ptt: true, mimetype: "audio/mpeg"})
                })
            )
        );
    }

    async getBase64Audio(text: string): Promise<Buffer> {
        const splitted = splitString(200, text).join(" ");
        const buf = await googleTTS
            .getAllAudioBase64(splitted, {
                lang: "es",
                slow: false,
                host: "https://translate.google.com",
                timeout: 30000,
                splitPunct: " ",
            });
        let base = "";
        for (const b of buf) {
            base += b.base64;
        }
        return formatMp3ToOgg(Buffer.from(base, "base64"));
    }
}