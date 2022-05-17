"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seasonUpcoming = exports.seasonsList = exports.seasonNow = exports.season = void 0;
const index_1 = require("./index");
const url_join_1 = __importDefault(require("url-join"));
/** @category Season*/
function season(year, season, params) {
    const url = (0, url_join_1.default)(index_1.jikanUrl, "seasons", year.toString(), season) +
        (0, index_1.queryJoin)({ ...params });
    return (0, index_1.jikanGet)(url);
}
exports.season = season;
/** @category Season*/
function seasonNow(params) {
    const url = (0, url_join_1.default)(index_1.jikanUrl, "seasons", "now") + (0, index_1.queryJoin)({ ...params });
    return (0, index_1.jikanGet)(url);
}
exports.seasonNow = seasonNow;
/** @category Season*/
function seasonsList() {
    const url = (0, url_join_1.default)(index_1.jikanUrl, "seasons");
    return (0, index_1.jikanGet)(url);
}
exports.seasonsList = seasonsList;
/** @category Season*/
function seasonUpcoming(params) {
    const url = (0, url_join_1.default)(index_1.jikanUrl, "seasons", "upcoming") + (0, index_1.queryJoin)({ ...params });
    return (0, index_1.jikanGet)(url);
}
exports.seasonUpcoming = seasonUpcoming;
//# sourceMappingURL=season.js.map