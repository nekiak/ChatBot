import { WorkForList } from "../common";
import { MangaForList, MangaForDetails, MangaListStatus, MangaListStatusBase } from "./types";
import * as Anime from "../anime";
export interface MangaSearchItem<T> {
    node: T;
}
/**
 * Manga For List
 *
 * ```ts
 * Mal.Manga.fields()
 *    .alternativeTitles()
 *    .startDate()
 *    .endDate()
 *    .synopsis()
 *    .mean()
 *    .rank()
 *    .popularity()
 *    .numListUsers()
 *    .numScoringUsers()
 *    .nsfw()
 *    .genres()
 *    .createdAt()
 *    .updatedAt()
 *    .mediaType()
 *    .status()
 *    .myListStatus(
 *       Mal.Manga.listStatusFields()
 *          .startDate()
 *          .finishDate()
 *          .priority()
 *          .numTimesReread()
 *          .rereadValue()
 *          .tags()
 *          .comments()
 *    )
 *    .numVolumes()
 *    .numChapters()
 *    .authors();
 * ```
 */
export declare class MangaFields<T> {
    fields: {
        [key: string]: boolean | string;
    };
    type: T;
    /** Aka `I don't care mode` */
    all(): MangaFields<T & WorkForList.AlternativeTitles & WorkForList.StartDate & WorkForList.EndDate & WorkForList.Synopsis & WorkForList.Mean & WorkForList.Rank & WorkForList.Popularity & WorkForList.NumListUsers & WorkForList.NumScoringUsers & WorkForList.Nsfw & WorkForList.Genres & WorkForList.CreatedAt & WorkForList.UpdatedAt & MangaForList.MediaType & MangaForList.Status & {
        my_list_status: MangaListStatusBase & MangaListStatus.StartDate & MangaListStatus.FinishDate & MangaListStatus.Priority & MangaListStatus.NumTimesReread & MangaListStatus.RereadValue & MangaListStatus.Tags & MangaListStatus.Comments;
    } & MangaForList.NumVolumes & MangaForList.NumChapters & MangaForList.Authors>;
    alternativeTitles(): MangaFields<T & WorkForList.AlternativeTitles>;
    startDate(): MangaFields<T & WorkForList.StartDate>;
    endDate(): MangaFields<T & WorkForList.EndDate>;
    synopsis(): MangaFields<T & WorkForList.Synopsis>;
    mean(): MangaFields<T & WorkForList.Mean>;
    rank(): MangaFields<T & WorkForList.Rank>;
    popularity(): MangaFields<T & WorkForList.Popularity>;
    numListUsers(): MangaFields<T & WorkForList.NumListUsers>;
    numScoringUsers(): MangaFields<T & WorkForList.NumScoringUsers>;
    nsfw(): MangaFields<T & WorkForList.Nsfw>;
    genres(): MangaFields<T & WorkForList.Genres>;
    createdAt(): MangaFields<T & WorkForList.CreatedAt>;
    updatedAt(): MangaFields<T & WorkForList.UpdatedAt>;
    mediaType(): MangaFields<T & MangaForList.MediaType>;
    status(): MangaFields<T & MangaForList.Status>;
    myListStatus<U>(fields?: MangaListStatusFields<U>): MangaFields<T & {
        my_list_status: MangaListStatusBase & U;
    }>;
    numVolumes(): MangaFields<T & MangaForList.NumVolumes>;
    numChapters(): MangaFields<T & MangaForList.NumChapters>;
    /**
     * authors{first_name,last_name}
     *
     * @param overrideFields - `It's recomended to left this one empty`
     * All fields are included by default since there are only 2 {first_name,last_name}
     * Keep in mind that override is not type safe
     */
    authors(overrideFields?: string[]): MangaFields<T & MangaForList.Authors>;
}
/**
 * Manga For List
 */
export declare function fields(): MangaFields<unknown>;
/**
 * Manga For Details
 */
export declare class MangaDetailsFields<T> {
    fields: {
        [key: string]: boolean | string;
    };
    type: T;
    /** Aka `I don't care mode` */
    all(): MangaDetailsFields<T & WorkForList.AlternativeTitles & WorkForList.StartDate & WorkForList.EndDate & WorkForList.Synopsis & WorkForList.Mean & WorkForList.Rank & WorkForList.Popularity & WorkForList.NumListUsers & WorkForList.NumScoringUsers & WorkForList.Nsfw & WorkForList.Genres & WorkForList.CreatedAt & WorkForList.UpdatedAt & MangaForList.MediaType & MangaForList.Status & {
        my_list_status: MangaListStatusBase & MangaListStatus.StartDate & MangaListStatus.FinishDate & MangaListStatus.Priority & MangaListStatus.NumTimesReread & MangaListStatus.RereadValue & MangaListStatus.Tags & MangaListStatus.Comments;
    } & MangaForList.NumVolumes & MangaForList.NumChapters & MangaForList.Authors & MangaForDetails.Pictures & MangaForDetails.Background & MangaForDetails.RelatedAnime<WorkForList.AlternativeTitles & WorkForList.StartDate & WorkForList.EndDate & WorkForList.Synopsis & WorkForList.Mean & WorkForList.Rank & WorkForList.Popularity & WorkForList.NumListUsers & WorkForList.NumScoringUsers & WorkForList.Nsfw & WorkForList.Genres & WorkForList.CreatedAt & WorkForList.UpdatedAt & Anime.AnimeForList.MediaType & Anime.AnimeForList.Status & {
        my_list_status: Anime.AnimeListStatusBase & Anime.AnimeListStatus.StartDate & Anime.AnimeListStatus.FinishDate & Anime.AnimeListStatus.Priority & Anime.AnimeListStatus.NumTimesRewatched & Anime.AnimeListStatus.RewatchValue & Anime.AnimeListStatus.Tags & Anime.AnimeListStatus.Comments;
    } & Anime.AnimeForList.NumEpisodes & Anime.AnimeForList.StartSeason & Anime.AnimeForList.Broadcast & Anime.AnimeForList.Source & Anime.AnimeForList.AverageEpisodeDuration & Anime.AnimeForList.Rating & Anime.AnimeForList.Studios> & MangaForDetails.RelatedManga<WorkForList.AlternativeTitles & WorkForList.StartDate & WorkForList.EndDate & WorkForList.Synopsis & WorkForList.Mean & WorkForList.Rank & WorkForList.Popularity & WorkForList.NumListUsers & WorkForList.NumScoringUsers & WorkForList.Nsfw & WorkForList.Genres & WorkForList.CreatedAt & WorkForList.UpdatedAt & MangaForList.MediaType & MangaForList.Status & {
        my_list_status: MangaListStatusBase & MangaListStatus.StartDate & MangaListStatus.FinishDate & MangaListStatus.Priority & MangaListStatus.NumTimesReread & MangaListStatus.RereadValue & MangaListStatus.Tags & MangaListStatus.Comments;
    } & MangaForList.NumVolumes & MangaForList.NumChapters & MangaForList.Authors> & MangaForDetails.Recommendations<WorkForList.AlternativeTitles & WorkForList.StartDate & WorkForList.EndDate & WorkForList.Synopsis & WorkForList.Mean & WorkForList.Rank & WorkForList.Popularity & WorkForList.NumListUsers & WorkForList.NumScoringUsers & WorkForList.Nsfw & WorkForList.Genres & WorkForList.CreatedAt & WorkForList.UpdatedAt & MangaForList.MediaType & MangaForList.Status & {
        my_list_status: MangaListStatusBase & MangaListStatus.StartDate & MangaListStatus.FinishDate & MangaListStatus.Priority & MangaListStatus.NumTimesReread & MangaListStatus.RereadValue & MangaListStatus.Tags & MangaListStatus.Comments;
    } & MangaForList.NumVolumes & MangaForList.NumChapters & MangaForList.Authors> & MangaForDetails.Serialization>;
    alternativeTitles(): MangaDetailsFields<T & WorkForList.AlternativeTitles>;
    startDate(): MangaDetailsFields<T & WorkForList.StartDate>;
    endDate(): MangaDetailsFields<T & WorkForList.EndDate>;
    synopsis(): MangaDetailsFields<T & WorkForList.Synopsis>;
    mean(): MangaDetailsFields<T & WorkForList.Mean>;
    rank(): MangaDetailsFields<T & WorkForList.Rank>;
    popularity(): MangaDetailsFields<T & WorkForList.Popularity>;
    numListUsers(): MangaDetailsFields<T & WorkForList.NumListUsers>;
    numScoringUsers(): MangaDetailsFields<T & WorkForList.NumScoringUsers>;
    nsfw(): MangaDetailsFields<T & WorkForList.Nsfw>;
    genres(): MangaDetailsFields<T & WorkForList.Genres>;
    createdAt(): MangaDetailsFields<T & WorkForList.CreatedAt>;
    updatedAt(): MangaDetailsFields<T & WorkForList.UpdatedAt>;
    mediaType(): MangaDetailsFields<T & MangaForList.MediaType>;
    status(): MangaDetailsFields<T & MangaForList.Status>;
    myListStatus<U>(fields?: MangaListStatusFields<U>): MangaDetailsFields<T & {
        my_list_status: MangaListStatusBase & U;
    }>;
    numVolumes(): MangaDetailsFields<T & MangaForList.NumVolumes>;
    numChapters(): MangaDetailsFields<T & MangaForList.NumChapters>;
    /**
     * authors{first_name,last_name}
     *
     * @param overrideFields - `It's recomended to left this one empty`
     * All fields are included by default since there are only 2 {first_name,last_name}
     * Keep in mind that override is not type safe
     */
    authors(overrideFields?: string[]): MangaDetailsFields<T & MangaForList.Authors>;
    pictures(): MangaDetailsFields<T & MangaForDetails.Pictures>;
    background(): MangaDetailsFields<T & MangaForDetails.Background>;
    relatedAnime<U>(fields?: Anime.AnimeFields<U>): MangaDetailsFields<T & MangaForDetails.RelatedAnime<U>>;
    relatedManga<U>(fields?: MangaFields<U>): MangaDetailsFields<T & MangaForDetails.RelatedManga<U>>;
    recommendations<U>(fields?: MangaFields<U>): MangaDetailsFields<T & MangaForDetails.Recommendations<U>>;
    serialization(): MangaDetailsFields<T & MangaForDetails.Serialization>;
}
/**
 * Manga For Details
 */
export declare function detailsFields(): MangaDetailsFields<unknown>;
/**
 * Manga List Status
 */
export declare class MangaListStatusFields<T> {
    fields: {
        [key: string]: boolean;
    };
    type: T;
    /** Aka `I don't care mode` */
    all(): MangaListStatusFields<T & MangaListStatus.StartDate & MangaListStatus.FinishDate & MangaListStatus.Priority & MangaListStatus.NumTimesReread & MangaListStatus.RereadValue & MangaListStatus.Tags & MangaListStatus.Comments>;
    startDate(): MangaListStatusFields<T & MangaListStatus.StartDate>;
    finishDate(): MangaListStatusFields<T & MangaListStatus.FinishDate>;
    priority(): MangaListStatusFields<T & MangaListStatus.Priority>;
    numTimesReread(): MangaListStatusFields<T & MangaListStatus.NumTimesReread>;
    rereadValue(): MangaListStatusFields<T & MangaListStatus.RereadValue>;
    tags(): MangaListStatusFields<T & MangaListStatus.Tags>;
    comments(): MangaListStatusFields<T & MangaListStatus.Comments>;
}
/**
 * Manga List Status
 */
export declare function listStatusFields(): MangaListStatusFields<unknown>;
