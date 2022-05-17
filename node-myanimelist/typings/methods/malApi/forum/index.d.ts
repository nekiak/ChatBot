import { MalAcount } from "..";
import { MalRequest } from "../request";
import { ForumCategory, ForumTopicData, ForumTopicsData } from "./types";
import { Paging } from "../common";
export * from "./types";
export declare class MalForum {
    private acount;
    constructor(acount: MalAcount);
    boards(): MalRequest<{
        categories: ForumCategory;
    }>;
    details(topic_id: number, limit?: number | null, offset?: number | null): MalRequest<Paging<ForumTopicData>>;
    topics(params: {
        board_id?: number;
        subboard_id?: number;
        limit?: number;
        offset?: number;
        sort?: string;
        q?: string;
        topic_user_name?: string;
        user_name?: string;
    }): MalRequest<Paging<ForumTopicsData>>;
}
