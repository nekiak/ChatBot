"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.topReviews = exports.topCharacters = exports.topPeople = exports.topManga = exports.topAnime = void 0;
const index_1 = require("./index");
const url_join_1 = __importDefault(require("url-join"));
/** @category Top*/
function topAnime(params) {
    const url = (0, url_join_1.default)(index_1.jikanUrl, "top", "anime") + (0, index_1.queryJoin)({ ...params });
    return (0, index_1.jikanGet)(url);
}
exports.topAnime = topAnime;
/** @category Top*/
function topManga(params) {
    const url = (0, url_join_1.default)(index_1.jikanUrl, "top", "manga") + (0, index_1.queryJoin)({ ...params });
    return (0, index_1.jikanGet)(url);
}
exports.topManga = topManga;
/** @category Top*/
function topPeople(params) {
    const url = (0, url_join_1.default)(index_1.jikanUrl, "top", "people") + (0, index_1.queryJoin)({ ...params });
    return (0, index_1.jikanGet)(url);
}
exports.topPeople = topPeople;
/** @category Top*/
function topCharacters(params) {
    const url = (0, url_join_1.default)(index_1.jikanUrl, "top", "characters") + (0, index_1.queryJoin)({ ...params });
    return (0, index_1.jikanGet)(url);
}
exports.topCharacters = topCharacters;
/** @category Top*/
function topReviews(params) {
    const url = (0, url_join_1.default)(index_1.jikanUrl, "top", "characters") + (0, index_1.queryJoin)({ ...params });
    return (0, index_1.jikanGet)(url);
}
exports.topReviews = topReviews;
//# sourceMappingURL=top.js.map