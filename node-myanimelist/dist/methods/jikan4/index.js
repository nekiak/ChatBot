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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jikanUrl = exports.jikanGet = exports.queryJoin = exports.watchPopularPromos = exports.watchRecentPromos = exports.watchPopularEpisodes = exports.watchRecentEpisodes = exports.topReviews = exports.topCharacters = exports.topPeople = exports.topManga = exports.topAnime = exports.seasonUpcoming = exports.seasonsList = exports.seasonNow = exports.season = exports.schedules = exports.mangaReviews = exports.animeReviews = exports.mangaRecommendations = exports.animeRecommendations = exports.randomUser = exports.randomPerson = exports.randomCharacters = exports.randomManga = exports.randomAnime = exports.producers = exports.Person = exports.personSearch = exports.person = exports.mangaGenres = exports.animeGenres = exports.Club = exports.clubSearch = exports.club = exports.Character = exports.characterSearch = exports.character = exports.Manga = exports.mangaSearch = exports.manga = exports.Anime = exports.animeSearch = exports.anime = exports.Types = void 0;
exports.Types = __importStar(require("./types"));
var anime_1 = require("./anime");
Object.defineProperty(exports, "anime", { enumerable: true, get: function () { return anime_1.anime; } });
Object.defineProperty(exports, "animeSearch", { enumerable: true, get: function () { return anime_1.animeSearch; } });
Object.defineProperty(exports, "Anime", { enumerable: true, get: function () { return anime_1.Anime; } });
var manga_1 = require("./manga");
Object.defineProperty(exports, "manga", { enumerable: true, get: function () { return manga_1.manga; } });
Object.defineProperty(exports, "mangaSearch", { enumerable: true, get: function () { return manga_1.mangaSearch; } });
Object.defineProperty(exports, "Manga", { enumerable: true, get: function () { return manga_1.Manga; } });
var character_1 = require("./character");
Object.defineProperty(exports, "character", { enumerable: true, get: function () { return character_1.character; } });
Object.defineProperty(exports, "characterSearch", { enumerable: true, get: function () { return character_1.characterSearch; } });
Object.defineProperty(exports, "Character", { enumerable: true, get: function () { return character_1.Character; } });
var club_1 = require("./club");
Object.defineProperty(exports, "club", { enumerable: true, get: function () { return club_1.club; } });
Object.defineProperty(exports, "clubSearch", { enumerable: true, get: function () { return club_1.clubSearch; } });
Object.defineProperty(exports, "Club", { enumerable: true, get: function () { return club_1.Club; } });
var genres_1 = require("./genres");
Object.defineProperty(exports, "animeGenres", { enumerable: true, get: function () { return genres_1.animeGenres; } });
Object.defineProperty(exports, "mangaGenres", { enumerable: true, get: function () { return genres_1.mangaGenres; } });
var person_1 = require("./person");
Object.defineProperty(exports, "person", { enumerable: true, get: function () { return person_1.person; } });
Object.defineProperty(exports, "personSearch", { enumerable: true, get: function () { return person_1.personSearch; } });
Object.defineProperty(exports, "Person", { enumerable: true, get: function () { return person_1.Person; } });
var producers_1 = require("./producers");
Object.defineProperty(exports, "producers", { enumerable: true, get: function () { return producers_1.producers; } });
var random_1 = require("./random");
Object.defineProperty(exports, "randomAnime", { enumerable: true, get: function () { return random_1.randomAnime; } });
Object.defineProperty(exports, "randomManga", { enumerable: true, get: function () { return random_1.randomManga; } });
Object.defineProperty(exports, "randomCharacters", { enumerable: true, get: function () { return random_1.randomCharacters; } });
Object.defineProperty(exports, "randomPerson", { enumerable: true, get: function () { return random_1.randomPerson; } });
Object.defineProperty(exports, "randomUser", { enumerable: true, get: function () { return random_1.randomUser; } });
var recommendations_1 = require("./recommendations");
Object.defineProperty(exports, "animeRecommendations", { enumerable: true, get: function () { return recommendations_1.animeRecommendations; } });
Object.defineProperty(exports, "mangaRecommendations", { enumerable: true, get: function () { return recommendations_1.mangaRecommendations; } });
var reviews_1 = require("./reviews");
Object.defineProperty(exports, "animeReviews", { enumerable: true, get: function () { return reviews_1.animeReviews; } });
Object.defineProperty(exports, "mangaReviews", { enumerable: true, get: function () { return reviews_1.mangaReviews; } });
var schedules_1 = require("./schedules");
Object.defineProperty(exports, "schedules", { enumerable: true, get: function () { return schedules_1.schedules; } });
var season_1 = require("./season");
Object.defineProperty(exports, "season", { enumerable: true, get: function () { return season_1.season; } });
Object.defineProperty(exports, "seasonNow", { enumerable: true, get: function () { return season_1.seasonNow; } });
Object.defineProperty(exports, "seasonsList", { enumerable: true, get: function () { return season_1.seasonsList; } });
Object.defineProperty(exports, "seasonUpcoming", { enumerable: true, get: function () { return season_1.seasonUpcoming; } });
var top_1 = require("./top");
Object.defineProperty(exports, "topAnime", { enumerable: true, get: function () { return top_1.topAnime; } });
Object.defineProperty(exports, "topManga", { enumerable: true, get: function () { return top_1.topManga; } });
Object.defineProperty(exports, "topPeople", { enumerable: true, get: function () { return top_1.topPeople; } });
Object.defineProperty(exports, "topCharacters", { enumerable: true, get: function () { return top_1.topCharacters; } });
Object.defineProperty(exports, "topReviews", { enumerable: true, get: function () { return top_1.topReviews; } });
var watch_1 = require("./watch");
Object.defineProperty(exports, "watchRecentEpisodes", { enumerable: true, get: function () { return watch_1.watchRecentEpisodes; } });
Object.defineProperty(exports, "watchPopularEpisodes", { enumerable: true, get: function () { return watch_1.watchPopularEpisodes; } });
Object.defineProperty(exports, "watchRecentPromos", { enumerable: true, get: function () { return watch_1.watchRecentPromos; } });
Object.defineProperty(exports, "watchPopularPromos", { enumerable: true, get: function () { return watch_1.watchPopularPromos; } });
const axios_1 = __importDefault(require("axios"));
/** @ignore */
function queryJoin(params) {
    const url_params = Object.entries(params)
        .filter(([_, value]) => value != null && value != undefined)
        .map(([key, value]) => `${key}=${value}`);
    if (url_params.length != 0) {
        return "?" + url_params.join("&");
    }
    else {
        return "";
    }
}
exports.queryJoin = queryJoin;
/** @ignore */
async function jikanGet(url) {
    const res = await axios_1.default.get(url);
    const data = res.data;
    return data;
}
exports.jikanGet = jikanGet;
exports.jikanUrl = `https://api.jikan.moe/v4`;
//# sourceMappingURL=index.js.map