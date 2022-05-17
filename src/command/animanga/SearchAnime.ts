import {Category, Command} from "../../lib/struct/Command";
import {argument, literal, StringArgumentType} from "../../../brigadier-ts";
import {WAMessage} from "@adiwajshing/baileys";
import {ListMessage} from "../../lib/builder/ListMessage";
import { Jikan4 } from '../../../node-myanimelist';


export default class SearchAnime extends Command {
    constructor() {
        super({
            id: "searchanime",
            description: "Busca anime",
            usage: "searchanime <nombre del anime>",
            aliases: ["searchanime", "sa"],
            category: Category.ANIMANGA,
            tags: []
        });
    }

    async init() {
        this.dispatcher.register(literal(this.id)
            .then(literal("rowid")
                .then(argument("animeid", new StringArgumentType("single_word"))
                    .executes(async context => {
                            const message = context.getSource()
                            let animes = new Jikan4.Anime(context.get("animeid"))
                            const data = ((await animes.info()).data);
                            const mainCharacters = (await animes.characters()).data.filter(char => {
                                return char.role === "Main";
                            }).map(char => {
                                return char.character.name.split(",").reverse().join(" ").trim();
                            }); // Delete commas and reverse the name (english naming format)

                            const msg = `
*Título*: ${data.title}

*Sinopsis*: ${data.synopsis}

*Protagonista(s)*: ${mainCharacters.join(", ")}

*Géneros*: ${data.genres.map(n => n.name).join(", ")}

*Episodios*: ${data.episodes}, ${data.duration}

*Emitido en*: ${data.aired.prop.string}

*Status*: ${typeof data.status !== "undefined" ? data.status : "Desconocido"}

*Studios*: ${data.studios.map(n => n.name).join(", ")}

*Calificación*: ${data.score}/10 (calificado por ${data.scored_by} personas)

*Rank de popularidad*: ${data.popularity}
                                `;

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
                    const anime_name = context.get("name")
                    let animes = await Jikan4.animeSearch({
                        q: anime_name,
                        limit: 10,

                    })
                    if (animes.data.length === 0) {
                        await this.sendMessage(message.key.remoteJid, {text: "No existen animes con ese nombre."}, {quoted: message})
                        return;
                    }
                    const listMessage = new ListMessage()
                        .setTitle("Resultados de: *" + anime_name + "*")
                        .setText("Presiona el nombre del anime para ver mas información")

                    for (const anime of animes.data) {
                        listMessage.addRowToSection("Resultados de: " + anime_name, {
                            title: anime.title,
                            description: "Generos: " + anime.genres.map(n => n.name).join(", "),
                            rowId: this.client.prefix + "searchanime rowid " + anime.mal_id
                        })
                    }

                    await this.sendMessage(message.key.remoteJid, listMessage.build())
                })
            )
        )
    }
}