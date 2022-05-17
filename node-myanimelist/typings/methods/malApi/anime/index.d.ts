import { MalAcount } from "..";
import { MalRequest } from "../request";
import { AnimeFields, AnimeDetailsFields } from "./fields";
import { AnimeItem, UpdateAnimeParams, AnimeListStatusBase } from "./types";
import { WorkBase, Paging, RankingItem } from "../common";
export * from "./fields";
export * from "./types";
export declare class MalAnime {
    private acount;
    constructor(acount: MalAcount);
    search<T>(q: string, fields?: AnimeFields<T> | null, limit?: number | null, offset?: number | null): MalRequest<Paging<AnimeItem<WorkBase & T>>>;
    details<T>(id: number, fields?: AnimeDetailsFields<WorkBase & T>): MalRequest<any>;
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
    ranking<T>(rankingType: "all" | "airing" | "upcoming" | "tv" | "ova" | "movie" | "special" | "bypopularity" | "favorite", fields?: AnimeFields<T> | null, limit?: number | null, offset?: number | null): MalRequest<Paging<RankingItem & AnimeItem<WorkBase & T>>>;
    seasonal<T>(year: number, season: string, fields?: AnimeFields<T> | null, sort?: "anime_score" | "anime_num_list_users" | null, limit?: number | null, offset?: number | null): MalRequest<Paging<AnimeItem<WorkBase & T>>>;
    suggested<T>(fields?: AnimeFields<T> | null, limit?: number | null, offset?: number | null): MalRequest<Paging<AnimeItem<WorkBase & T>>>;
    updateMyAnime(id: number, params?: UpdateAnimeParams): MalRequest<AnimeListStatusBase>;
    deleteMyAnime(id: number): MalRequest<any[]>;
}
