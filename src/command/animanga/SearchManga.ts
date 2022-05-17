import {Category, Command} from "../../lib/struct/Command";
import {argument, literal, StringArgumentType} from "../../../brigadier-ts";
import {WAMessage} from "@adiwajshing/baileys";
import {ListMessage} from "../../lib/builder/ListMessage";
import { Mal, Jikan4 } from '../../../node-myanimelist';


export default class extends Command {
    constructor() {
        super({
            id: "searchmanga",
            description: "Busca manga",
            usage: "searchmanga <nombre del manga>",
            aliases: ["searchmanga", "sm"],
            category: Category.ANIMANGA,
            tags: []
        });
    }

    async init() {
        this.dispatcher.register(literal(this.id)
            .then(literal("rowid")
                .then(argument("mangaid", new StringArgumentType("single_word"))
                    .executes(async context => {
                            const message = context.getSource()
                            let mangas = new Jikan4.Manga(context.get("mangaid"))
                            const data = ((await mangas.info()).data);
                            const mainCharacters = (await mangas.characters()).data.filter(char => {
                                return char.role === "Main";
                            }).map(char => {
                                return char.character.name.split(",").reverse().join(" ").trim();
                            }); // Delete commas and reverse the name (english naming format)

                        const msg = `
*Título*: ${data.title}

*Sinopsis*: ${data.synopsis}

*Protagonista(s)*: ${mainCharacters.join(", ")}

*Géneros*: ${data.genres.map(n => n.name).join(", ")}

*Capítulos*: ${data.chapters}

*Publicado en*: ${data.published.prop.string}

*Status*: ${typeof data.status !== "undefined" ? data.status : "Desconocido"}

*Calificación*: ${data.score}/10

*Rank de popularidad*: ${data.popularity}

*Autor(es)*: ${data.authors.map(n => n.name).join(", ")}
`
                        const templateButtons = [{index: 1, urlButton: {displayText: '⭐ Presiona para mas información ⭐', url: data.url}}]

                        const buttonMessage = {
                            caption: msg,
                            templateButtons: templateButtons,
                            image: {url: data.images.jpg.large_image_url}
                        }

                        await this.sendMessage(message.key.remoteJid, buttonMessage)
                        }
                    )
                )
            )
            .then(argument("name", new StringArgumentType("greedy_phrase"))
                .executes(async context => {
                    const message: WAMessage = context.getSource();
                    const manga_name = context.get("name")
                    let mangas = await Jikan4.mangaSearch({
                        q: manga_name,
                        limit: 10
                    })
                    if (mangas.data.length === 0) {
                        await this.sendMessage(message.key.remoteJid, {text: "No existen mangas con ese nombre."}, {quoted: message})
                        return;
                    }

                    const listMessage = new ListMessage()
                        .setTitle("Resultados de: *" + manga_name + "*")
                        .setText("Presiona el nombre del manga para ver mas información")

                    for (const manga of mangas.data) {
                        listMessage.addRowToSection("Resultados de: " + manga_name, {
                            title: manga.title,
                            description: "Generos: " + manga.genres.map(n => n.name).join(", "),
                            rowId: this.client.prefix + "searchmanga rowid " + manga.mal_id
                        })
                    }

                    await this.sendMessage(message.key.remoteJid, listMessage.build())
                })
            )
        )
    }
}