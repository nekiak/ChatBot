"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MalManga = void 0;
const request_1 = require("../request");
const api_1 = require("../api");
const util_1 = require("../util");
__exportStar(require("./fields"), exports);
__exportStar(require("./types"), exports);
class MalManga {
    constructor(acount) {
        this.acount = acount;
    }
    search(q, fields, limit, offset) {
        const config = {
            url: [api_1.apiUrl, "manga"].join("/"),
            headers: this.acount.getHttpHeaders(),
            params: {
                q,
            },
        };
        if (fields != null)
            config.params.fields = fields.toString();
        if (limit != null)
            config.params.limit = limit;
        if (offset != null)
            config.params.offset = offset;
        return new request_1.MalRequest(config);
    }
    details(id, fields) {
        const config = {
            url: [api_1.apiUrl, "manga", id.toString()].join("/"),
            headers: this.acount.getHttpHeaders(),
            params: {},
        };
        if (fields)
            config.params.fields = fields.toString();
        return new request_1.MalRequest(config);
    }
    /**
     * | value | |
     * | ---- | ---- |
     * | all | Top Anime Series |
     * | airing | Top Airing Anime |
     * | upcoming | Top Upcoming Anime |
     * | tv | Top Anime TV Series |
     * | ova | Top Anime OVA Series |
     * | movie | Top Anime Movies |
     * | special | Top Anime Specials |
     * | bypopularity | Top Anime by Popularity |
     * | favorite | Top Favorited Anime |
     */
    ranking(rankingType, fields, limit, offset) {
        const config = {
            url: [api_1.apiUrl, "manga", "ranking"].join("/"),
            headers: this.acount.getHttpHeaders(),
            params: {
                ranking_type: rankingType,
            },
        };
        if (fields != null)
            config.params.fields = fields.toString();
        if (limit != null)
            config.params.limit = limit;
        if (offset != null)
            config.params.offset = offset;
        return new request_1.MalRequest(config);
    }
    updateMyManga(id, params) {
        const config = {
            method: "PATCH",
            url: [api_1.apiUrl, "manga", id.toString(), "my_list_status"].join("/"),
            headers: {
                ...this.acount.getHttpHeaders(),
                "content-type": "application/x-www-form-urlencoded",
            },
            params: {},
            data: (0, util_1.queryEncode)(params),
        };
        return new request_1.MalRequest(config);
    }
    deleteMyManga(id) {
        const config = {
            method: "DELETE",
            url: [api_1.apiUrl, "manga", id.toString(), "my_list_status"].join("/"),
            headers: this.acount.getHttpHeaders(),
        };
        return new request_1.MalRequest(config);
    }
}
exports.MalManga = MalManga;
//# sourceMappingURL=index.js.map