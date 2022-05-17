"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mangaRecommendations = exports.animeRecommendations = void 0;
const index_1 = require("./index");
const url_join_1 = __importDefault(require("url-join"));
/** @category Recommendations*/
function animeRecommendations(params) {
    const url = (0, url_join_1.default)(index_1.jikanUrl, "recommendations", "anime") + (0, index_1.queryJoin)({ ...params });
    return (0, index_1.jikanGet)(url);
}
exports.animeRecommendations = animeRecommendations;
/** @category Recommendations*/
function mangaRecommendations(params) {
    const url = (0, url_join_1.default)(index_1.jikanUrl, "recommendations", "manga") + (0, index_1.queryJoin)({ ...params });
    return (0, index_1.jikanGet)(url);
}
exports.mangaRecommendations = mangaRecommendations;
//# sourceMappingURL=recommendations.js.map