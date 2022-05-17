import * as Common from "../common";
export interface MangaItem<T> {
    node: T;
}
export declare module MangaForList {
    interface MediaType {
        media_type: "unknown" | "manga" | "novel" | "one_shot" | "doujinshi" | "manhwa" | "manhua" | "oel";
    }
    interface Status {
        /**
         * Publishing status.
         */
        status: "finished" | "currently_publishing" | "not_yet_published";
    }
    interface MyListStatus<T> {
        /**
         * Status of user's manga list. If there is no access token, the API excludes this field.
         */
        my_list_status: T | null;
    }
    interface NumVolumes {
        /**
         * If unknown, it is 0.
         */
        num_volumes: number;
    }
    interface NumChapters {
        /**
         * If unknown, it is 0.
         */
        num_chapters: number;
    }
    interface Authors {
        authors: Common.PersonRoleEdge[];
    }
}
export declare module MangaForDetails {
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
    interface Serialization {
        serialization: Array<MangaMagazineRelationEdge>;
    }
}
export interface MangaMagazineRelationEdge {
    node: {
        id: number;
        name: string;
    };
    role: string;
}
export interface MangaListStatusBase {
    status: "reading" | "completed" | "on_hold" | "dropped" | "plan_to_read" | null;
    /**
     * 0-10
     */
    score: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    /**
     * 0 or the number of read volumes.
     */
    num_volumes_read: number;
    /**
     * 0 or the number of read chapters.
     */
    num_chapters_read: number;
    /**
     * If authorized user reads an manga again after completion, this field value is true.
     *
     * In this case, MyAnimeList treats the manga as 'reading' in the user's manga list.
     */
    is_rereading: boolean;
    updated_at: string;
}
export declare module MangaListStatus {
    interface StartDate {
        start_date: string | null;
    }
    interface FinishDate {
        finish_date: string | null;
    }
    interface Priority {
        priority: number;
    }
    interface NumTimesReread {
        num_times_reread: number;
    }
    interface RereadValue {
        reread_value: number;
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
export interface UpdateMangaParams {
    status?: "reading" | "completed" | "on_hold" | "dropped" | "plan_to_read";
    is_rereading?: boolean;
    /**
     * 0-10
     */
    score?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | number;
    num_volumes_read?: number;
    num_chapters_read?: number;
    priority?: 0 | 1 | 2 | number;
    num_times_reread?: number;
    rewatch_value?: 0 | 1 | 2 | 3 | 4 | 5 | number;
    tags?: string;
    comments?: string;
}
