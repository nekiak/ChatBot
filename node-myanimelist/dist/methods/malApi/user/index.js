"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MalUser = void 0;
const request_1 = __importDefault(require("../request"));
const api_1 = require("../api");
__exportStar(require("./fields"), exports);
__exportStar(require("./types"), exports);
class MalUser {
    constructor(acount) {
        this.acount = acount;
    }
    info(fields) {
        const config = {
            url: [api_1.apiUrl, "users", "@me"].join("/"),
            headers: this.acount.getHttpHeaders(),
            params: {},
        };
        if (fields)
            config.params.fields = fields.toString();
        return new request_1.default(config);
    }
    animelist(name = "@me", fields, listStatusFields, args) {
        const config = {
            url: [api_1.apiUrl, "users", name, "animelist"].join("/"),
            headers: this.acount.getHttpHeaders(),
            params: {
                fields: "",
            },
        };
        if (fields != null)
            config.params.fields += fields.toString();
        if (listStatusFields != null) {
            config.params.fields += `list_status{${listStatusFields.toString()}}`;
        }
        else {
            config.params.fields += "list_status";
        }
        if (args) {
            if (args.status != null)
                config.params.status = args.status;
            if (args.sort != null)
                config.params.sort = args.sort;
            if (args.limit != null)
                config.params.limit = args.limit;
            if (args.offset != null)
                config.params.offset = args.offset;
        }
        return new request_1.default(config);
    }
    mangalist(name = "@me", fields, listStatusFields, args) {
        const config = {
            url: [api_1.apiUrl, "users", name, "mangalist"].join("/"),
            headers: this.acount.getHttpHeaders(),
            params: {
                fields: "",
            },
        };
        if (fields != null)
            config.params.fields += fields.toString();
        if (listStatusFields != null) {
            config.params.fields += `list_status{${listStatusFields.toString()}}`;
        }
        else {
            config.params.fields += "list_status";
        }
        if (args) {
            if (args.status != null)
                config.params.status = args.status;
            if (args.sort != null)
                config.params.sort = args.sort;
            if (args.limit != null)
                config.params.limit = args.limit;
            if (args.offset != null)
                config.params.offset = args.offset;
        }
        return new request_1.default(config);
    }
}
exports.MalUser = MalUser;
//# sourceMappingURL=index.js.map