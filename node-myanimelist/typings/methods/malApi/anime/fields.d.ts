import { WorkForList } from "../common";
import { AnimeForList, AnimeForDetails, AnimeListStatus, AnimeListStatusBase } from "./types";
import * as Manga from "../manga";
export interface AnimeSearchItem<T> {
    node: T;
}
/**
 * Anime For List
 */
export declare class AnimeFields<T> {
    fields: {
        [key: string]: boolean | string;
    };
    type: T;
    /** Aka `I don't care mode` */
    all(): AnimeFields<T & WorkForList.AlternativeTitles & WorkForList.StartDate & WorkForList.EndDate & WorkForList.Synopsis & WorkForList.Mean & WorkForList.Rank & WorkForList.Popularity & WorkForList.NumListUsers & WorkForList.NumScoringUsers & WorkForList.Nsfw & WorkForList.Genres & WorkForList.CreatedAt & WorkForList.UpdatedAt & AnimeForList.MediaType & AnimeForList.Status & {
        my_list_status: AnimeListStatusBase & AnimeListStatus.StartDate & AnimeListStatus.FinishDate & AnimeListStatus.Priority & AnimeListStatus.NumTimesRewatched & AnimeListStatus.RewatchValue & AnimeListStatus.Tags & AnimeListStatus.Comments;
    } & AnimeForList.NumEpisodes & AnimeForList.StartSeason & AnimeForList.Broadcast & AnimeForList.Source & AnimeForList.AverageEpisodeDuration & AnimeForList.Rating & AnimeForList.Studios>;
    alternativeTitles(): AnimeFields<T & WorkForList.AlternativeTitles>;
    startDate(): AnimeFields<T & WorkForList.StartDate>;
    endDate(): AnimeFields<T & WorkForList.EndDate>;
    synopsis(): AnimeFields<T & WorkForList.Synopsis>;
    mean(): AnimeFields<T & WorkForList.Mean>;
    rank(): AnimeFields<T & WorkForList.Rank>;
    popularity(): AnimeFields<T & WorkForList.Popularity>;
    numListUsers(): AnimeFields<T & WorkForList.NumListUsers>;
    numScoringUsers(): AnimeFields<T & WorkForList.NumScoringUsers>;
    nsfw(): AnimeFields<T & WorkForList.Nsfw>;
    genres(): AnimeFields<T & WorkForList.Genres>;
    createdAt(): AnimeFields<T & WorkForList.CreatedAt>;
    updatedAt(): AnimeFields<T & WorkForList.UpdatedAt>;
    mediaType(): AnimeFields<T & AnimeForList.MediaType>;
    status(): AnimeFields<T & AnimeForList.Status>;
    myListStatus<U>(fields?: AnimeListStatusFields<U>): AnimeFields<T & {
        my_list_status: AnimeListStatusBase & U;
    }>;
    numEpisodes(): AnimeFields<T & AnimeForList.NumEpisodes>;
    startSeason(): AnimeFields<T & AnimeForList.StartSeason>;
    broadcast(): AnimeFields<T & AnimeForList.Broadcast>;
    source(): AnimeFields<T & AnimeForList.Source>;
    averageEpisodeDuration(): AnimeFields<T & AnimeForList.AverageEpisodeDuration>;
    rating(): AnimeFields<T & AnimeForList.Rating>;
    studios(): AnimeFields<T & AnimeForList.Studios>;
}
/**
 * Anime For List
 */
export declare function fields(): AnimeFields<unknown>;
/**
 * Anime For Details
 */
export declare class AnimeDetailsFields<T> {
    fields: {
        [key: string]: boolean | string;
    };
    type: T;
    /** Aka `I don't care mode` */
    all(): AnimeDetailsFields<T & WorkForList.AlternativeTitles & WorkForList.StartDate & WorkForList.EndDate & WorkForList.Synopsis & WorkForList.Mean & WorkForList.Rank & WorkForList.Popularity & WorkForList.NumListUsers & WorkForList.NumScoringUsers & WorkForList.Nsfw & WorkForList.Genres & WorkForList.CreatedAt & WorkForList.UpdatedAt & AnimeForList.MediaType & AnimeForList.Status & {
        my_list_status: AnimeListStatusBase & AnimeListStatus.StartDate & AnimeListStatus.FinishDate & AnimeListStatus.Priority & AnimeListStatus.NumTimesRewatched & AnimeListStatus.RewatchValue & AnimeListStatus.Tags & AnimeListStatus.Comments;
    } & AnimeForList.NumEpisodes & AnimeForList.StartSeason & AnimeForList.Broadcast & AnimeForList.Source & AnimeForList.AverageEpisodeDuration & AnimeForList.Rating & AnimeForList.Studios & AnimeForDetails.Pictures & AnimeForDetails.Background & AnimeForDetails.RelatedAnime<WorkForList.AlternativeTitles & WorkForList.StartDate & WorkForList.EndDate & WorkForList.Synopsis & WorkForList.Mean & WorkForList.Rank & WorkForList.Popularity & WorkForList.NumListUsers & WorkForList.NumScoringUsers & WorkForList.Nsfw & WorkForList.Genres & WorkForList.CreatedAt & WorkForList.UpdatedAt & AnimeForList.MediaType & AnimeForList.Status & {
        my_list_status: AnimeListStatusBase & AnimeListStatus.StartDate & AnimeListStatus.FinishDate & AnimeListStatus.Priority & AnimeListStatus.NumTimesRewatched & AnimeListStatus.RewatchValue & AnimeListStatus.Tags & AnimeListStatus.Comments;
    } & AnimeForList.NumEpisodes & AnimeForList.StartSeason & AnimeForList.Broadcast & AnimeForList.Source & AnimeForList.AverageEpisodeDuration & AnimeForList.Rating & AnimeForList.Studios> & AnimeForDetails.RelatedManga<unknown> & AnimeForDetails.Recommendations<WorkForList.AlternativeTitles & WorkForList.StartDate & WorkForList.EndDate & WorkForList.Synopsis & WorkForList.Mean & WorkForList.Rank & WorkForList.Popularity & WorkForList.NumListUsers & WorkForList.NumScoringUsers & WorkForList.Nsfw & WorkForList.Genres & WorkForList.CreatedAt & WorkForList.UpdatedAt & AnimeForList.MediaType & AnimeForList.Status & {
        my_list_status: AnimeListStatusBase & AnimeListStatus.StartDate & AnimeListStatus.FinishDate & AnimeListStatus.Priority & AnimeListStatus.NumTimesRewatched & AnimeListStatus.RewatchValue & AnimeListStatus.Tags & AnimeListStatus.Comments;
    } & AnimeForList.NumEpisodes & AnimeForList.StartSeason & AnimeForList.Broadcast & AnimeForList.Source & AnimeForList.AverageEpisodeDuration & AnimeForList.Rating & AnimeForList.Studios> & AnimeForDetails.Statistics>;
    alternativeTitles(): AnimeDetailsFields<T & WorkForList.AlternativeTitles>;
    startDate(): AnimeDetailsFields<T & WorkForList.StartDate>;
    endDate(): AnimeDetailsFields<T & WorkForList.EndDate>;
    synopsis(): AnimeDetailsFields<T & WorkForList.Synopsis>;
    mean(): AnimeDetailsFields<T & WorkForList.Mean>;
    rank(): AnimeDetailsFields<T & WorkForList.Rank>;
    popularity(): AnimeDetailsFields<T & WorkForList.Popularity>;
    numListUsers(): AnimeDetailsFields<T & WorkForList.NumListUsers>;
    numScoringUsers(): AnimeDetailsFields<T & WorkForList.NumScoringUsers>;
    nsfw(): AnimeDetailsFields<T & WorkForList.Nsfw>;
    genres(): AnimeDetailsFields<T & WorkForList.Genres>;
    createdAt(): AnimeDetailsFields<T & WorkForList.CreatedAt>;
    updatedAt(): AnimeDetailsFields<T & WorkForList.UpdatedAt>;
    mediaType(): AnimeDetailsFields<T & AnimeForList.MediaType>;
    status(): AnimeDetailsFields<T & AnimeForList.Status>;
    myListStatus<U>(fields?: AnimeListStatusFields<U>): AnimeDetailsFields<T & {
        my_list_status: AnimeListStatusBase & U;
    }>;
    numEpisodes(): AnimeDetailsFields<T & AnimeForList.NumEpisodes>;
    startSeason(): AnimeDetailsFields<T & AnimeForList.StartSeason>;
    broadcast(): AnimeDetailsFields<T & AnimeForList.Broadcast>;
    source(): AnimeDetailsFields<T & AnimeForList.Source>;
    averageEpisodeDuration(): AnimeDetailsFields<T & AnimeForList.AverageEpisodeDuration>;
    rating(): AnimeDetailsFields<T & AnimeForList.Rating>;
    studios(): AnimeDetailsFields<T & AnimeForList.Studios>;
    pictures(): AnimeDetailsFields<T & AnimeForDetails.Pictures>;
    background(): AnimeDetailsFields<T & AnimeForDetails.Background>;
    relatedAnime<U>(fields?: AnimeFields<U>): AnimeDetailsFields<T & AnimeForDetails.RelatedAnime<U>>;
    relatedManga<U>(fields?: Manga.MangaFields<U>): AnimeDetailsFields<T & AnimeForDetails.RelatedManga<U>>;
    recommendations<U>(fields?: AnimeFields<U>): AnimeDetailsFields<T & AnimeForDetails.Recommendations<U>>;
    statistics(): AnimeDetailsFields<T & AnimeForDetails.Statistics>;
}
/**
 * Anime For Details
 */
export declare function detailsFields(): AnimeDetailsFields<unknown>;
/**
 * Anime List Status
 */
export declare class AnimeListStatusFields<T> {
    fields: {
        [key: string]: boolean;
    };
    type: T;
    /** Aka `I don't care mode` */
    all(): AnimeListStatusFields<T & AnimeListStatus.StartDate & AnimeListStatus.FinishDate & AnimeListStatus.Priority & AnimeListStatus.NumTimesRewatched & AnimeListStatus.RewatchValue & AnimeListStatus.Tags & AnimeListStatus.Comments>;
    startDate(): AnimeListStatusFields<T & AnimeListStatus.StartDate>;
    finishDate(): AnimeListStatusFields<T & AnimeListStatus.FinishDate>;
    priority(): AnimeListStatusFields<T & AnimeListStatus.Priority>;
    numTimesRewatched(): AnimeListStatusFields<T & AnimeListStatus.NumTimesRewatched>;
    rewatchValue(): AnimeListStatusFields<T & AnimeListStatus.RewatchValue>;
    tags(): AnimeListStatusFields<T & AnimeListStatus.Tags>;
    comments(): AnimeListStatusFields<T & AnimeListStatus.Comments>;
}
/**
 * Anime List Status
 */
export declare function listStatusFields(): AnimeListStatusFields<unknown>;
