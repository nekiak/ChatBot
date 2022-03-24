import {Handler, HandlerOptions} from "../Handler";
import {Client, Module} from "../"
import {Listener} from "../struct/Listener";
import {BaileysEventMap, SignalCreds} from "@adiwajshing/baileys";


export class ListenerHandler extends Handler {
    register(module: Listener, modulePath?: string): Module {
        module.execute = module.execute.bind(module);
        this.client.sock.ev.on(module.event as unknown as keyof BaileysEventMap<SignalCreds>, module.execute);
        return super.register(module, modulePath)
    }

    unregister (module: Listener): boolean {
        this.client.sock.ev.removeListener(module.event as unknown as keyof BaileysEventMap<SignalCreds>, module.execute);
        return super.unregister(module);
    }

}
