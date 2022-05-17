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
import { MalUser } from "./user";
import { MalAnime } from "./anime";
import { MalManga } from "./manga";
import { MalForum } from "./forum";
export * as User from "./user";
export * as Anime from "./anime";
export * as Manga from "./manga";
export * as Common from "./common";
export * as Forum from "./forum";
export { ResponseError, MalError } from "./request";
/**
 * - {@link fromJsonObj}
 * - {@link fromJsonString}
 * - {@link fromRefreshToken}
 * - {@link fromAuthorizationCode}
 * - Unofficial
 *  - {@link fromCredential}
 */
export declare class MalToken {
    token_type: string;
    expires_in: number | null | undefined;
    access_token: string;
    refresh_token: string;
    constructor(tokenType: string, accessToken: string, refreshToken: string, expiresIn?: number | null);
    /**
     * Get MalToken From Token JSON Object
     */
    static fromJsonObj(obj: {
        token_type: string;
        access_token: string;
        refresh_token: string;
        expires_in?: number | null;
    }): MalToken;
    /**
     * Get MalToken From Token JSON String
     */
    static fromJsonString(str: string): MalToken;
    /**
     * **Unstable!**
     * Get MalToken From Login And Password
     */
    static fromCredential(clientId: string, username: string, password: string): Promise<MalToken>;
    /**
     * Get MalToken From Refresh Token
     */
    static fromRefreshToken(clientId: string, refreshToken: string): Promise<MalToken>;
    /**
     * Get MalToken From PKCE Authorization Code
     */
    static fromAuthorizationCode(clientId: string, code: string, codeVerifier: string): Promise<MalToken>;
}
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
export declare class MalAcount {
    /** @hidden */
    private clientId;
    /** @hidden */
    malToken: MalToken | null;
    constructor(clientId: string, malToken: MalToken | null);
    /** @group Methods */
    user: MalUser;
    /** @group Methods */
    anime: MalAnime;
    /** @group Methods */
    manga: MalManga;
    /** @group Methods */
    forum: MalForum;
    refreshToken(): Promise<MalAcount>;
    getHttpHeaders(): {
        Authorization?: string | undefined;
        "X-MAL-CLIENT-ID": string;
    };
    stringifyToken(): string | null;
}
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
export declare class Auth {
    private clientId;
    constructor(clientId: string);
    loadToken(token: MalToken): MalAcount;
    getOAuthUrl(codeChallenge: string): string;
    authorizeWithRefreshToken(refreshToken: string): Promise<MalAcount>;
    authorizeWithCode(code: string, 
    /** it is actually a `code_verifier` but mal accepts code_challenge here instead */
    codeChallenge: string): Promise<MalAcount>;
    guestLogin(): Promise<MalAcount>;
    /**
     * Undocumented Endpoints, those can disperse at any moment
     */
    Unstable: {
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
        login: (username: string, password: string) => Promise<MalAcount>;
    };
}
export declare function auth(clientId?: string): Auth;
