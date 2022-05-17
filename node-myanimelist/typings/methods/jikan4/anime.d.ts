import * as Types from "./types";
/** @category Anime*/
export declare class Anime {
    /** @ignore */
    private baseUrl;
    constructor(id: number);
    info(): Promise<{
        data: Types.Anime;
    }>;
    characters(): Promise<Types.AnimeCharacters>;
    staff(): Promise<Types.AnimeStaff>;
    episodes(params?: {
        page?: number;
    }): Promise<Types.AnimeEpisodes>;
    episode(id: number): Promise<Types.AnimeEpisode>;
    news(params?: {
        page?: number;
    }): Promise<Types.AnimeNews>;
    forum(params?: {
        topic?: "all" | "episode" | "other";
    }): Promise<Types.Forum>;
    videos(): Promise<Types.AnimeVideos>;
    pictures(): Promise<Types.Pictures>;
    statistics(): Promise<Types.AnimeStatistics>;
    moreInfo(): Promise<Types.Moreinfo>;
    recommendations(): Promise<Types.EntryRecommendations>;
    userUpdates(params?: {
        page?: number;
    }): Promise<Types.AnimeUserupdates>;
    reviews(params?: {
        page?: number;
    }): Promise<Types.AnimeReviews>;
    relations(): Promise<Types.AnimeRelations>;
    themes(): Promise<Types.AnimeThemes>;
    external(): Promise<Types.ExternalLinks>;
}
/** @category Anime*/
export declare function anime(id: number): Anime;
/** @category Anime*/
export declare function animeSearch(params?: {
    page?: number;
    limit?: number;
    q?: string;
    type?: "tv" | "movie" | "ova" | "special" | "ona" | "music";
    score?: number;
    min_score?: number;
    max_score?: number;
    status?: "airing" | "complete" | "upcoming";
    ranking?: "g" | "pg" | "pg13" | "r17" | "r" | "rx";
    sfw?: boolean;
    genres?: string;
    genres_exclude?: string;
    order_by?: "mal_id" | "title" | "type" | "rating" | "start_date" | "end_date" | "episodes" | "score" | "scored_by" | "rank" | "popularity" | "members" | "favorites";
    sort?: "desc" | "asc";
    letter?: string;
    producer?: string;
}): Promise<Types.AnimeSearch>;
