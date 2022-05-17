import { MalAcount } from "..";
import MalRequest from "../request";
import { AnimeFields, AnimeListStatusFields } from "../anime";
import { Paging, WorkBase } from "../common";
import { UserFields } from "./fields";
import { AnimeListStatusBase } from "../anime/types";
import { MangaFields, MangaListStatusBase, MangaListStatusFields } from "../manga";
import { UserBase, AnimeListItem, MangaListItem } from "./types";
export * from "./fields";
export * from "./types";
export declare class MalUser {
    private acount;
    constructor(acount: MalAcount);
    info<T>(fields?: UserFields<T>): MalRequest<UserBase & T>;
    animelist<T, S>(name?: string, fields?: AnimeFields<T> | null, listStatusFields?: AnimeListStatusFields<S> | null, args?: {
        status?: string;
        sort?: string;
        limit?: number;
        offset?: number;
    }): MalRequest<Paging<AnimeListItem<WorkBase & T, AnimeListStatusBase & S>>>;
    mangalist<T, S>(name?: string, fields?: MangaFields<T> | null, listStatusFields?: MangaListStatusFields<S> | null, args?: {
        status?: string;
        sort?: string;
        limit?: number;
        offset?: number;
    }): MalRequest<Paging<MangaListItem<WorkBase & T, MangaListStatusBase & S>>>;
}
