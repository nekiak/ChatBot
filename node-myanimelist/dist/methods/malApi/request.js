"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MalRequest = void 0;
const axios_1 = __importDefault(require("axios"));
// import urljoin from "url-join";
class MalRequest {
    constructor(config) {
        this.config = config;
    }
    getUrl() {
        return axios_1.default.getUri(this.config);
    }
    async call() {
        return new Promise((res, rej) => {
            (0, axios_1.default)(this.config)
                .then((r) => res(r.data))
                .catch((err) => rej(err));
        });
    }
}
exports.MalRequest = MalRequest;
exports.default = MalRequest;
//# sourceMappingURL=request.js.map