export * as Types from "./types";
export { anime, animeSearch, Anime } from "./anime";
export { manga, mangaSearch, Manga } from "./manga";
export { character, characterSearch, Character } from "./character";
export { club, clubSearch, Club } from "./club";
export { animeGenres, mangaGenres } from "./genres";
export { person, personSearch, Person } from "./person";
export { producers } from "./producers";
export { randomAnime, randomManga, randomCharacters, randomPerson, randomUser, } from "./random";
export { animeRecommendations, mangaRecommendations } from "./recommendations";
export { animeReviews, mangaReviews } from "./reviews";
export { schedules } from "./schedules";
export { season, seasonNow, seasonsList, seasonUpcoming } from "./season";
export { topAnime, topManga, topPeople, topCharacters, topReviews, } from "./top";
export { watchRecentEpisodes, watchPopularEpisodes, watchRecentPromos, watchPopularPromos, } from "./watch";
/** @ignore */
export declare function queryJoin(params: {
    [key: string]: any;
}): string;
/** @ignore */
export declare function jikanGet<D>(url: string): Promise<D>;
export declare const jikanUrl = "https://api.jikan.moe/v4";
