import makeWASocket, {
    DisconnectReason,
    fetchLatestBaileysVersion,
    makeInMemoryStore,
    useSingleFileAuthState,
    BaileysEventMap,
    WAMessage,
    WASocket,
    AnyWASocket,
    SignalCreds,
    proto,
    Contact,
    GroupMetadata,
    ConnectionState,
    WAMessageCursor,
    PresenceData, WAMessageKey, BaileysEventEmitter
} from '@adiwajshing/baileys';
import P from 'pino'
import {pRateLimit} from "p-ratelimit";
import EventEmitter from 'events'
import {Boom} from "@hapi/boom";
import {CommandDispatcher} from "../../brigadier-ts";
import KeyedDB from "@adiwajshing/keyed-db";
import Chat = proto.Chat;

export interface ClientOptions {
    ownerNumber: string | string[];
    sessionPath: string;
    storePath: string;
}


export class Client extends EventEmitter {
    public ownerNumber: string | string[];
    public prefix: string
    public sessionPath: string;
    public storePath: string;
    public store:  {
        chats: KeyedDB<Chat, string>; contacts: { [p: string]: Contact }; messages: { [p: string]: { array: proto.IWebMessageInfo[]; get: (id: string) => proto.IWebMessageInfo; upsert: (item: proto.IWebMessageInfo, mode: ("append" | "prepend")) => void; update: (item: proto.IWebMessageInfo) => boolean; remove: (item: proto.IWebMessageInfo) => boolean; updateAssign: (id: string, update: Partial<proto.IWebMessageInfo>) => boolean; clear: () => void; filter: (contain: (item: proto.IWebMessageInfo) => boolean) => void; toJSON: () => proto.IWebMessageInfo[]; fromJSON: (newItems: proto.IWebMessageInfo[]) => void } }; groupMetadata: { [p: string]: GroupMetadata }; state: ConnectionState; presences: { [p: string]: { [p: string]: PresenceData } }; bind: (ev: BaileysEventEmitter) => void; loadMessages: (jid: string, count: number, cursor: WAMessageCursor, sock: (undefined)) => Promise<proto.IWebMessageInfo[]>; loadMessage: (jid: string, id: string, sock: (any)) => Promise<proto.IWebMessageInfo>; mostRecentMessage: (jid: string, sock: (undefined)) => Promise<proto.IWebMessageInfo>; fetchImageUrl: (jid: string, sock: (AnyWASocket | undefined)) => Promise<string>; fetchGroupMetadata: (jid: string, sock: (AnyWASocket | undefined)) => Promise<GroupMetadata>; fetchBroadcastListInfo: (jid: string, sock: (undefined)) => Promise<GroupMetadata>; fetchMessageReceipts: ({
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         remoteJid,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         id
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     }: WAMessageKey, sock: (undefined)) => Promise<proto.IUserReceipt[]>; toJSON: () => { chats: KeyedDB<Chat, string>; contacts: { [p: string]: Contact }; messages: { [p: string]: { array: proto.IWebMessageInfo[]; get: (id: string) => proto.IWebMessageInfo; upsert: (item: proto.IWebMessageInfo, mode: ("append" | "prepend")) => void; update: (item: proto.IWebMessageInfo) => boolean; remove: (item: proto.IWebMessageInfo) => boolean; updateAssign: (id: string, update: Partial<proto.IWebMessageInfo>) => boolean; clear: () => void; filter: (contain: (item: proto.IWebMessageInfo) => boolean) => void; toJSON: () => proto.IWebMessageInfo[]; fromJSON: (newItems: proto.IWebMessageInfo[]) => void } } }; fromJSON: (json: { chats: Chat[]; contacts: { [p: string]: Contact }; messages: { [p: string]: proto.IWebMessageInfo[] } }) => void; writeToFile: (path: string) => void; readFromFile: (path: string) => void
    };
    public sock: WASocket;
    limit: <T>(fn: () => Promise<T>) => Promise<T>;
    dispatcher: CommandDispatcher<WAMessage>;

    constructor(options: ClientOptions) {
        super();
        this.ownerNumber = options.ownerNumber;
        this.storePath = options.storePath;
        this.sessionPath = options.sessionPath;
        this.limit = pRateLimit({
            interval: 2000,             // 1000 ms == 1 second
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
        this.store = makeInMemoryStore({ logger: P().child({ level: 'debug', stream: 'store' }) }) as any
        this.store.readFromFile(this.storePath)
// save every 10s
        setInterval(() => {
            this.store.writeToFile(this.storePath)
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
                getMessage: async key => {
                    return {

                    }
                }
                // cuando se reconecta
            })

            this.store.bind(sock.ev)

            // para cuando las credenciales de autenticacion cambian
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




