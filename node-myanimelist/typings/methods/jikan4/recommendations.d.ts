import * as Types from "./types";
/** @category Recommendations*/
export declare function animeRecommendations(params?: {
    page?: number;
}): Promise<{
    data: Types.Anime;
}>;
/** @category Recommendations*/
export declare function mangaRecommendations(params?: {
    page?: number;
}): Promise<{
    data: Types.Manga;
}>;
