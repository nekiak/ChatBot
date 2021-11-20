import {Handler, HandlerOptions} from "../../Handler";
import {WAMessage, WASocket} from "@adiwajshing/baileys-md";
import { Client } from "../../index"
import {Command} from "../../struct/Command";
import {Tag} from "./Tag";
import createMessage = Tag.createMessage;
import {sleep} from "../../../utils/Utils";


interface ICommandHandler extends HandlerOptions {
    prefix: string;
}


export class CommandHandler extends Handler {
    public readonly prefix: string;
    cooldownUsers: string[][]
    cooldownBlockedUsers: string[]

    constructor(client: Client, options: ICommandHandler) {
        super(client, options);
        this.prefix = options.prefix;
        this.client = client;
        this.cooldownUsers = [];
        this.cooldownBlockedUsers = [];
        this.init()

        sleep(2000).then(() => {
            for (const module of this.modules.values()) {
                if (module instanceof Command) {
                    module.init();
                }
            }
        })
    }

    init() {
        this.client.sock.ev.on("messages.upsert", msg => {
            const message = msg.messages[0];
            let args: string[] | string = (
                (message.message?.imageMessage?.caption ?? message.message?.conversation) ||
                (message.message?.extendedTextMessage?.text ?? message.message?.videoMessage?.caption)
            )!;
            if (!args) return;
            if (args[0] !== this.prefix) return;
            args = args.slice(this.prefix.length).trim().split(/ +/g);
            const cmd = args.shift()?.toLowerCase();
            return this.handle(message, cmd, args);
        })
    }

    get(commandName: string): Command {
        return this.find((module: Command) => module.options.aliases.includes(commandName)) as Command;
    }

    private async handle(message: WAMessage, commandName, args): Promise<void> {
        const command = this.get(commandName);
        if (!command) return;
        if (!await this.cooldown(message, command)) { return; }
        const check = await Tag.check(this.client, message, command.options.tags);
        if (check.length > 0) {
            await this.client.sock.sendMessage(message.key.remoteJid, {text: (await createMessage(check))})
            return;
        }

        try {
            this.client.dispatcher.execute(command.id, message);
        } catch (err: any) {
            console.log(err)
        }
    }

    private cooldown(message: WAMessage, command: Command) {
        if (this.client.isOwner(message.participant || message.key.remoteJid!)) return true;
        if (this.cooldownBlockedUsers.includes(message.key.remoteJid!)) { return false; }
        const pushCooldown = [command.id, message.key.remoteJid!];
        if (this.cooldownUsers.join(".").indexOf(pushCooldown.join()) > -1) {
            return false;
        } else {
            if (command.options.cooldown < 6) { this.cooldownBlockedUsers.push(message.key.remoteJid!); }
            else { this.cooldownUsers.push(pushCooldown); }
            this.delay(command.options.cooldown * 1000).then( () => {
                this.cooldownUsers.splice(this.cooldownUsers.indexOf(pushCooldown, 1));
                this.cooldownBlockedUsers.splice(this.cooldownBlockedUsers.indexOf(message.key.remoteJid!));
            });
            return true;
        }
    }

    getFeedback = async (command: string, cmd: Command): Promise<string> => {
        const parseResults = this.client.dispatcher.parse(command, null);
        if (parseResults.getErrors().size > 0) {
            return parseResults.getErrors().values().next().value.message;
        }
        const suggestions = await this.client.dispatcher.getCompletionSuggestions(parseResults);
        if (suggestions.getList().length > 0) {
            const s = suggestions.getList()[0];
            return s.getText() + " (" + s.getRange().getStart() + ", " + s.getRange().getEnd() + ")";
        }
        const usage = this.client.dispatcher.getAllUsage(parseResults.getContext().getRootNode(), null, false);
        if (usage.length > 0) {
            return this.prefix + cmd.options.usage;
        }
        return null;
    }

    delay (ms: number): Promise<unknown> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
