import * as Types from "./types";
/** @category Schedules*/
export declare function schedules(params?: {
    page?: number;
    filter?: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "unknown" | "other";
}): Promise<Types.Schedules>;
