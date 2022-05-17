import * as Types from "./types";
/** @category Character*/
export declare class Character {
    /** @ignore */
    private baseUrl;
    constructor(id: number);
    info(): Promise<Types.Character>;
    anime(): Promise<Types.CharacterAnime>;
    manga(): Promise<Types.CharacterManga>;
    voiceActors(): Promise<Types.CharacterVoiceActors>;
    pictures(): Promise<Types.CharacterPictures>;
}
/** @category Character*/
export declare function character(id: number): Character;
/** @category Character*/
export declare function characterSearch(params?: {
    page?: number;
    limit?: number;
    q?: string;
    order_by?: "mal_id" | "name" | "favorites";
    sort?: "desc" | "asc";
    letter?: string;
}): Promise<Types.CharactersSearch>;
