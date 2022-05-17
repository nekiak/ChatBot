import {Category, Command} from "../../lib/struct/Command";
import {argument, literal, StringArgumentType} from "../../../brigadier-ts";
import {WAMessage} from "@adiwajshing/baileys";
import {Tag} from "../../lib/handler/command/Tag";
import {sleep} from "../../utils/Utils";

export default class React extends Command {
    constructor() {
        super({
            id: "react",
            description: "Reacciona a un mensaje",
            usage: "react <emoji>",
            aliases: ["react", "r"],
            category: Category.MISCELANEO,
            tags: [Tag.needsQuotedMessage],
        });
    }

    init() {
        this.dispatcher.register(literal(this.id)
            .then(argument("emoji", new StringArgumentType("greedy_phrase"))
                .executes(async context => {
                    const message: WAMessage = context.getSource();
                    const quotedMessage = message.message?.extendedTextMessage?.contextInfo;
                    await this.sendMessage(message.key.remoteJid, {
                        react: {
                            text: context.get("emoji"),
                            key: {
                                remoteJid: message.key.remoteJid,
                                id: quotedMessage.stanzaId,
                                participant: quotedMessage.participant
                            }
                        }
                    })
                })
            )
        )
    }
}