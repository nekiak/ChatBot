import {Module, ModuleOptions} from "../Module";
import {BaileysEventMap} from "@adiwajshing/baileys-md";
import {NotImplementedError} from "../error/NotImplementedError";

interface IListenerOptions extends ModuleOptions {
    event: keyof BaileysEventMap;
}

export class Listener extends Module {
    event: keyof BaileysEventMap;

    constructor(options: IListenerOptions) {
        super(options);
        this.event = options.event;
    }

    async execute(...args: any[]): Promise<void | Promise<void>> {throw new NotImplementedError("Method not implemented.");}
}

