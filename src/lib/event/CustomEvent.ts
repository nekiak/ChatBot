import {BaileysEventMap, SignalCreds, WASocket} from "@adiwajshing/baileys";


export default class CustomEvents {
    private sock: WASocket;

    constructor(sock: WASocket) {
        this.sock = sock;
        this.onChatUpdate();
    }

    private onChatUpdate() {
        this.sock.ev.on("messages.upsert", async msg => {
            if (msg.messages[0]) {
                this.sock.ev.emit("message" as unknown as keyof BaileysEventMap<SignalCreds>, msg)
            }
        })
    }
}
