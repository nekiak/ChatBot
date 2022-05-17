import * as Types from "./types";
/** @category Person*/
export declare class Person {
    /** @ignore */
    private baseUrl;
    constructor(id: number);
    info(): Promise<{
        data: Types.Person;
    }>;
    anime(): Promise<Types.PersonAnime>;
    voices(): Promise<Types.PersonVoiceActingRoles>;
    manga(): Promise<Types.PersonManga>;
    pictures(): Promise<Types.PersonPictures>;
}
/** @category Person*/
export declare function person(id: number): Person;
/** @category Person*/
export declare function personSearch(params?: {
    page?: number;
    limit?: number;
    q?: string;
    order_by?: "mal_id" | "name" | "birthday" | "favorites";
    sort?: "desc" | "asc";
    letter?: string;
}): Promise<Types.PeopleSearch>;
