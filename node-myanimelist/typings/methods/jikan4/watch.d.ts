import * as Types from "./types";
/** @category Watch*/
export declare function watchRecentEpisodes(params?: {
    page?: number;
    limit?: number;
}): Promise<Types.WatchEpisodes>;
/** @category Watch*/
export declare function watchPopularEpisodes(params?: {
    page?: number;
    limit?: number;
}): Promise<Types.WatchEpisodes>;
/** @category Watch*/
export declare function watchRecentPromos(params?: {
    page?: number;
    limit?: number;
}): Promise<Types.WatchPromos>;
/** @category Watch*/
export declare function watchPopularPromos(params?: {
    page?: number;
    limit?: number;
}): Promise<Types.WatchPromos>;
