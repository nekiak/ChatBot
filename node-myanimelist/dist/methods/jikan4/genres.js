"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mangaGenres = exports.animeGenres = void 0;
const index_1 = require("./index");
const url_join_1 = __importDefault(require("url-join"));
/** @category Genres*/
function animeGenres() {
    return (0, index_1.jikanGet)((0, url_join_1.default)(index_1.jikanUrl, "genres", "anime"));
}
exports.animeGenres = animeGenres;
/** @category Genres*/
function mangaGenres() {
    return (0, index_1.jikanGet)((0, url_join_1.default)(index_1.jikanUrl, "genres", "managa"));
}
exports.mangaGenres = mangaGenres;
//# sourceMappingURL=genres.js.map