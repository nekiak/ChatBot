import { User } from "./types";
export declare class UserFields<T> {
    fields: any;
    type: T;
    /** Aka `I don't care mode` */
    all(): UserFields<T & User.Gender & User.Birthday & User.AnimeStatistics & User.TimeZone & User.IsSupporter>;
    gender(): UserFields<T & User.Gender>;
    birthday(): UserFields<T & User.Birthday>;
    animeStatistics(): UserFields<T & User.AnimeStatistics>;
    timeZone(): UserFields<T & User.TimeZone>;
    isSupporter(): UserFields<T & User.IsSupporter>;
}
export declare function fields(): UserFields<unknown>;
