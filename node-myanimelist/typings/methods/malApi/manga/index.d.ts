import { MalAcount } from "..";
import { MalRequest } from "../request";
import { MangaFields, MangaDetailsFields } from "./fields";
import { MangaItem, UpdateMangaParams, MangaListStatusBase } from "./types";
import { WorkBase, Paging, RankingItem } from "../common";
export * from "./fields";
export * from "./types";
export declare class MalManga {
    private acount;
    constructor(acount: MalAcount);
    search<T>(q: string, fields?: MangaFields<T> | null, limit?: number | null, offset?: number | null): MalRequest<Paging<MangaItem<WorkBase & T>>>;
    details<T>(id: number, fields?: MangaDetailsFields<WorkBase & T>): MalRequest<any>;
    /**
     * | value | |
     * | ---- | ---- |
     * | all | Top Anime Series |
     * | airing | Top Airing Anime |
     * | upcoming | Top Upcoming Anime |
     * | tv | Top Anime TV Series |
     * | ova | Top Anime OVA Series |
     * | movie | Top Anime Movies |
     * | special | Top Anime Specials |
     * | bypopularity | Top Anime by Popularity |
     * | favorite | Top Favorited Anime |
     */
    ranking<T>(rankingType: "all" | "airing" | "upcoming" | "tv" | "ova" | "movie" | "special" | "bypopularity" | "favorite", fields?: MangaFields<T> | null, limit?: number | null, offset?: number | null): MalRequest<Paging<RankingItem & MangaItem<WorkBase & T>>>;
    updateMyManga(id: number, params?: UpdateMangaParams): MalRequest<MangaListStatusBase>;
    deleteMyManga(id: number): MalRequest<any[]>;
}
