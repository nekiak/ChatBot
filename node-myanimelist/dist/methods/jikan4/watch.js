"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.watchPopularPromos = exports.watchRecentPromos = exports.watchPopularEpisodes = exports.watchRecentEpisodes = void 0;
const index_1 = require("./index");
const url_join_1 = __importDefault(require("url-join"));
/** @category Watch*/
function watchRecentEpisodes(params) {
    const url = (0, url_join_1.default)(index_1.jikanUrl, "watch", "episodes") + (0, index_1.queryJoin)({ ...params });
    return (0, index_1.jikanGet)(url);
}
exports.watchRecentEpisodes = watchRecentEpisodes;
/** @category Watch*/
function watchPopularEpisodes(params) {
    const url = (0, url_join_1.default)(index_1.jikanUrl, "watch", "episodes", "popular") +
        (0, index_1.queryJoin)({ ...params });
    return (0, index_1.jikanGet)(url);
}
exports.watchPopularEpisodes = watchPopularEpisodes;
/** @category Watch*/
function watchRecentPromos(params) {
    const url = (0, url_join_1.default)(index_1.jikanUrl, "watch", "promos") + (0, index_1.queryJoin)({ ...params });
    return (0, index_1.jikanGet)(url);
}
exports.watchRecentPromos = watchRecentPromos;
/** @category Watch*/
function watchPopularPromos(params) {
    const url = (0, url_join_1.default)(index_1.jikanUrl, "watch", "promos", "popular") + (0, index_1.queryJoin)({ ...params });
    return (0, index_1.jikanGet)(url);
}
exports.watchPopularPromos = watchPopularPromos;
//# sourceMappingURL=watch.js.map