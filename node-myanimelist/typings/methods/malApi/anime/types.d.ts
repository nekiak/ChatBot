import * as Common from "../common";
export interface AnimeItem<T> {
    node: T;
}
export declare module AnimeForList {
    interface MediaType {
        media_type: "unknown" | "tv" | "ova" | "movie" | "special" | "ona" | "music";
    }
    interface Status {
        /**
         * Airing status.
         */
        status: "finished_airing" | "currently_airing" | "not_yet_aired";
    }
    interface MyListStatus<T> {
        my_list_status: T | null;
    }
    interface NumEpisodes {
        /**
         * The total number of episodes of this series. If unknown, it is 0.
         */
        num_episodes: number;
    }
    interface StartSeason {
        start_season: {
            year: number;
            season: "winter" | "spring" | "summer" | "fall";
        } | null;
    }
    interface Broadcast {
        /**
         * Broadcast date.
         */
        broadcast: {
            /**
             * Day of the week broadcast in Japan time.
             *
             * Day of the week or `other`
             */
            day_of_the_week: string;
            /**
             * for example: "01:25"
             */
            start_time: string | null;
        } | null;
    }
    interface Source {
        /**
         * Original work.
         */
        source: "other" | "original" | "manga" | "4_koma_manga" | "web_manga" | "digital_manga" | "novel" | "light_novel" | "visual_novel" | "game" | "card_game" | "book" | "picture_book" | "radio" | "music" | null;
    }
    interface AverageEpisodeDuration {
        /**
         * Average length of episode in seconds.
         */
        average_episode_duration: number | null;
    }
    interface Rating {
        /**
         * | Value | Description|
         * | :---- | :--------- |
         * | g     | 	G - All Ages |
         * | pg    | 	PG - Children |
         * | pg_13 | 	pg_13 - Teens 13 and Older |
         * | r     | 	R - 17+ (violence & profanity) |
         * | r+    | 	R+ - Profanity & Mild Nudity |
         * | rx    | 	Rx - Hentai |
         */
        rating: "g" | "pg" | "pg_13" | "r" | "r+" | "rx" | null;
    }
    interface Studios {
        studios: {
            id: number;
            name: string;
        }[];
    }
}
export declare module AnimeForDetails {
    interface Pictures {
        pictures: Array<Common.Picture>;
    }
    interface Background {
        background: string | null;
    }
    interface RelatedAnime<T> {
        related_anime: Array<Common.RelatedEdge<T>>;
    }
    interface RelatedManga<T> {
        related_manga: Array<Common.RelatedEdge<T>>;
    }
    interface Recommendations<T> {
        recommendations: Array<Common.RecommendationEdge<T>>;
    }
    interface Statistics {
        statistics: AnimeStatistics | null;
    }
}
export interface AnimeStatistics {
    num_list_users: number;
    status: {
        watching: number;
        completed: number;
        on_hold: number;
        dropped: number;
        plan_to_watch: number;
    };
}
export interface AnimeListStatusBase {
    status: "watching" | "completed" | "on_hold" | "dropped" | "plan_to_watch" | null;
    /**
     * 0-10
     */
    score: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    /**
     * 0 or the number of watched episodes.
     *
     * There is mistake in MAL v2 API it should be num_watched_episodes
     */
    num_episodes_watched: number;
    /**
     * If authorized user watches an anime again after completion, this field value is true.
     *
     * In this case, MyAnimeList treats the anime as 'watching' in the user's anime list.
     */
    is_rewatching: boolean;
    updated_at: string;
}
export declare module AnimeListStatus {
    interface StartDate {
        start_date: string | null;
    }
    interface FinishDate {
        finish_date: string | null;
    }
    interface Priority {
        priority: number;
    }
    interface NumTimesRewatched {
        num_times_rewatched: number;
    }
    interface RewatchValue {
        rewatch_value: number;
    }
    interface Tags {
        tags: string[];
    }
    interface Comments {
        /**
         * You cannot contain this field in a list.
         */
        comments: string;
    }
}
export interface UpdateAnimeParams {
    status?: "watching" | "completed" | "on_hold" | "dropped" | "plan_to_watch";
    is_rewatching?: boolean;
    /**
     * 0-10
     */
    score?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | number;
    /**
     * 0 or the number of watched episodes.
     */
    num_watched_episodes?: number;
    priority?: 0 | 1 | 2 | number;
    num_times_rewatched?: number;
    rewatch_value?: 0 | 1 | 2 | 3 | 4 | 5 | number;
    tags?: string;
    comments?: string;
}
