"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fields = exports.UserFields = void 0;
const util_1 = require("../util");
class UserFields {
    constructor() {
        this.fields = {};
        this.type = null;
    }
    /** Aka `I don't care mode` */
    all() {
        return this.gender().birthday().animeStatistics().timeZone().isSupporter();
    }
    gender() {
        return this;
    }
    birthday() {
        return this;
    }
    animeStatistics() {
        return this;
    }
    timeZone() {
        return this;
    }
    isSupporter() {
        return this;
    }
}
__decorate([
    util_1.field
], UserFields.prototype, "gender", null);
__decorate([
    util_1.field
], UserFields.prototype, "birthday", null);
__decorate([
    util_1.field
], UserFields.prototype, "animeStatistics", null);
__decorate([
    util_1.field
], UserFields.prototype, "timeZone", null);
__decorate([
    util_1.field
], UserFields.prototype, "isSupporter", null);
exports.UserFields = UserFields;
function fields() {
    return new UserFields();
}
exports.fields = fields;
//# sourceMappingURL=fields.js.map