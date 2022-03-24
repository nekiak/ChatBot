import makeWASocket, {
    AnyMessageContent,
    delay,
    DisconnectReason,
    fetchLatestBaileysVersion,
    makeInMemoryStore,
    useSingleFileAuthState,
    BaileysEventMap,
    WAMessage, WASocket, AnyWASocket, SignalCreds
} from '@adiwajshing/baileys';
import P from 'pino'
import {pRateLimit} from "p-ratelimit";
import EventEmitter from 'events'
import {readFileSync, writeFileSync} from "fs";
import {Boom} from "@hapi/boom";
import {CommandDispatcher} from "../../brigadier-ts";

export interface ClientOptions {
    ownerNumber: string | string[];
    sessionPath: string;
    storePath: string;
}


export class Client extends EventEmitter {
    public ownerNumber: string | string[];
    public sessionPath: string;
    public storePath: string;
    public sock: WASocket;
    limit: <T>(fn: () => Promise<T>) => Promise<T>;
    dispatcher: CommandDispatcher<WAMessage>;

    constructor(options: ClientOptions) {
        super();
        this.ownerNumber = options.ownerNumber;
        this.storePath = options.storePath;
        this.sessionPath = options.sessionPath;
        this.limit = pRateLimit({
            interval: 1500,             // 1000 ms == 1 second
            rate: 1,                   // 30 API calls per interval
            concurrency: 1,            // no more than 10 running at once
        });
        this.dispatcher = new CommandDispatcher<WAMessage>();
        this.init()
        setTimeout(() => {
            this.emit("ready" as unknown as keyof BaileysEventMap<SignalCreds>, null)
        }, 1500);
    }


    async init () {
        const store = makeInMemoryStore({ logger: P().child({ level: 'debug', stream: 'store' }) })
        store.readFromFile(this.storePath)
// save every 10s
        setInterval(() => {
            store.writeToFile(this.storePath)
        }, 10_000)

        const { state, saveState } = useSingleFileAuthState(this.sessionPath)

// start a connection
        const startSock = async() => {
            // fetch latest version of WA Web
            const { version, isLatest } = await fetchLatestBaileysVersion()
            console.log(`using WA v${version.join('.')}, isLatest: ${isLatest}`)

            const sock = makeWASocket({
                version,
                logger: P({ level: 'silent' }),
                printQRInTerminal: true,
                auth: state,
                // implement to handle retries
                getMessage: async key => {
                    return {
                        conversation: 'hello'
                    }
                }
            })

            store.bind(sock.ev)

            // listen for when the auth credentials is updated
            sock.ev.on('creds.update', saveState)

            return sock
        }

        this.sock = await startSock()

        this.sock.ev.on("connection.update", async (update) => {
            const { connection, lastDisconnect } = update
            if(connection === 'close') {
                // reconnect if not logged out
                if((lastDisconnect.error as Boom)?.output?.statusCode !== DisconnectReason.loggedOut) {
                    this.sock = await startSock()
                    this.sock.ev.emit("ready" as unknown as keyof BaileysEventMap<SignalCreds>, null)
                } else {
                    console.log('Connection closed. You are logged out.')
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




