import {Module, ModuleOptions} from "../Module";
import {NotImplementedError} from "../error/NotImplementedError";
import {Tag} from "../handler/command/Tag";
import {
    AnyMessageContent,
    downloadContentFromMessage,
    MiscMessageGenerationOptions, proto,
    WAMessage
} from "@adiwajshing/baileys-md";
import {getMimetype} from "../../utils/Utils";


interface ICommandOptions extends ModuleOptions {
    description: string;
    usage: string;
    aliases: Array<string>;
    cooldown: number;
    tags?: Array<Tag | keyof typeof Tag | string>;
}

export class Command extends Module {
    public options: ICommandOptions;
    constructor(options: ICommandOptions) {
        super(options);
        this.options = options;
        this.options.cooldown = options.cooldown || 5
    }


    init () {
        throw new NotImplementedError();
    }

    async downloadMedia(message: WAMessage) {
        const mimetype = getMimetype(message);
        const replace = {
            "image/jpeg": {
                ext: "image",
                type: "imageMessage"
            },
            "image/png": {
                ext: "image",
                type: "imageMessage"
            },
            "video/mp4": {
                ext: "video",
                type: "videoMessage"
            },
            "image/webp": {
                ext: "sticker",
                type: "stickerMessage"
            }
        }

        if (mimetype && replace[mimetype]) {
            const quotedMessage = message.message?.extendedTextMessage?.contextInfo?.quotedMessage;
            const stream = await downloadContentFromMessage(message.message[replace[mimetype].type] ?? quotedMessage[replace[mimetype].type], replace[mimetype].ext);
            let buffer = Buffer.from([])
            for await(const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk])
            }
            const isAnimSticker = mimetype === "image/webp" ? quotedMessage.stickerMessage?.isAnimated : false;
            return {buffer: buffer, mimetype: mimetype, isAnimSticker: isAnimSticker}
        }
    }

    async sendMessage(jid: string, content: AnyMessageContent, options: MiscMessageGenerationOptions = {ephemeralExpiration: 1}) {
        await this.client.limit(() => this.client.sock.sendMessage(jid, content, options));
    }
}

