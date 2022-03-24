import {GroupParticipant, WAMessage, WASocket} from "@adiwajshing/baileys";
import {CollectorFilter, CollectorOptions} from "../lib/struct/Collector";
import {MessageCollector} from "../lib/handler/MessageCollector";

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

