"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomUser = exports.randomPerson = exports.randomCharacters = exports.randomManga = exports.randomAnime = void 0;
const index_1 = require("./index");
const url_join_1 = __importDefault(require("url-join"));
/** @category Random*/
function randomAnime() {
    return (0, index_1.jikanGet)((0, url_join_1.default)(index_1.jikanUrl, "random", "anime"));
}
exports.randomAnime = randomAnime;
/** @category Random*/
function randomManga() {
    return (0, index_1.jikanGet)((0, url_join_1.default)(index_1.jikanUrl, "random", "manga"));
}
exports.randomManga = randomManga;
/** @category Random*/
function randomCharacters() {
    return (0, index_1.jikanGet)((0, url_join_1.default)(index_1.jikanUrl, "random", "characters"));
}
exports.randomCharacters = randomCharacters;
/** @category Random*/
function randomPerson() {
    return (0, index_1.jikanGet)((0, url_join_1.default)(index_1.jikanUrl, "random", "people"));
}
exports.randomPerson = randomPerson;
/** @category Random*/
function randomUser() {
    return (0, index_1.jikanGet)((0, url_join_1.default)(index_1.jikanUrl, "random", "user"));
}
exports.randomUser = randomUser;
//# sourceMappingURL=random.js.map