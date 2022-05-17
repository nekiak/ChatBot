"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mangaReviews = exports.animeReviews = void 0;
const index_1 = require("./index");
const url_join_1 = __importDefault(require("url-join"));
/** @category Reviews*/
function animeReviews(params) {
    const url = (0, url_join_1.default)(index_1.jikanUrl, "reviews", "anime") + (0, index_1.queryJoin)({ ...params });
    return (0, index_1.jikanGet)(url);
}
exports.animeReviews = animeReviews;
/** @category Reviews*/
function mangaReviews(params) {
    const url = (0, url_join_1.default)(index_1.jikanUrl, "reviews", "manga") + (0, index_1.queryJoin)({ ...params });
    return (0, index_1.jikanGet)(url);
}
exports.mangaReviews = mangaReviews;
//# sourceMappingURL=reviews.js.map