import {Client} from "./Client";
import {Handler} from "./Handler";
import {CommandDispatcher} from "../../brigadier-ts";
import {WAMessage} from "@adiwajshing/baileys";

export interface ModuleOptions {
    id: string
}

export class Module {
    id: string;
    path: string;
    client: Client;
    handler: Handler
    dispatcher: CommandDispatcher<WAMessage>;

    constructor(options: ModuleOptions) {
        this.id = options.id
    }
}
