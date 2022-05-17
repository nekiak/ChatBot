import {GroupParticipant, proto, WAMessage, WASocket} from "@adiwajshing/baileys";
import {CollectorFilter, CollectorOptions} from "../lib/struct/Collector";
import {MessageCollector} from "../lib/handler/MessageCollector";
import WebMessageInfo = proto.WebMessageInfo;

export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function isWhatsappGroup(str: string): boolean {
  return str.endsWith('@g.us');
}

export async function getGroupAdmins(sock: WASocket, jid: string): Promise<GroupParticipant[]> {
  return (await sock.groupMetadata(jid)).participants.filter(p => p.admin !== null)
}

export function cleanJid(jid: string): string {
  return jid.replace(/:([\d]*)/, "")
}

export function createMessageCollector(c : WAMessage, filter : CollectorFilter<[WAMessage]>, options : CollectorOptions, sock: WASocket) : MessageCollector {
    return new MessageCollector(c, filter, options, sock);
}

export function getQuotedMessage(message: WAMessage) {
    const quoted = message.message?.extendedTextMessage?.contextInfo;
    if (quoted) {
        quoted["key"] = {
            remoteJid: message.key.remoteJid.endsWith("g.us") ? message.key.remoteJid : quoted.participant,
            id: quoted.stanzaId,
            participant: quoted.participant,
            fromMe: null
        }
        quoted["message"] = quoted.quotedMessage;
        return new WebMessageInfo(quoted as WAMessage)
    }
}

export function splitString (n: number, str: string): string[] {
    const arr = str?.split(" ");
    const result = [];
    let subStr = arr[0];
    for (let i = 1; i < arr.length; i++){
        const word = arr[i];
        if (subStr.length + word.length + 1 <= n){
            subStr = subStr + " " + word;
        }
        else {
            result.push(subStr);
            subStr = word;
        }
    }
    if (subStr.length){result.push(subStr);}
    return result;
}


export function getMimetype(message: WAMessage): string {
  const quotedMessage = message.message?.extendedTextMessage?.contextInfo?.quotedMessage;
  return <string>(quotedMessage?.imageMessage?.mimetype
      ?? message.message?.imageMessage?.mimetype
  ) ?? (quotedMessage?.videoMessage?.mimetype
      ?? message.message?.videoMessage?.mimetype
  ) ?? (quotedMessage?.audioMessage?.mimetype
      ?? message.message?.audioMessage?.mimetype
  ) ?? (quotedMessage?.documentMessage?.mimetype
      ?? message.message?.documentMessage?.mimetype
  ) ?? (quotedMessage?.stickerMessage?.mimetype
      ?? message.message?.stickerMessage?.mimetype
  );
}

