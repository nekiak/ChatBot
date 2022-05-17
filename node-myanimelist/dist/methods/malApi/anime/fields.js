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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listStatusFields = exports.AnimeListStatusFields = exports.detailsFields = exports.AnimeDetailsFields = exports.fields = exports.AnimeFields = void 0;
const util_1 = require("../util");
const Manga = __importStar(require("../manga"));
/**
 * Anime For List
 */
class AnimeFields {
    constructor() {
        this.fields = {};
        this.type = null;
    }
    /** Aka `I don't care mode` */
    all() {
        return (this.alternativeTitles()
            .startDate()
            .endDate()
            .synopsis()
            .mean()
            .rank()
            .popularity()
            .numListUsers()
            .numScoringUsers()
            .nsfw()
            .genres()
            .createdAt()
            .updatedAt()
            // AnimeForListFields
            .mediaType()
            .status()
            .myListStatus(listStatusFields().all())
            .numEpisodes()
            .startSeason()
            .broadcast()
            .source()
            .averageEpisodeDuration()
            .rating()
            .studios());
    }
    alternativeTitles() {
        return this;
    }
    startDate() {
        return this;
    }
    endDate() {
        return this;
    }
    synopsis() {
        return this;
    }
    mean() {
        return this;
    }
    rank() {
        return this;
    }
    popularity() {
        return this;
    }
    numListUsers() {
        return this;
    }
    numScoringUsers() {
        return this;
    }
    nsfw() {
        return this;
    }
    genres() {
        return this;
    }
    createdAt() {
        return this;
    }
    updatedAt() {
        return this;
    }
    //
    // AnimeForListFields
    //
    mediaType() {
        return this;
    }
    status() {
        return this;
    }
    myListStatus(fields) {
        this.fields["my_list_status"] = fields ? fields.toString() : "";
        return this;
    }
    numEpisodes() {
        return this;
    }
    startSeason() {
        return this;
    }
    broadcast() {
        return this;
    }
    source() {
        return this;
    }
    averageEpisodeDuration() {
        return this;
    }
    rating() {
        return this;
    }
    studios() {
        return this;
    }
}
__decorate([
    util_1.field
], AnimeFields.prototype, "alternativeTitles", null);
__decorate([
    util_1.field
], AnimeFields.prototype, "startDate", null);
__decorate([
    util_1.field
], AnimeFields.prototype, "endDate", null);
__decorate([
    util_1.field
], AnimeFields.prototype, "synopsis", null);
__decorate([
    util_1.field
], AnimeFields.prototype, "mean", null);
__decorate([
    util_1.field
], AnimeFields.prototype, "rank", null);
__decorate([
    util_1.field
], AnimeFields.prototype, "popularity", null);
__decorate([
    util_1.field
], AnimeFields.prototype, "numListUsers", null);
__decorate([
    util_1.field
], AnimeFields.prototype, "numScoringUsers", null);
__decorate([
    util_1.field
], AnimeFields.prototype, "nsfw", null);
__decorate([
    util_1.field
], AnimeFields.prototype, "genres", null);
__decorate([
    util_1.field
], AnimeFields.prototype, "createdAt", null);
__decorate([
    util_1.field
], AnimeFields.prototype, "updatedAt", null);
__decorate([
    util_1.field
], AnimeFields.prototype, "mediaType", null);
__decorate([
    util_1.field
], AnimeFields.prototype, "status", null);
__decorate([
    util_1.field
], AnimeFields.prototype, "numEpisodes", null);
__decorate([
    util_1.field
], AnimeFields.prototype, "startSeason", null);
__decorate([
    util_1.field
], AnimeFields.prototype, "broadcast", null);
__decorate([
    util_1.field
], AnimeFields.prototype, "source", null);
__decorate([
    util_1.field
], AnimeFields.prototype, "averageEpisodeDuration", null);
__decorate([
    util_1.field
], AnimeFields.prototype, "rating", null);
__decorate([
    util_1.field
], AnimeFields.prototype, "studios", null);
exports.AnimeFields = AnimeFields;
AnimeFields.prototype.toString = function () {
    return Object.entries(this.fields)
        .map(([k, v]) => {
        if (typeof v === "boolean")
            return k;
        else if (typeof v === "string")
            return `${k}{${v}}`;
    })
        .join(",");
};
/**
 * Anime For List
 */
function fields() {
    return new AnimeFields();
}
exports.fields = fields;
/**
 * Anime For Details
 */
class AnimeDetailsFields {
    constructor() {
        this.fields = {};
        this.type = null;
    }
    /** Aka `I don't care mode` */
    all() {
        return (this.alternativeTitles()
            .startDate()
            .endDate()
            .synopsis()
            .mean()
            .rank()
            .popularity()
            .numListUsers()
            .numScoringUsers()
            .nsfw()
            .genres()
            .createdAt()
            .updatedAt()
            // AnimeForListFields
            .mediaType()
            .status()
            .myListStatus(listStatusFields().all())
            .numEpisodes()
            .startSeason()
            .broadcast()
            .source()
            .averageEpisodeDuration()
            .rating()
            .studios()
            // AnimeForDetailsFields
            .pictures()
            .background()
            .relatedAnime(fields().all())
            .relatedManga(Manga.fields())
            .recommendations(fields().all())
            .statistics());
    }
    //
    // Work For List Fields
    //
    alternativeTitles() {
        return this;
    }
    startDate() {
        return this;
    }
    endDate() {
        return this;
    }
    synopsis() {
        return this;
    }
    mean() {
        return this;
    }
    rank() {
        return this;
    }
    popularity() {
        return this;
    }
    numListUsers() {
        return this;
    }
    numScoringUsers() {
        return this;
    }
    nsfw() {
        return this;
    }
    genres() {
        return this;
    }
    createdAt() {
        return this;
    }
    updatedAt() {
        return this;
    }
    //
    // Anime For List Fields
    //
    mediaType() {
        return this;
    }
    status() {
        return this;
    }
    myListStatus(fields) {
        this.fields["my_list_status"] = fields ? fields.toString() : "";
        return this;
    }
    numEpisodes() {
        return this;
    }
    startSeason() {
        return this;
    }
    broadcast() {
        return this;
    }
    source() {
        return this;
    }
    averageEpisodeDuration() {
        return this;
    }
    rating() {
        return this;
    }
    studios() {
        return this;
    }
    //
    // Anime For Details Fields
    //
    pictures() {
        return this;
    }
    background() {
        return this;
    }
    relatedAnime(fields) {
        this.fields["related_anime"] = fields ? fields.toString() : "";
        return this;
    }
    relatedManga(fields) {
        this.fields["related_manga"] = fields ? fields.toString() : "";
        return this;
    }
    recommendations(fields) {
        this.fields["recommendations"] = fields ? fields.toString() : "";
        return this;
    }
    statistics() {
        return this;
    }
}
__decorate([
    util_1.field
], AnimeDetailsFields.prototype, "alternativeTitles", null);
__decorate([
    util_1.field
], AnimeDetailsFields.prototype, "startDate", null);
__decorate([
    util_1.field
], AnimeDetailsFields.prototype, "endDate", null);
__decorate([
    util_1.field
], AnimeDetailsFields.prototype, "synopsis", null);
__decorate([
    util_1.field
], AnimeDetailsFields.prototype, "mean", null);
__decorate([
    util_1.field
], AnimeDetailsFields.prototype, "rank", null);
__decorate([
    util_1.field
], AnimeDetailsFields.prototype, "popularity", null);
__decorate([
    util_1.field
], AnimeDetailsFields.prototype, "numListUsers", null);
__decorate([
    util_1.field
], AnimeDetailsFields.prototype, "numScoringUsers", null);
__decorate([
    util_1.field
], AnimeDetailsFields.prototype, "nsfw", null);
__decorate([
    util_1.field
], AnimeDetailsFields.prototype, "genres", null);
__decorate([
    util_1.field
], AnimeDetailsFields.prototype, "createdAt", null);
__decorate([
    util_1.field
], AnimeDetailsFields.prototype, "updatedAt", null);
__decorate([
    util_1.field
], AnimeDetailsFields.prototype, "mediaType", null);
__decorate([
    util_1.field
], AnimeDetailsFields.prototype, "status", null);
__decorate([
    util_1.field
], AnimeDetailsFields.prototype, "numEpisodes", null);
__decorate([
    util_1.field
], AnimeDetailsFields.prototype, "startSeason", null);
__decorate([
    util_1.field
], AnimeDetailsFields.prototype, "broadcast", null);
__decorate([
    util_1.field
], AnimeDetailsFields.prototype, "source", null);
__decorate([
    util_1.field
], AnimeDetailsFields.prototype, "averageEpisodeDuration", null);
__decorate([
    util_1.field
], AnimeDetailsFields.prototype, "rating", null);
__decorate([
    util_1.field
], AnimeDetailsFields.prototype, "studios", null);
__decorate([
    util_1.field
], AnimeDetailsFields.prototype, "pictures", null);
__decorate([
    util_1.field
], AnimeDetailsFields.prototype, "background", null);
__decorate([
    util_1.field
], AnimeDetailsFields.prototype, "statistics", null);
exports.AnimeDetailsFields = AnimeDetailsFields;
AnimeDetailsFields.prototype.toString = function () {
    return Object.entries(this.fields)
        .map(([k, v]) => {
        if (typeof v === "boolean")
            return k;
        else if (typeof v === "string")
            return `${k}{${v}}`;
    })
        .join(",");
};
/**
 * Anime For Details
 */
function detailsFields() {
    return new AnimeDetailsFields();
}
exports.detailsFields = detailsFields;
/**
 * Anime List Status
 */
class AnimeListStatusFields {
    constructor() {
        this.fields = {};
        this.type = null;
    }
    /** Aka `I don't care mode` */
    all() {
        return this.startDate()
            .finishDate()
            .priority()
            .numTimesRewatched()
            .rewatchValue()
            .tags()
            .comments();
    }
    startDate() {
        return this;
    }
    finishDate() {
        return this;
    }
    priority() {
        return this;
    }
    numTimesRewatched() {
        return this;
    }
    rewatchValue() {
        return this;
    }
    tags() {
        return this;
    }
    comments() {
        return this;
    }
}
__decorate([
    util_1.field
], AnimeListStatusFields.prototype, "startDate", null);
__decorate([
    util_1.field
], AnimeListStatusFields.prototype, "finishDate", null);
__decorate([
    util_1.field
], AnimeListStatusFields.prototype, "priority", null);
__decorate([
    util_1.field
], AnimeListStatusFields.prototype, "numTimesRewatched", null);
__decorate([
    util_1.field
], AnimeListStatusFields.prototype, "rewatchValue", null);
__decorate([
    util_1.field
], AnimeListStatusFields.prototype, "tags", null);
__decorate([
    util_1.field
], AnimeListStatusFields.prototype, "comments", null);
exports.AnimeListStatusFields = AnimeListStatusFields;
AnimeListStatusFields.prototype.toString = function () {
    return Object.entries(this.fields).join(",");
};
/**
 * Anime List Status
 */
function listStatusFields() {
    return new AnimeListStatusFields();
}
exports.listStatusFields = listStatusFields;
//# sourceMappingURL=fields.js.map