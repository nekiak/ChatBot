import * as Types from "./types";
/** @category Season*/
export declare function season(year: number, season: "spring" | "summer" | "fall" | "winter", params?: {
    page?: number;
    limit?: number;
}): Promise<{
    data: Types.Anime[];
} & Types.Pagination>;
/** @category Season*/
export declare function seasonNow(params?: {
    page?: number;
    limit?: number;
}): Promise<{
    data: Types.Anime[];
} & Types.Pagination>;
/** @category Season*/
export declare function seasonsList(): Promise<Types.Seasons>;
/** @category Season*/
export declare function seasonUpcoming(params?: {
    page?: number;
    limit?: number;
}): Promise<{
    data: Types.Anime[];
} & Types.Pagination>;
