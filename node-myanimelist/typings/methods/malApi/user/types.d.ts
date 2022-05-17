export interface UserBase {
    id: number;
    name: string;
    location: string | null;
    joined_at: string;
    picture: string;
}
export declare module User {
    interface Gender {
        gender: string | null;
    }
    interface Birthday {
        birthday: string | null;
    }
    interface AnimeStatistics {
        anime_statistics: unknown | null;
    }
    interface TimeZone {
        time_zone: string | null;
    }
    interface IsSupporter {
        is_supporter: boolean | null;
    }
}
export interface AnimeListItem<T, S> {
    node: T;
    list_status: S;
}
export interface MangaListItem<T, S> {
    node: T;
    list_status: S;
}
