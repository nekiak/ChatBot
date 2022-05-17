import {Acr, IAcr} from "../models/AcrModel";

export async function getAcr(name: string, key: string): Promise<IAcr> {
    return Acr.findOne({name: name, key: key})
}

export async function getAllAcr(key: string) {
    return Acr.find({key: {$eq: key}}).lean();
}

export async function getAnyAcr() {
    return Acr.find({}).lean();
}

export async function createAcr(data: IAcr): Promise<IAcr> {
    await Acr.deleteMany({ name: { $eq: data.name }, key: { $eq: data.key } })
    return Acr.create(data)
}

export async function deleteAcr(name: string, key: string) {
    const deleted = await Acr.deleteMany({ name: { $eq: name }, key: { $eq: key } })
    return deleted.deletedCount !== 0;
}