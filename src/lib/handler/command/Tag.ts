import {Client} from "../../Client";
import {WAMessage} from "@adiwajshing/baileys";
import {cleanJid, getGroupAdmins, getMimetype, isWhatsappGroup} from "../../../utils/Utils";

export enum Tag {
    devOnly = "devOnly",
    groupOnly = "groupOnly",
    dmOnly = "dmOnly",
    adminOnly = "adminOnly",
    clientAdminOnly = "clientAdminOnly",
    needsStaticSticker = "needsStaticSticker",
    needsAnimatedSticker = "needsAnimatedSticker",
    needsImage = "needsImage",
    needsVideo = "needsVideo"
}

export namespace Tag {
    export async function check(client: Client, message: WAMessage, tags: Array<Tag | keyof typeof Tag | string>) {
        let missingTags: Tag[] = [];
        let hasMedia = false;
        for (const tag of tags ?? []) {
            const mimetype = getMimetype(message);
            const botNumber = cleanJid(client.sock.user.id)
            const isGroup = isWhatsappGroup(message.key.remoteJid)
            const admins = isGroup ? (await getGroupAdmins(client.sock, message.key.remoteJid)).map(a => a.id) : [];
            const jid = cleanJid(isGroup ? message.participant : message.key.remoteJid);
            if (tag === Tag.dmOnly && isGroup) missingTags.push(Tag.dmOnly);
            if (tag === Tag.groupOnly && !isGroup) missingTags.push(Tag.groupOnly);
            if (tag === Tag.clientAdminOnly && !admins.includes(botNumber)) missingTags.push(Tag.clientAdminOnly);
            if (tag === Tag.adminOnly && !admins.includes(jid)) missingTags.push(Tag.adminOnly);
            if (tag === Tag.devOnly && !client.isOwner(jid)) missingTags.push(Tag.devOnly);


            if (tag === Tag.needsStaticSticker || tag === Tag.needsAnimatedSticker) {
                if (mimetype === "image/webp") {
                    const isAnim = message.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated;
                    if (tag === Tag.needsAnimatedSticker && isAnim) hasMedia = true;
                    if (tag === Tag.needsStaticSticker && !isAnim) hasMedia = true;
                } else {
                    missingTags.push(tag)
                }
            }

            if (tag === Tag.needsImage) {
                if (mimetype === "image/jpeg" || mimetype === "image/png") hasMedia = true;
                else missingTags.push(Tag.needsImage);
            }

            if (tag === Tag.needsVideo)
                if (mimetype === "video/mp4") hasMedia = true;
                else missingTags.push(Tag.needsVideo);
            }

            if (hasMedia) {
                missingTags = missingTags.filter(p => !p.startsWith("needs"))
            }
        return missingTags;
    }

    export async function createMessage(missingTags: Tag[]): Promise<string> {
        let message = "No he podido ejecutar este comando 😕 debido a las siguientes razones ⬇️\n\n";
        for (const [i, tag] of missingTags.entries()) {
            message += `*${i + 1} - `
            switch (tag) {
                case Tag.devOnly:
                    message += `Solo el desarrollador del bot es capaz de usar este comando!"`
                    break;
                case Tag.groupOnly:
                    message += "Solo está disponible en grupos!"
                    break;
                case Tag.dmOnly:
                    message += "Solo está disponible en mensajes privados!";
                    break;
                case Tag.adminOnly:
                    message += "Solo está disponible para los administradores del grupo!";
                    break;
                case Tag.needsImage:
                    message += "Necesita que se adjunte/responda una imagen!";
                    break;
                case Tag.needsVideo:
                    message += "Necesita que se adjunte/responda un video!";
                    break;
                case Tag.needsAnimatedSticker:
                    message += "Necesita que se responda a un sticker animado!";
                    break;
                case Tag.needsStaticSticker:
                    message += "Necesita que se responda a un sticker no-animado!";
                    break;
            }
            message += "*\n"
        }
        return message;
    }
}

