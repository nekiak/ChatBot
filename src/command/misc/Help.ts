import {Category, Command} from "../../lib/struct/Command";
import {argument, literal, StringArgumentType} from "../../../brigadier-ts";
import {WAMessage} from "@adiwajshing/baileys";
import {Tag} from "../../lib/handler/command/Tag";
import {ListMessage} from "../../lib/builder/ListMessage";

export default class extends Command {
    constructor() {
        super({
            id: "help",
            aliases: ["help", "ayuda", "comandos"],
            description: "Menú de ayuda",
            category: Category.MISCELANEO,
            usage: "help",
        });
    }

    init() {
        this.dispatcher.register(literal(this.id)
            .then(literal("rowid")
                .then(argument("command", new StringArgumentType("greedy_phrase"))
                    .executes(async context => {
                        const message: WAMessage = context.getSource()
                        const commandName = context.get("command").split(" ")[0]
                        this.handler.modules.forEach(command => {
                            if (command instanceof Command && (!command.options.tags || !command.options.tags.includes(Tag.devOnly) || command.options.category !== Category.HIDDEN)) {
                                if (command.options.id === commandName) {
                                    const text = `
*〘 ${command.options.id} 〙*
*┏━━━━━━━━━━━━━━━━━━━━*
*┠⊷ Descripción:* _${command.options.description}_.
*┠⊷ Categoría:* _${command.options.category}_.
*┠⊷ Nombres alternativos:* ${command.options.aliases.length > 1 ? "*" + command.options.aliases.join(", ") + "*" : "_No tiene._"}
*┠⊷ Cooldown:* _${command.options.cooldown} segundos_.
*┠⊷ Uso:* _${this.client.prefix}${command.options.usage}_
*┗━━━━━━━━━━━━━━━━━━━━*
        `;
                                    return this.sendMessage(message.key.remoteJid, {text: text})
                                }
                            }
                        })
                    })
                )
            )
            .executes(async context => {
                const message: WAMessage = context.getSource()
                const listMessage = new ListMessage()
                listMessage.setTitle("Menú de ayuda")
                    .setText("Clickea el comando para ver mas información.")
                    .setButtonText("Presiona para ver los comandos.")
                let numberofcommands = 0;
                this.handler.modules.forEach(command => {
                    if (command instanceof Command ) {
                        if ((!command.options.tags || !command.options.tags.includes(Tag.devOnly)) && command.options.category !== Category.HIDDEN) {
                            numberofcommands++;
                            listMessage.addRowToSection(command.options.category, {
                                title: command.id, rowId: this.client.prefix + "help rowid " + command.id, description: command.options.description
                            })
                        }
                    }
                })
                listMessage.setFooter("Cantidad de comandos: " + numberofcommands)
                await this.sendMessage(message.key.remoteJid, listMessage.build())
            })
        )
    }
}