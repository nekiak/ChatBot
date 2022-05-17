import * as Types from "./types";
/** @category Club*/
export declare class Club {
    /** @ignore */
    private baseUrl;
    constructor(id: number);
    info(): Promise<Types.Club>;
    members(params?: {
        page?: number;
    }): Promise<Types.ClubMember>;
    staff(): Promise<Types.ClubStaff>;
    relations(): Promise<Types.ClubRelations>;
}
/** @category Club*/
export declare function club(id: number): Club;
/** @category Club*/
export declare function clubSearch(params?: {
    page?: number;
    limit?: number;
    q?: string;
    type?: "public" | "private" | "secret";
    category?: "anime" | "manga" | "actors_and_artists" | "characters" | "cities_and_neighborhoods" | "companies" | "conventions" | "games" | "japan" | "music" | "other" | "schools";
    order_by?: "mal_id" | "title" | "members_count" | "pictures_count" | "created";
    sort?: "desc" | "asc";
    letter?: string;
}): Promise<Types.ClubsSearch>;
