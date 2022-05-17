"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mangaSearch = exports.manga = exports.Manga = void 0;
const index_1 = require("./index");
const url_join_1 = __importDefault(require("url-join"));
/** @category Manga*/
class Manga {
    constructor(id) {
        this.baseUrl = `${index_1.jikanUrl}/manga/${id}`;
    }
    info() {
        return (0, index_1.jikanGet)(this.baseUrl);
    }
    characters() {
        return (0, index_1.jikanGet)((0, url_join_1.default)(this.baseUrl, "characters"));
    }
    news(params) {
        const url = (0, url_join_1.default)(this.baseUrl, "news") + (0, index_1.queryJoin)({ ...params });
        return (0, index_1.jikanGet)(url);
    }
    forum(params) {
        const url = (0, url_join_1.default)(this.baseUrl, "forum") + (0, index_1.queryJoin)({ ...params });
        return (0, index_1.jikanGet)(url);
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
    external() {
        return (0, index_1.jikanGet)((0, url_join_1.default)(this.baseUrl, "external"));
    }
}
exports.Manga = Manga;
/** @category Manga*/
function manga(id) {
    return new Manga(id);
}
exports.manga = manga;
/** @category Manga*/
function mangaSearch(params) {
    const url = (0, url_join_1.default)(index_1.jikanUrl, "manga") + (0, index_1.queryJoin)({ ...params });
    return (0, index_1.jikanGet)(url);
}
exports.mangaSearch = mangaSearch;
//# sourceMappingURL=manga.js.map