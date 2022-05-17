"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clubSearch = exports.club = exports.Club = void 0;
const index_1 = require("./index");
const url_join_1 = __importDefault(require("url-join"));
/** @category Club*/
class Club {
    constructor(id) {
        this.baseUrl = `${index_1.jikanUrl}/clubs/${id}`;
    }
    info() {
        return (0, index_1.jikanGet)(this.baseUrl);
    }
    members(params) {
        const url = (0, url_join_1.default)(this.baseUrl, "members") + (0, index_1.queryJoin)({ ...params });
        return (0, index_1.jikanGet)(url);
    }
    staff() {
        return (0, index_1.jikanGet)((0, url_join_1.default)(this.baseUrl, "staff"));
    }
    relations() {
        return (0, index_1.jikanGet)((0, url_join_1.default)(this.baseUrl, "relations"));
    }
}
exports.Club = Club;
/** @category Club*/
function club(id) {
    return new Club(id);
}
exports.club = club;
/** @category Club*/
function clubSearch(params) {
    const url = (0, url_join_1.default)(index_1.jikanUrl, "clubs") + (0, index_1.queryJoin)({ ...params });
    return (0, index_1.jikanGet)(url);
}
exports.clubSearch = clubSearch;
//# sourceMappingURL=club.js.map