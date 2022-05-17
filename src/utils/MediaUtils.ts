const sharp = require('sharp');
import {tmpdir} from "os";
import {promises as fs} from "fs";
import {promisify} from "util";
import {exec} from "child_process";
const webp = require("node-webpmux");
const execute = promisify(exec);

interface MetadataOptions {
    name: string,
    author: string
}

function generateHash(length: number): string {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export async function formatMp3ToOgg(buffer: Buffer) {
    const tempFile = `${tmpdir()}/${Math.random().toString(36)}.mp3`;
    await fs.writeFile(tempFile, buffer);
    await execute(`ffmpeg -i ${tempFile} -map 0:a:0 -b:a 64k ${tempFile}.ogg`);
    const data = await fs.readFile(tempFile + ".ogg");
    await fs.unlink(tempFile);
    await fs.unlink(tempFile + ".ogg");
    return data;
}
export async function animStickerToVideo(buf: Buffer): Promise<Buffer> {
    const tempDir = `${tmpdir()}/${Math.floor(Math.random() * 1000)}`;
    await fs.mkdir(tempDir);
    const tempFile = `${tempDir}/${Math.random().toString(36)}.webp`;
    await fs.writeFile(tempFile, buf).then(async() => {
        const img = new webp.Image();
        await img.load(tempFile);
        const framecount = img.frames.length;
        let duration = 0;
        for (const frame of img.frames) {
            duration += frame.delay;
        }
        await execute(`cd ${tempDir} && anim_dump ${tempFile}`);
        await execute(`ffmpeg -framerate ${framecount / (duration / 1000)} -i ${tempDir}/dump_%04d.png -c:v libx264 -profile:v baseline -level 3.0 -pix_fmt yuv420p ${tempFile}.mp4`);
        buf = await fs.readFile(tempFile + ".mp4");
    });
    await execute(`rm -rf ${tempDir}`);
    return buf;
}

export async function formatImageToSticker(buf: Buffer): Promise<Buffer> {
    let sharpImg = sharp(buf);
    sharpImg = sharpImg.webp();
    sharpImg = sharpImg.resize(512, 512, {
        fit: "contain",
        background: {r: 0, g: 0, b: 0, alpha: 0},
    });

    return await sharpImg.toBuffer();
}

async function formatVideoToSticker(buffer: Buffer): Promise<Buffer> {
    const tempFile = `${tmpdir()}/${Math.random().toString(36)}.mp4`;
    await fs.writeFile(tempFile, buffer);
    await execute(`ffmpeg -i ${tempFile} -vcodec libwebp -vf "scale=\\\\'iw*min(300/iw\\\\,300/ih)\\\\':\\\\'ih*min(300/iw\\\\,300/ih)\\\\',format=rgba,pad=300:300:\\\\'(300-iw)/2\\\\':\\\\'(300-ih)/2\\\\':\\\\'#00000000\\\\',setsar=1,fps=10" -loop 0 -preset default -fs 900k -an -vsync 0 -s 512:512 ${tempFile}.webp`);
    const data = await fs.readFile(tempFile + ".webp");
    await fs.unlink(tempFile);
    return data;
}



export async function formatToSticker(buf: Buffer, mimetype: string, metadata: MetadataOptions): Promise<Buffer> {
    let webpMedia: Buffer;
    if (mimetype.startsWith("image")) {
        webpMedia = await formatImageToSticker(buf);
    } else if (mimetype.startsWith("video")) {
        webpMedia = await formatVideoToSticker(buf);
    }

    if (metadata.name || metadata.author) {
        const img = new webp.Image();
        const stickerPackId = generateHash(32);
        const packname = metadata.name;
        const author = metadata.author;
        const json = { "sticker-pack-id": stickerPackId, "sticker-pack-name": packname, "sticker-pack-publisher": author, "emojis": "" };
        const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00]);
        const jsonBuffer = Buffer.from(JSON.stringify(json), "utf8");
        const exif = Buffer.concat([exifAttr, jsonBuffer]);
        exif.writeUIntLE(jsonBuffer.length, 14, 4);
        await img.load(Buffer.from(webpMedia!));
        img.exif = exif;
        webpMedia = (await img.save(null));
    }
    return webpMedia!;
}
