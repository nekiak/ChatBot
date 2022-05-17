"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.characterSearch = exports.character = exports.Character = void 0;
const index_1 = require("./index");
const url_join_1 = __importDefault(require("url-join"));
/** @category Character*/
class Character {
    constructor(id) {
        this.baseUrl = `${index_1.jikanUrl}/characters/${id}`;
    }
    info() {
        return (0, index_1.jikanGet)(this.baseUrl);
    }
    anime() {
        return (0, index_1.jikanGet)((0, url_join_1.default)(this.baseUrl, "anime"));
    }
    manga() {
        return (0, index_1.jikanGet)((0, url_join_1.default)(this.baseUrl, "manga"));
    }
    voiceActors() {
        return (0, index_1.jikanGet)((0, url_join_1.default)(this.baseUrl, "voices"));
    }
    pictures() {
        return (0, index_1.jikanGet)((0, url_join_1.default)(this.baseUrl, "pictures"));
    }
}
exports.Character = Character;
/** @category Character*/
function character(id) {
    return new Character(id);
}
exports.character = character;
/** @category Character*/
function characterSearch(params) {
    const url = (0, url_join_1.default)(index_1.jikanUrl, "characters") + (0, index_1.queryJoin)({ ...params });
    return (0, index_1.jikanGet)(url);
}
exports.characterSearch = characterSearch;
//# sourceMappingURL=character.js.map