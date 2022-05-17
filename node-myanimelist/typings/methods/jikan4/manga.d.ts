import * as Types from "./types";
/** @category Manga*/
export declare class Manga {
    /** @ignore */
    private baseUrl;
    constructor(id: number);
    info(): Promise<{
        data: Types.Manga;
    }>;
    characters(): Promise<Types.MangaCharacters>;
    news(params?: {
        page?: number;
    }): Promise<Types.MangaNews>;
    forum(params?: {
        topic?: "all" | "episode" | "other";
    }): Promise<Types.Forum>;
    pictures(): Promise<Types.Pictures>;
    statistics(): Promise<Types.MangaStatistics>;
    moreInfo(): Promise<Types.Moreinfo>;
    recommendations(): Promise<Types.EntryRecommendations>;
    userUpdates(params?: {
        page?: number;
    }): Promise<Types.MangaUserupdates>;
    reviews(params?: {
        page?: number;
    }): Promise<Types.MangaReview>;
    relations(): Promise<Types.ManagaRelations>;
    external(): Promise<Types.ExternalLinks>;
}
/** @category Manga*/
export declare function manga(id: number): Manga;
/** @category Manga*/
export declare function mangaSearch(params?: {
    page?: number;
    limit?: number;
    q?: string;
    type?: "manga" | "novel" | "lightnovel" | "oneshot" | "doujin" | "manhwa" | "manhua";
    score?: number;
    min_score?: number;
    max_score?: number;
    status?: "publishing" | "complete" | "hiatus" | "discontinued" | "upcoming";
    sfw?: boolean;
    genres?: string;
    genres_exclude?: string;
    order_by?: "mal_id" | "title" | "start_date" | "end_date" | "chapters" | "volumes" | "score" | "scored_by" | "rank" | "popularity" | "members" | "favorites";
    sort?: "desc" | "asc";
    letter?: string;
    magazine?: string;
}): Promise<Types.MangaSearch>;
