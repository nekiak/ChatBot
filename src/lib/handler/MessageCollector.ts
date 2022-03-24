import { Collector, CollectorOptions } from "../struct/Collector";
import {WASocket, WAMessage, BaileysEventMap, SignalCreds} from "@adiwajshing/baileys";

/**
 * @typedef {CollectorOptions} MessageCollectorOptions
 * @property {number} max The maximum amount of messages to collect
 * @property {number} maxProcessed The maximum amount of messages to process
 */

/**
 * Collects messages on a chat.
 * @extends {Collector}
 */
export class MessageCollector extends Collector {
    chatId: WAMessage;
    received: number;
    sock: WASocket

    /**
     * @param {WAMessage} chatId The chat id
     * @param {CollectorFilter} filter The filter to be applied to this collector
     * @param {MessageCollectorOptions} options The options to be applied to this collector
     * @param {WAConnection} client The EventEmitter that fires all open-wa events. In local instances of the library, this is the global `ev` object.
     * @emits MessageCollector#Message
     */
    constructor(chatId: WAMessage, filter: (...args: any[]) => boolean | Promise<boolean>, options : CollectorOptions = {}, sock : WASocket) {
        super(filter, options);

        this.sock = sock;


        /**
         * The chat
         * @type {string}
         */
        this.chatId = chatId;

        /**
         * Total number of messages that were received in the chat during message collection
         * @type {number}
         */
        this.received = 0;


        const collectHandler = this.handleCollect;

        this.incrementMaxListeners();
        this.sock.ev.on("message" as unknown as keyof BaileysEventMap<SignalCreds>, collectHandler);

        this.once("end", () => {
            this.sock.ev.removeListener("message", collectHandler);
            this.decrementMaxListeners();
        });
    }

    /**
     * Handles a message for possible collection.
     * @param {WAMessage} message The message that could be collected
     * @returns {?string}
     * @private
     */
    collect(message: WAMessage) : string {
        /**
         * Emitted whenever a message is collected.
         * @event MessageCollector#collect
         * @param {Message} message The message that was collected
         */

        if (message.key.remoteJid !== this.chatId.key.remoteJid) return null;
        this.received++;
        return message.key.id;
    }

    /**
     * Handles a message for possible disposal.
     * @param {WAMessage} message The message that could be disposed of
     * @returns {?string}
     */
    dispose(message : WAMessage) : string | null {
        /**
         * Emitted whenever a message is disposed of.
         * @event MessageCollector#dispose
         * @param {WAMessage} message The message that was disposed of
         */
        return message.key.remoteJid === this.chatId.key.remoteJid ? message.key.remoteJid : null;
    }

    /**
     * Checks after un/collection to see if the collector is done.
     * @returns {?string}
     * @private
     */
    endReason() : string | null {
        if (this.options.max && this.collected.size >= this.options.max) return "limit";
        if (this.options.maxProcessed && this.received === this.options.maxProcessed) return "processedLimit";
        return null;
    }

}
