"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.personSearch = exports.person = exports.Person = void 0;
const index_1 = require("./index");
const url_join_1 = __importDefault(require("url-join"));
/** @category Person*/
class Person {
    constructor(id) {
        this.baseUrl = `${index_1.jikanUrl}/people/${id}`;
    }
    info() {
        return (0, index_1.jikanGet)(this.baseUrl);
    }
    anime() {
        return (0, index_1.jikanGet)((0, url_join_1.default)(this.baseUrl, "anime"));
    }
    voices() {
        return (0, index_1.jikanGet)((0, url_join_1.default)(this.baseUrl, "voices"));
    }
    manga() {
        return (0, index_1.jikanGet)((0, url_join_1.default)(this.baseUrl, "manga"));
    }
    pictures() {
        return (0, index_1.jikanGet)((0, url_join_1.default)(this.baseUrl, "pictures"));
    }
}
exports.Person = Person;
/** @category Person*/
function person(id) {
    return new Person(id);
}
exports.person = person;
/** @category Person*/
function personSearch(params) {
    const url = (0, url_join_1.default)(index_1.jikanUrl, "people") + (0, index_1.queryJoin)({ ...params });
    return (0, index_1.jikanGet)(url);
}
exports.personSearch = personSearch;
//# sourceMappingURL=person.js.map