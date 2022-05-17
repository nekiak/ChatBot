import { Picture } from ".";
export interface WorkBase {
    id: number;
    title: string;
    main_picture: Picture | null;
}
export declare module WorkForList {
    interface AlternativeTitles {
        /**
         * "synonyms" or ISO 639-1
         */
        alternative_titles: {
            synonyms: string[];
            en: string | null;
            ja: string | null;
        } | null;
    }
    interface StartDate {
        start_date: string | null;
    }
    interface EndDate {
        end_date: string | null;
    }
    interface Synopsis {
        /**
         * Synopsis.
         *
         * The API strips BBCode tags from the result.
         */
        synopsis: string | null;
    }
    interface Mean {
        /**
         * Mean score.
         *
         * When the `mean` can not be calculated, such as when the number of user scores is small, the result does not include this field.
         */
        mean: number | null;
    }
    interface Rank {
        /**
         * When the `rank` can not be calculated, such as when the number of user scores is small, the result does not include this field.
         */
        rank: number | null;
    }
    interface Popularity {
        popularity: number | null;
    }
    interface NumListUsers {
        /**
         * Number of users who have this work in their list.
         */
        num_list_users: number;
    }
    interface NumScoringUsers {
        num_scoring_users: number;
    }
    interface Nsfw {
        /**
         * | Value    | Description|
         * | :------- | :--------------------------------  |
         * | white    | This work is safe for work         |
         * | gray     | This work may be not safe for work |
         * | black    | This work is not safe for work     |
         */
        nsfw: "white" | "gray" | "black" | null;
    }
    interface Genres {
        genres: {
            id: number;
            name: string;
        }[];
    }
    interface CreatedAt {
        created_at: string;
    }
    interface UpdatedAt {
        updated_at: string;
    }
}
