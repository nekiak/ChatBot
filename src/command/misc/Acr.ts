import {Category, Command, CustomMessage} from "../../lib/struct/Command";
import {argument, literal, StringArgumentType} from "../../../brigadier-ts";
import {WAMessage} from "@adiwajshing/baileys";
import {createAcr, deleteAcr, getAcr, getAllAcr} from "../../database/controllers/AcrController";
import {IAcr} from "../../database/models/AcrModel";
import {getQuotedMessage} from "../../utils/Utils";
import {Tag} from "../../lib/handler/command/Tag";


export default class Acr extends Command {
    constructor() {
        super({
            id: "acr",
            description: "Agrega una reacción personalizada.",
            usage: "acr [remove|list|texto]",
            aliases: ["acr"],
            category: Category.MISCELANEO,
            tags: [Tag.groupOnly],
            cooldown: 5
        });
    }

    init() {
        this.dispatcher.register(literal(this.id)
            .then(literal("remove")
                .then(argument("r", new StringArgumentType("greedy_phrase"))
                    .executes(async c => {
                        const name = c.get("r").toLowerCase();
                        const msg: WAMessage = c.getSource();
                        if (!(await getAcr(name, msg.key.remoteJid))) {
                            return this.sendCustomMessage(msg.key.remoteJid, "Esta reacción no existe!", CustomMessage.ERROR);
                        }
                        await deleteAcr(name, msg.key.remoteJid);
                    })
                )
            ).then(literal("list")
                .executes(async c => {
                    const msg: WAMessage = c.getSource();
                    const list: IAcr[] = JSON.parse(JSON.stringify(await getAllAcr(msg.key.remoteJid)))
                    if (list.length == 0) {
                        return await this.sendCustomMessage(msg.key.remoteJid, "No existe ninguna reacción, crea reacciones respondiendo a un mensaje con " + this.client.prefix + "acr <nombre> y reintenta este comando.", CustomMessage.ERROR)
                    };
                    let reactions = "*Lista de reacciones en " + (await this.client.sock.groupMetadata(msg.key.remoteJid)).subject + "*\n\n"
                    for (const item of list) {
                        reactions += `- " *${item.name}* " _hecha por @${item.participant.split("@")[0]}_\n`
                    }
                    const participants = list.map(x => x.participant);
                    await this.sendMessage(msg.key.remoteJid, {text: reactions, mentions: participants});
                })
            ).then(argument("name", new StringArgumentType("greedy_phrase"))
                    .executes(async c => {
                const msg: WAMessage = c.getSource();
                if (msg.message.extendedTextMessage) {
                    const message = getQuotedMessage(msg);
                    await createAcr({name: c.get("name").toLowerCase(), key: message.key.remoteJid, participant: message.key.participant, message: message.toJSON()})
                } else {
                    return this.sendCustomMessage(msg.key.remoteJid, "Debes responder un mensaje con el comando!", CustomMessage.ERROR)
                }
            })
        )
        )
    }
}
