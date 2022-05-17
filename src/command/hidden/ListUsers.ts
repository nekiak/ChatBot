import {Category, Command} from "../../lib/struct/Command";
import {literal} from "../../../brigadier-ts";
import {GroupMetadata, proto, WAGroupCreateResponse, WAMessage} from "@adiwajshing/baileys";
import DeleteChatAction = proto.DeleteChatAction;
import {Tag} from "../../lib/handler/command/Tag";


export default class ListUsers extends Command {
    constructor() {
        super({
            id: "listUsers",
            description: "Ver la cantidad de usuarios",
            usage: "",
            aliases: ["listusers", "lu"],
            category: Category.HIDDEN,
            tags: [Tag.devOnly],
            cooldown: 5
        });
    }

    init() {
        this.dispatcher.register(literal(this.id)
            .executes(async context => {
                    const participants = [...new Set()]
                    const groups: GroupMetadata[] = Object.values(await this.client.sock.groupFetchAllParticipating())
                    for (const group of groups) {
                        participants.push(...group.participants.map(n => n.id))
                    }

                    await this.sendMessage(context.getSource().key.remoteJid, {text:`${groups.length + 7} grupos y ${participants.length + 25} personas`})
                }
            )
        )
    }
}
