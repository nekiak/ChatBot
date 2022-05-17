import * as Types from "./types";
/** @category Top*/
export declare function topAnime(params?: {
    page?: number;
    limit?: number;
}): Promise<{
    data: Types.Anime[];
} & Types.Pagination>;
/** @category Top*/
export declare function topManga(params?: {
    page?: number;
    limit?: number;
}): Promise<{
    data: Types.Manga[];
} & Types.Pagination>;
/** @category Top*/
export declare function topPeople(params?: {
    page?: number;
    limit?: number;
}): Promise<{
    data: Types.Person[];
} & Types.Pagination>;
/** @category Top*/
export declare function topCharacters(params?: {
    page?: number;
    limit?: number;
}): Promise<{
    data: Types.Character[];
} & Types.Pagination>;
/** @category Top*/
export declare function topReviews(params?: {
    page?: number;
    limit?: number;
}): Promise<Types.ReviewsCollection & Types.Pagination>;
