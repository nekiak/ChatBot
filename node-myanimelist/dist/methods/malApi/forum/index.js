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
exports.MalForum = void 0;
const request_1 = require("../request");
const api_1 = require("../api");
__exportStar(require("./types"), exports);
class MalForum {
    constructor(acount) {
        this.acount = acount;
    }
    boards() {
        const config = {
            url: [api_1.apiUrl, "forum", "boards"].join("/"),
            headers: this.acount.getHttpHeaders(),
        };
        return new request_1.MalRequest(config);
    }
    details(topic_id, limit, offset) {
        const config = {
            url: [api_1.apiUrl, "forum", "topic", topic_id.toString()].join("/"),
            headers: this.acount.getHttpHeaders(),
            params: {},
        };
        if (limit != null)
            config.params.limit = limit;
        if (offset != null)
            config.params.offset = offset;
        return new request_1.MalRequest(config);
    }
    topics(params) {
        const config = {
            url: [api_1.apiUrl, "forum", "topics"].join("/"),
            headers: this.acount.getHttpHeaders(),
            params: params,
        };
        return new request_1.MalRequest(config);
    }
}
exports.MalForum = MalForum;
//# sourceMappingURL=index.js.map