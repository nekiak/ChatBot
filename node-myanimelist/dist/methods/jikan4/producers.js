"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.producers = void 0;
const index_1 = require("./index");
const url_join_1 = __importDefault(require("url-join"));
/** @category Producers*/
function producers() {
    return (0, index_1.jikanGet)((0, url_join_1.default)(index_1.jikanUrl, "producers"));
}
exports.producers = producers;
//# sourceMappingURL=producers.js.map