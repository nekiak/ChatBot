import {Client, CommandHandler} from "./lib";
import {join} from "path"
import {ListenerHandler} from "./lib/handler/ListenerHandler";
import config from "./config.json";
import mongo from "mongoose"

export class NekiakBot extends Client {
    commandHandler: CommandHandler;
    listenerHandler: ListenerHandler;
    constructor() {
        super({
            ownerNumber: config.owner_numbers,
            sessionPath: config.session_path
        });

        super.on("ready", async () => {
            this.commandHandler = new CommandHandler(this, {
                defaultDir: join(__dirname, "command"),
                prefix: config.prefix
            })

            this.listenerHandler = new ListenerHandler(this, {
                defaultDir: join(__dirname, "listener")
            });

            this.commandHandler.loadAll();
            this.listenerHandler.loadAll();
            await mongo.connect(config.mongodb_config)
        });
    }
}

new NekiakBot();
