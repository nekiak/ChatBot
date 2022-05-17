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
exports.listStatusFields = exports.MangaListStatusFields = exports.detailsFields = exports.MangaDetailsFields = exports.fields = exports.MangaFields = void 0;
const util_1 = require("../util");
const Anime = __importStar(require("../anime"));
/**
 * Manga For List
 *
 * ```ts
 * Mal.Manga.fields()
 *    .alternativeTitles()
 *    .startDate()
 *    .endDate()
 *    .synopsis()
 *    .mean()
 *    .rank()
 *    .popularity()
 *    .numListUsers()
 *    .numScoringUsers()
 *    .nsfw()
 *    .genres()
 *    .createdAt()
 *    .updatedAt()
 *    .mediaType()
 *    .status()
 *    .myListStatus(
 *       Mal.Manga.listStatusFields()
 *          .startDate()
 *          .finishDate()
 *          .priority()
 *          .numTimesReread()
 *          .rereadValue()
 *          .tags()
 *          .comments()
 *    )
 *    .numVolumes()
 *    .numChapters()
 *    .authors();
 * ```
 */
class MangaFields {
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
            // MangaForListFields
            .mediaType()
            .status()
            .myListStatus(listStatusFields().all())
            .numVolumes()
            .numChapters()
            .authors());
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
    // MangaForListFields
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
    numVolumes() {
        return this;
    }
    numChapters() {
        return this;
    }
    /**
     * authors{first_name,last_name}
     *
     * @param overrideFields - `It's recomended to left this one empty`
     * All fields are included by default since there are only 2 {first_name,last_name}
     * Keep in mind that override is not type safe
     */
    authors(overrideFields = ["first_name", "last_name"]) {
        this.fields["authors"] = `authors{${overrideFields.join()}}`;
        return this;
    }
}
__decorate([
    util_1.field
], MangaFields.prototype, "alternativeTitles", null);
__decorate([
    util_1.field
], MangaFields.prototype, "startDate", null);
__decorate([
    util_1.field
], MangaFields.prototype, "endDate", null);
__decorate([
    util_1.field
], MangaFields.prototype, "synopsis", null);
__decorate([
    util_1.field
], MangaFields.prototype, "mean", null);
__decorate([
    util_1.field
], MangaFields.prototype, "rank", null);
__decorate([
    util_1.field
], MangaFields.prototype, "popularity", null);
__decorate([
    util_1.field
], MangaFields.prototype, "numListUsers", null);
__decorate([
    util_1.field
], MangaFields.prototype, "numScoringUsers", null);
__decorate([
    util_1.field
], MangaFields.prototype, "nsfw", null);
__decorate([
    util_1.field
], MangaFields.prototype, "genres", null);
__decorate([
    util_1.field
], MangaFields.prototype, "createdAt", null);
__decorate([
    util_1.field
], MangaFields.prototype, "updatedAt", null);
__decorate([
    util_1.field
], MangaFields.prototype, "mediaType", null);
__decorate([
    util_1.field
], MangaFields.prototype, "status", null);
__decorate([
    util_1.field
], MangaFields.prototype, "numVolumes", null);
__decorate([
    util_1.field
], MangaFields.prototype, "numChapters", null);
exports.MangaFields = MangaFields;
MangaFields.prototype.toString = function () {
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
 * Manga For List
 */
function fields() {
    return new MangaFields();
}
exports.fields = fields;
/**
 * Manga For Details
 */
class MangaDetailsFields {
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
            // MangaForListFields
            .mediaType()
            .status()
            .myListStatus(listStatusFields().all())
            .numVolumes()
            .numChapters()
            .authors()
            // MangaForDetailsFields
            .pictures()
            .background()
            .relatedAnime(Anime.fields().all())
            .relatedManga(fields().all())
            .recommendations(fields().all())
            .serialization());
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
    // Manga For List Fields
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
    numVolumes() {
        return this;
    }
    numChapters() {
        return this;
    }
    /**
     * authors{first_name,last_name}
     *
     * @param overrideFields - `It's recomended to left this one empty`
     * All fields are included by default since there are only 2 {first_name,last_name}
     * Keep in mind that override is not type safe
     */
    authors(overrideFields = ["first_name", "last_name"]) {
        this.fields["authors"] = `authors{${overrideFields.join()}}`;
        return this;
    }
    //
    // Manga For Details Fields
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
    serialization() {
        return this;
    }
}
__decorate([
    util_1.field
], MangaDetailsFields.prototype, "alternativeTitles", null);
__decorate([
    util_1.field
], MangaDetailsFields.prototype, "startDate", null);
__decorate([
    util_1.field
], MangaDetailsFields.prototype, "endDate", null);
__decorate([
    util_1.field
], MangaDetailsFields.prototype, "synopsis", null);
__decorate([
    util_1.field
], MangaDetailsFields.prototype, "mean", null);
__decorate([
    util_1.field
], MangaDetailsFields.prototype, "rank", null);
__decorate([
    util_1.field
], MangaDetailsFields.prototype, "popularity", null);
__decorate([
    util_1.field
], MangaDetailsFields.prototype, "numListUsers", null);
__decorate([
    util_1.field
], MangaDetailsFields.prototype, "numScoringUsers", null);
__decorate([
    util_1.field
], MangaDetailsFields.prototype, "nsfw", null);
__decorate([
    util_1.field
], MangaDetailsFields.prototype, "genres", null);
__decorate([
    util_1.field
], MangaDetailsFields.prototype, "createdAt", null);
__decorate([
    util_1.field
], MangaDetailsFields.prototype, "updatedAt", null);
__decorate([
    util_1.field
], MangaDetailsFields.prototype, "mediaType", null);
__decorate([
    util_1.field
], MangaDetailsFields.prototype, "status", null);
__decorate([
    util_1.field
], MangaDetailsFields.prototype, "numVolumes", null);
__decorate([
    util_1.field
], MangaDetailsFields.prototype, "numChapters", null);
__decorate([
    util_1.field
], MangaDetailsFields.prototype, "pictures", null);
__decorate([
    util_1.field
], MangaDetailsFields.prototype, "background", null);
__decorate([
    util_1.field
], MangaDetailsFields.prototype, "serialization", null);
exports.MangaDetailsFields = MangaDetailsFields;
MangaDetailsFields.prototype.toString = function () {
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
 * Manga For Details
 */
function detailsFields() {
    return new MangaDetailsFields();
}
exports.detailsFields = detailsFields;
/**
 * Manga List Status
 */
class MangaListStatusFields {
    constructor() {
        this.fields = {};
        this.type = null;
    }
    /** Aka `I don't care mode` */
    all() {
        return this.startDate()
            .finishDate()
            .priority()
            .numTimesReread()
            .rereadValue()
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
    numTimesReread() {
        return this;
    }
    rereadValue() {
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
], MangaListStatusFields.prototype, "startDate", null);
__decorate([
    util_1.field
], MangaListStatusFields.prototype, "finishDate", null);
__decorate([
    util_1.field
], MangaListStatusFields.prototype, "priority", null);
__decorate([
    util_1.field
], MangaListStatusFields.prototype, "numTimesReread", null);
__decorate([
    util_1.field
], MangaListStatusFields.prototype, "rereadValue", null);
__decorate([
    util_1.field
], MangaListStatusFields.prototype, "tags", null);
__decorate([
    util_1.field
], MangaListStatusFields.prototype, "comments", null);
exports.MangaListStatusFields = MangaListStatusFields;
MangaListStatusFields.prototype.toString = function () {
    return Object.entries(this.fields).join(",");
};
/**
 * Manga List Status
 */
function listStatusFields() {
    return new MangaListStatusFields();
}
exports.listStatusFields = listStatusFields;
//# sourceMappingURL=fields.js.map