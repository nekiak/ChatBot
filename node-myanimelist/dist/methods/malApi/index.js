"use strict";
/**
 * # MalAPI
 * Official MyAnimeList API
 *
 * Import:
 * ```ts
 * import { Mal } from "node-myanimelist";
 * ```
 * Initialize api ({@link Auth})
 * ```ts
 * const auth = Mal.auth("app_id")
 * ```
 * Use initialized api ({@link Auth}) to login:
 * - Unoffical way to login (not recomended) {@link Auth.Unstable.login}
 * ```ts
 * const acount = await auth.Unstable.login("username","password");
 * ```
 * - Offical way to login (recomended) {@link Auth.authorizeWithCode}
 *  - Generate pkce (in this example `pkce-challenge` npm package is used)
 *  ```ts
 *  import pkceChallenge from "pkce-challenge";
 *  const pkce = pkceChallenge();
 *  ```
 *  - Get OAuth url {@link Auth.getOAuthUrl}
 *  ```ts
 *  const url = auth.getOAuthUrl(pkce.code_challenge);
 *  ```
 *  - Open returned url, accept oauth and use returned code to authorize {@link Auth.authorizeWithCode}
 *  ```ts
 *  const acount = await auth.authorizeWithCode(code, code_challenge)
 *  ```
 *
 * You probably want to save acount somewhere, you can just call ```acount.stringifyToken()``` to get json
 *
 * Later you can load it using:
 * ```ts
 * const token = Mal.MalToken.fromJsonString(jsonStr);
 * const acount = auth.loadToken(token);
 * ```
 * If more time has passed you can also refresh token instead of loading last one
 * ```ts
 * const acount = await auth.authorizeWithRefreshToken(json.refresh_token);
 * ```
 * Finally you can use {@link MalAcount}
 * ```ts
 * let search = await acount.manga.search(
 *    "Sakurasou",
 *    Mal.Manga.fields().all()
 * ).call();
 * ```
 *
 * @packageDocumentation
 */
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
exports.auth = exports.Auth = exports.MalAcount = exports.MalToken = exports.Forum = exports.Common = exports.Manga = exports.Anime = exports.User = void 0;
/** */
const request_1 = __importDefault(require("./request"));
const api_1 = require("./api");
const util_1 = require("./util");
const user_1 = require("./user");
const anime_1 = require("./anime");
const manga_1 = require("./manga");
const forum_1 = require("./forum");
exports.User = __importStar(require("./user"));
exports.Anime = __importStar(require("./anime"));
exports.Manga = __importStar(require("./manga"));
exports.Common = __importStar(require("./common"));
exports.Forum = __importStar(require("./forum"));
/**
 * - {@link fromJsonObj}
 * - {@link fromJsonString}
 * - {@link fromRefreshToken}
 * - {@link fromAuthorizationCode}
 * - Unofficial
 *  - {@link fromCredential}
 */
class MalToken {
    constructor(tokenType, accessToken, refreshToken, expiresIn) {
        this.token_type = tokenType;
        this.expires_in = expiresIn;
        this.access_token = accessToken;
        this.refresh_token = refreshToken;
    }
    /**
     * Get MalToken From Token JSON Object
     */
    static fromJsonObj(obj) {
        return new MalToken(obj.token_type, obj.access_token, obj.refresh_token, obj.expires_in);
    }
    /**
     * Get MalToken From Token JSON String
     */
    static fromJsonString(str) {
        let obj = JSON.parse(str);
        return new MalToken(obj.token_type, obj.access_token, obj.refresh_token, obj.expires_in);
    }
    /**
     * **Unstable!**
     * Get MalToken From Login And Password
     */
    static async fromCredential(clientId, username, password) {
        const config = {
            method: "POST",
            url: [api_1.apiUrl, "auth", "token"].join("/"),
            headers: {
                "content-type": "application/x-www-form-urlencoded",
            },
            data: (0, util_1.queryEncode)({
                client_id: clientId,
                username,
                password,
                grant_type: "password",
            }),
        };
        const req = new request_1.default(config);
        const token = await req.call();
        return new MalToken(token.token_type, token.access_token, token.refresh_token, token.expires_in);
    }
    /**
     * Get MalToken From Refresh Token
     */
    static async fromRefreshToken(clientId, refreshToken) {
        const config = {
            method: "POST",
            url: [api_1.secondaryApiUrl, "oauth2", "token"].join("/"),
            headers: {
                "content-type": "application/x-www-form-urlencoded",
            },
            data: (0, util_1.queryEncode)({
                client_id: clientId,
                refresh_token: refreshToken,
                grant_type: "refresh_token",
            }),
        };
        const req = new request_1.default(config);
        const token = await req.call();
        return new MalToken(token.token_type, token.access_token, token.refresh_token, token.expires_in);
    }
    /**
     * Get MalToken From PKCE Authorization Code
     */
    static async fromAuthorizationCode(clientId, code, codeVerifier) {
        const config = {
            method: "POST",
            url: [api_1.secondaryApiUrl, "oauth2", "token"].join("/"),
            headers: {
                "content-type": "application/x-www-form-urlencoded",
            },
            data: (0, util_1.queryEncode)({
                client_id: clientId,
                grant_type: "authorization_code",
                code,
                code_verifier: codeVerifier,
            }),
        };
        const req = new request_1.default(config);
        const token = await req.call();
        return new MalToken(token.token_type, token.access_token, token.refresh_token, token.expires_in);
    }
}
exports.MalToken = MalToken;
/**
 * - {@link user} ({@link MalUser})
 *    - {@link MalUser.animelist}
 *    - {@link MalUser.mangalist}
 *    - {@link MalUser.info}
 * - {@link anime} ({@link MalAnime})
 *    - {@link MalAnime.search}
 *    - {@link MalAnime.details}
 *    - {@link MalAnime.ranking}
 *    - {@link MalAnime.seasonal}
 *    - {@link MalAnime.suggested}
 *    - {@link MalAnime.updateMyAnime}
 *    - {@link MalAnime.deleteMyAnime}
 * - {@link manga} ({@link MalManga})
 *    - {@link MalManga.search}
 *    - {@link MalManga.details}
 *    - {@link MalManga.ranking}
 *    - {@link MalManga.updateMyManga}
 *    - {@link MalManga.deleteMyManga}
 * - {@link forum} ({@link MalForum})
 *    - {@link MalForum.boards}
 *    - {@link MalForum.details}
 *    - {@link MalForum.topics}
 */
class MalAcount {
    constructor(clientId, malToken) {
        /** @group Methods */
        this.user = new user_1.MalUser(this);
        /** @group Methods */
        this.anime = new anime_1.MalAnime(this);
        /** @group Methods */
        this.manga = new manga_1.MalManga(this);
        /** @group Methods */
        this.forum = new forum_1.MalForum(this);
        this.clientId = clientId;
        this.malToken = malToken;
    }
    async refreshToken() {
        if (this.malToken !== null) {
            this.malToken = await MalToken.fromRefreshToken(this.clientId, this.malToken.refresh_token);
        }
        return this;
    }
    getHttpHeaders() {
        const headers = {
            "X-MAL-CLIENT-ID": this.clientId,
        };
        if (this.malToken !== null) {
            headers["Authorization"] = `Bearer ${this.malToken["access_token"]}`;
        }
        return headers;
    }
    stringifyToken() {
        if (this.malToken !== null) {
            return JSON.stringify(this.malToken);
        }
        else {
            return null;
        }
    }
}
exports.MalAcount = MalAcount;
/**
 * Initialize {@link Auth}:
 * ```ts
 * const auth = Mal.auth("app_id")
 * ```
 * Use initialized {@link Auth} to login:
 * - Unoffical way to login (not recomended) {@link Auth.Unstable.login}
 * ```ts
 * const acount = await auth.Unstable.login("username","password");
 * ```
 * - Offical way to login (recomended) {@link Auth.authorizeWithCode}
 *  - Generate pkce (in this example `pkce-challenge` npm package is used)
 *  ```ts
 *  import pkceChallenge from "pkce-challenge";
 *  const pkce = pkceChallenge();
 *  ```
 *  - Get OAuth url {@link Auth.getOAuthUrl}
 *  ```ts
 *  const url = auth.getOAuthUrl(pkce.code_challenge);
 *  ```
 *  - Open returned url, accept oauth and use returned code to authorize {@link Auth.authorizeWithCode}
 *  ```ts
 *  const acount = await auth.authorizeWithCode(code, code_challenge)
 *  ```
 *
 * You probably want to save acount somewhere, you can just call ```acount.stringifyToken()``` to get json
 *
 * Later you can load it using:
 * ```ts
 * const token = Mal.MalToken.fromJsonString(jsonStr);
 * const acount = auth.loadToken(token);
 * ```
 * If more time has passed you can also refresh token instead of loading last one
 * ```ts
 * const acount = await auth.authorizeWithRefreshToken(json.refresh_token);
 * ```
 *
 * Done, you can use {@link MalAcount}
 */
class Auth {
    constructor(clientId) {
        /**
         * Undocumented Endpoints, those can disperse at any moment
         */
        this.Unstable = {
            /**
             * ### Login to API using login and password `(Unstable!)`
             *
             * This endpoint makes the whole idea of OAuth API pointless, so it will probably be removed soonish (EDIT: 4 years have passed it's still here)
             *
             * Example of paradox related to this endpoint is that you can use someone's app id to get access to API.
             * So basically it allows you to go around API request limits
             *
             * `(works reliably since 2018)`
             * `(2022 still works fine!)
             */
            login: async (username, password) => {
                const malToken = await MalToken.fromCredential(this.clientId, username, password);
                return new MalAcount(this.clientId, malToken);
            },
        };
        this.clientId = clientId;
    }
    loadToken(token) {
        return new MalAcount(this.clientId, token);
    }
    getOAuthUrl(codeChallenge) {
        const base = "https://myanimelist.net/v1/oauth2";
        return `${base}/authorize?response_type=code&client_id=${this.clientId}&code_challenge_method=plain&code_challenge=${codeChallenge}`;
    }
    async authorizeWithRefreshToken(refreshToken) {
        const malToken = await MalToken.fromRefreshToken(this.clientId, refreshToken);
        return new MalAcount(this.clientId, malToken);
    }
    async authorizeWithCode(code, 
    /** it is actually a `code_verifier` but mal accepts code_challenge here instead */
    codeChallenge) {
        const malToken = await MalToken.fromAuthorizationCode(this.clientId, code, codeChallenge);
        return new MalAcount(this.clientId, malToken);
    }
    async guestLogin() {
        return new MalAcount(this.clientId, null);
    }
}
exports.Auth = Auth;
function auth(clientId = "6114d00ca681b7701d1e15fe11a4987e") {
    return new Auth(clientId);
}
exports.auth = auth;
//# sourceMappingURL=index.js.map