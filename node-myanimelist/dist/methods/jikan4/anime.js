"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.animeSearch = exports.anime = exports.Anime = void 0;
const index_1 = require("./index");
const url_join_1 = __importDefault(require("url-join"));
/** @category Anime*/
class Anime {
    constructor(id) {
        this.baseUrl = `${index_1.jikanUrl}/anime/${id}`;
    }
    info() {
        return (0, index_1.jikanGet)(this.baseUrl);
    }
    characters() {
        return (0, index_1.jikanGet)((0, url_join_1.default)(this.baseUrl, "characters"));
    }
    staff() {
        return (0, index_1.jikanGet)((0, url_join_1.default)(this.baseUrl, "staff"));
    }
    episodes(params) {
        const url = (0, url_join_1.default)(this.baseUrl, "episodes") + (0, index_1.queryJoin)({ ...params });
        return (0, index_1.jikanGet)(url);
    }
    episode(id) {
        return (0, index_1.jikanGet)((0, url_join_1.default)(this.baseUrl, "episodes", id.toString()));
    }
    news(params) {
        const url = (0, url_join_1.default)(this.baseUrl, "news") + (0, index_1.queryJoin)({ ...params });
        return (0, index_1.jikanGet)(url);
    }
    forum(params) {
        const url = (0, url_join_1.default)(this.baseUrl, "forum") + (0, index_1.queryJoin)({ ...params });
        return (0, index_1.jikanGet)(url);
    }
    videos() {
        return (0, index_1.jikanGet)((0, url_join_1.default)(this.baseUrl, "videos"));
    }
    pictures() {
        return (0, index_1.jikanGet)((0, url_join_1.default)(this.baseUrl, "pictures"));
    }
    statistics() {
        return (0, index_1.jikanGet)((0, url_join_1.default)(this.baseUrl, "statistics"));
    }
    moreInfo() {
        return (0, index_1.jikanGet)((0, url_join_1.default)(this.baseUrl, "moreinfo"));
    }
    recommendations() {
        return (0, index_1.jikanGet)((0, url_join_1.default)(this.baseUrl, "recommendations"));
    }
    userUpdates(params) {
        const url = (0, url_join_1.default)(this.baseUrl, "userupdates") + (0, index_1.queryJoin)({ ...params });
        return (0, index_1.jikanGet)(url);
    }
    reviews(params) {
        const url = (0, url_join_1.default)(this.baseUrl, "reviews") + (0, index_1.queryJoin)({ ...params });
        return (0, index_1.jikanGet)(url);
    }
    relations() {
        return (0, index_1.jikanGet)((0, url_join_1.default)(this.baseUrl, "relations"));
    }
    themes() {
        return (0, index_1.jikanGet)((0, url_join_1.default)(this.baseUrl, "themes"));
    }
    external() {
        return (0, index_1.jikanGet)((0, url_join_1.default)(this.baseUrl, "external"));
    }
}
exports.Anime = Anime;
/** @category Anime*/
function anime(id) {
    return new Anime(id);
}
exports.anime = anime;
/** @category Anime*/
function animeSearch(params) {
    const url = (0, url_join_1.default)(index_1.jikanUrl, "anime") + (0, index_1.queryJoin)({ ...params });
    return (0, index_1.jikanGet)(url);
}
exports.animeSearch = animeSearch;
//# sourceMappingURL=anime.js.map