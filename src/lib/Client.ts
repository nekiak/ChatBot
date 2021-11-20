import makeWASocket, {
    AuthenticationState, BaileysEventMap,
    BufferJSON,
    DisconnectReason,
    initInMemoryKeyStore, WAMessage,
    WASocket
} from "@adiwajshing/baileys-md";
import {pRateLimit} from "p-ratelimit";
import EventEmitter from 'events'
import P from "pino";
import {readFileSync, writeFileSync} from "fs";
import {Boom} from "@hapi/boom";
import {CommandDispatcher} from "brigadier-ts";

export interface ClientOptions {
    ownerNumber: string | string[];
    sessionPath: string;
}


export class Client extends EventEmitter {
    public ownerNumber: string | string[];
    public sessionPath: string;
    public sock: WASocket;
    limit: <T>(fn: () => Promise<T>) => Promise<T>;
    dispatcher: CommandDispatcher<WAMessage>;

    constructor(options: ClientOptions) {
        super();
        this.ownerNumber = options.ownerNumber;
        this.sessionPath = options.sessionPath;
        this.limit = pRateLimit({
            interval: 1500,             // 1000 ms == 1 second
            rate: 1,                   // 30 API calls per interval
            concurrency: 1,            // no more than 10 running at once
        });
        this.dispatcher = new CommandDispatcher<WAMessage>();
        this.init()
        setTimeout(() => {
            this.emit("ready" as unknown as keyof BaileysEventMap, null)
        }, 1500);
    }


    init () {
        // load authentication state from a file
        const loadState = () => {
            let state: AuthenticationState | undefined = undefined
            try {
                const value = JSON.parse(
                    readFileSync(this.sessionPath, { encoding: 'utf-8' }),
                    BufferJSON.reviver
                )
                state = {
                    creds: value.creds,
                    // stores pre-keys, session & other keys in a JSON object
                    // we deserialize it here
                    keys: initInMemoryKeyStore(value.keys)
                }
            } catch{  }
            return state
        }

        const saveState = (state?: any) => {
            state = this.sock?.authState
            writeFileSync(
                this.sessionPath,
                // BufferJSON replacer utility saves buffers nicely
                JSON.stringify(state, BufferJSON.replacer, 2)
            )
        }

        const startSock = () => {
            const sock = makeWASocket({
                logger: P({ level: 'info' }),
                printQRInTerminal: true,
                auth: loadState()
            })
            sock.ev.on('messages.update', m => {
                let msg = m[0];
                if (msg.key.remoteJid !== 'status@broadcast') {
                    saveState()
                }
            })

            sock.ev.on('auth-state.update', () => saveState())
            return sock
        }

        this.sock = startSock()

        this.sock.ev.on('connection.update', (update) => {
            const { connection, lastDisconnect } = update
            if (connection === 'close') {
                // reconnect if not logged out
                if((lastDisconnect.error as Boom)?.output?.statusCode !== DisconnectReason.loggedOut) {
                    this.sock = startSock()
                    this.sock.ev.emit("ready" as unknown as keyof BaileysEventMap, null)
                } else {
                    console.log('connection closed')
                }
            }
        })
    }

    isOwner(jid: string) {
        if (typeof this.ownerNumber === 'string') {
            return jid === this.ownerNumber
        } else {
            return this.ownerNumber.includes(jid)
        }
    }


}




