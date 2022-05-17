export declare type AnimeEpisodes = {
    data: {
        mal_id?: number;
        url?: string;
        title?: string;
        title_japanese?: string;
        title_romanji?: string;
        duration?: number;
        aired?: string;
        filler?: boolean;
        recap?: boolean;
        forum_url?: string;
    }[];
} & Pagination;
export declare type AnimeNews = Pagination & News;
export declare type CharacterPictures = {
    data: {
        image_url?: string;
        large_image_url?: string;
    }[];
};
export declare type ClubMember = {
    data: {
        username?: string;
        url?: string;
        image_url?: string;
    }[];
};
export declare type MangaNews = Pagination & News;
export declare type MangaPictures = {
    data: {
        image_url?: string;
        large_image_url?: string;
    }[];
};
export declare type PersonPictures = {
    data: {
        image_url?: string;
        large_image_url?: string;
    }[];
};
export declare type Random = {
    data: (Anime | Manga | Character | Person)[];
};
export declare type Schedules = {
    data: Anime[];
} & Pagination;
export declare type SearchQuerySort = string;
export declare type UsersSearch = {
    data: {}[];
} & Pagination;
export declare type Seasons = {
    data: {
        year?: number;
        seasons: string[];
    }[];
};
export declare type ReviewsCollection = {
    data: (AnimeReview | MangaReview)[];
};
export declare type UserFriends = {
    data: ({
        user: UserMeta;
    } & {
        last_online?: string;
        friends_since?: string;
    })[];
} & Pagination;
export declare type UserClubs = {
    data: {
        mal_id?: number;
        name?: string;
        url?: string;
    }[];
} & Pagination;
export declare type WatchEpisodes = {
    data: {
        entry: AnimeMeta;
        episodes: {
            mal_id?: string;
            url?: string;
            title?: string;
            premium?: boolean;
        }[];
        region_locked?: boolean;
    }[];
} & Pagination;
export declare type WatchPromos = Pagination & {
    title?: string;
} & {
    data: {
        entry: AnimeMeta;
        trailer: Trailer[];
    }[];
};
export declare type AnimeSearchQueryType = string;
export declare type AnimeSearchQueryStatus = string;
export declare type AnimeSearchQueryRating = string;
export declare type AnimeSearchQueryOrderby = string;
export declare type CharactersSearchQueryOrderby = string;
export declare type ClubSearchQueryType = string;
export declare type ClubSearchQueryCategory = string;
export declare type ClubSearchQueryOrderby = string;
export declare type MagazinesQueryOrderby = string;
export declare type MangaSearchQueryType = string;
export declare type MangaSearchQueryStatus = string;
export declare type MangaSearchQueryOrderby = string;
export declare type PeopleSearchQueryOrderby = string;
export declare type ProducersQueryOrderby = string;
export declare type UsersSearchQueryGender = string;
export declare type AnimeCharacters = {
    data: {
        character: {
            mal_id?: number;
            url?: string;
            images: CharacterImages;
            name?: string;
        };
        role?: string;
        voice_actors: {
            person: {
                mal_id?: number;
                url?: string;
                images: PeopleImages;
                name?: string;
            };
            language?: string;
        }[];
    }[];
};
export declare type AnimeSearch = {
    data: Anime[];
} & Pagination;
export declare type AnimeEpisode = {
    data: {
        mal_id?: number;
        url?: string;
        title?: string;
        title_japanese?: string;
        title_romanji?: string;
        duration?: number;
        aired?: string;
        filler?: boolean;
        recap?: boolean;
        synopsis?: string;
    };
};
export declare type AnimeRelations = {
    data: {
        relation?: string;
        entry: MalUrl[];
    }[];
};
export declare type ManagaRelations = {
    data: {
        relation?: string;
        entry: MalUrl[];
    }[];
};
export declare type Anime = {
    mal_id?: number;
    url?: string;
    images: AnimeImages;
    trailer: TrailerBase;
    title?: string;
    title_english?: string;
    title_japanese?: string;
    title_synonyms: string[];
    type?: string;
    source?: string;
    episodes?: number;
    status?: string;
    airing?: boolean;
    aired: Daterange;
    duration?: string;
    rating?: string;
    score: number;
    scored_by?: number;
    rank?: number;
    popularity?: number;
    members?: number;
    favorites?: number;
    synopsis?: string;
    background?: string;
    season?: string;
    year?: number;
    broadcast: Broadcast;
    producers: MalUrl[];
    licensors: MalUrl[];
    studios: MalUrl[];
    genres: MalUrl[];
    explicit_genres: MalUrl[];
    themes: MalUrl[];
    demographics: MalUrl[];
};
export declare type AnimeStaff = {
    data: {
        person: {
            mal_id?: number;
            url?: string;
            images: PeopleImages;
            name?: string;
        };
        positions: string[];
    }[];
};
export declare type AnimeStatistics = {
    data: {
        watching?: number;
        completed?: number;
        on_hold?: number;
        dropped?: number;
        plan_to_watch?: number;
        total?: number;
        scores: {
            score: number;
            votes?: number;
            percentage?: number;
        }[];
    };
};
export declare type AnimeThemes = {
    data: {
        openings: string[];
        endings: string[];
    };
};
export declare type AnimeVideos = {
    data: {
        promos: {
            title?: string;
            trailer: Trailer;
        }[];
        episodes: {
            mal_id?: number;
            url?: string;
            title?: string;
            episode?: string;
            images: CommonImages;
        }[];
    };
};
export declare type CharacterAnime = {
    data: {
        role?: string;
        anime: AnimeMeta;
    }[];
};
export declare type CharactersSearch = {
    data: Character[];
} & Pagination;
export declare type CharacterManga = {
    data: {
        role?: string;
        manga: MangaMeta;
    }[];
};
export declare type Character = {
    mal_id?: number;
    url?: string;
    images: CharacterImages;
    name?: string;
    name_kanji?: string;
    nicknames: string[];
    favorites?: number;
    about?: string;
    animeography: ({
        image_url?: string;
        role?: string;
    } & MalUrl)[];
    mangaography: ({
        image_url?: string;
        role?: string;
    } & MalUrl)[];
    voice_actors: ({
        image_url?: string;
        language?: string;
    } & MalUrl)[];
};
export declare type CharacterVoiceActors = {
    data: {
        language?: string;
        person: PersonMeta;
    }[];
};
export declare type ClubsSearch = {
    data: Club[];
} & Pagination;
export declare type ClubRelations = {
    data: {
        anime: MalUrl[];
        manga: MalUrl[];
        characters: MalUrl[];
    };
};
export declare type Club = {
    data: {
        mal_id?: number;
        name?: string;
        url?: string;
        images: CommonImages;
        members?: number;
        category?: string;
        created?: string;
        access?: string;
    };
};
export declare type ClubStaff = {
    data: {
        url?: string;
        username?: string;
    }[];
};
export declare type Trailer = TrailerBase & TrailerImages;
export declare type TrailerBase = {
    youtube_id?: string;
    url?: string;
    embed_url?: string;
};
export declare type TrailerImages = {
    images: {
        default_image_url?: string;
        small_image_url?: string;
        medium_image_url?: string;
        large_image_url?: string;
        maximum_image_url?: string;
    };
};
export declare type Daterange = {
    from?: string;
    to?: string;
    prop: {
        from: {
            day?: number;
            month?: number;
            year?: number;
        };
        to: {
            day?: number;
            month?: number;
            year?: number;
        };
        string?: string;
    };
};
export declare type Broadcast = {
    day?: string;
    time?: string;
    timezone?: string;
    string?: string;
};
export declare type MalUrl = {
    mal_id?: number;
    type?: string;
    name?: string;
    url?: string;
};
export declare type MalUrl2 = {
    mal_id?: number;
    type?: string;
    title?: string;
    url?: string;
};
export declare type EntryMeta = {
    mal_id?: number;
    url?: string;
    image_url?: string;
    name?: string;
};
export declare type Relation = {
    relation?: string;
    entry: MalUrl[];
};
export declare type Pagination = {
    pagination: {
        last_visible_page?: number;
        has_next_page?: boolean;
    };
};
export declare type UserMeta = {
    username?: string;
    url?: string;
    images: UserImages;
};
export declare type UserById = {
    data: {
        url?: string;
        username?: string;
    };
};
export declare type UserImages = {
    jpg: {
        image_url?: string;
    };
    webp: {
        image_url?: string;
    };
};
export declare type AnimeMeta = {
    mal_id?: number;
    url?: string;
    images: AnimeImages;
    title?: string;
};
export declare type MangaMeta = {
    mal_id?: number;
    url?: string;
    images: MangaImages;
    title?: string;
};
export declare type CharacterMeta = {
    mal_id?: number;
    url?: string;
    images: CharacterImages;
    name?: string;
};
export declare type PersonMeta = {
    mal_id?: number;
    url?: string;
    images: PeopleImages;
    name?: string;
};
export declare type AnimeImages = {
    jpg: {
        image_url?: string;
        small_image_url?: string;
        large_image_url?: string;
    };
    webp: {
        image_url?: string;
        small_image_url?: string;
        large_image_url?: string;
    };
};
export declare type MangaImages = {
    jpg: {
        image_url?: string;
        small_image_url?: string;
        large_image_url?: string;
    };
    webp: {
        image_url?: string;
        small_image_url?: string;
        large_image_url?: string;
    };
};
export declare type CharacterImages = {
    jpg: {
        image_url?: string;
        small_image_url?: string;
    };
    webp: {
        image_url?: string;
        small_image_url?: string;
    };
};
export declare type PeopleImages = {
    jpg: {
        image_url?: string;
    };
};
export declare type CommonImages = {
    jpg: {
        image_url?: string;
    };
};
export declare type ExternalLinks = {
    data: {
        name?: string;
        url?: string;
    }[];
};
export declare type Forum = {
    data: {
        mal_id?: number;
        url?: string;
        title?: string;
        date?: string;
        author_username?: string;
        author_url?: string;
        comments?: number;
        last_comment: {
            url?: string;
            author_username?: string;
            author_url?: string;
            date?: string;
        };
    }[];
};
export declare type Genres = {
    data: Genre[];
};
export declare type GenreQueryFilter = string;
export declare type Genre = {
    mal_id?: number;
    name?: string;
    url?: string;
    count?: number;
};
export declare type Magazines = {
    data: Magazine[];
} & Pagination;
export declare type Magazine = {
    mal_id?: number;
    name?: string;
    url?: string;
    count?: number;
};
export declare type MangaCharacters = {
    data: {
        character: CharacterMeta;
        role?: string;
    }[];
};
export declare type MangaSearch = {
    data: Manga[];
} & Pagination;
export declare type Manga = {
    mal_id?: number;
    url?: string;
    images: MangaImages;
    title?: string;
    title_english?: string;
    title_japanese?: string;
    title_synonyms: string[];
    type?: string;
    chapters?: number;
    volumnes?: number;
    status?: string;
    publishing?: boolean;
    published: Daterange;
    score: number;
    scored_by?: number;
    rank?: number;
    popularity?: number;
    members?: number;
    favorites?: number;
    synopsis?: string;
    background?: string;
    authors: MalUrl[];
    serializations: MalUrl[];
    genres: MalUrl[];
    explicit_genres: MalUrl[];
    themes: MalUrl[];
    demographics: MalUrl[];
};
export declare type MangaStatistics = {
    data: {
        reading?: number;
        completed?: number;
        on_hold?: number;
        dropped?: number;
        plan_to_read?: number;
        total?: number;
        scores: {
            score: number;
            votes?: number;
            percentage?: number;
        }[];
    };
};
export declare type Moreinfo = {
    data: {
        moreinfo?: string;
    };
};
export declare type News = {
    data: {
        mal_id?: number;
        url?: string;
        title?: string;
        date?: string;
        author_username?: string;
        author_url?: string;
        forum_url?: string;
        images: CommonImages;
        comments?: number;
        excerpt?: string;
    }[];
};
export declare type PersonAnime = {
    data: {
        position?: string;
        anime: AnimeMeta;
    }[];
};
export declare type PeopleSearch = {
    data: Person[];
} & Pagination;
export declare type PersonManga = {
    data: {
        position?: string;
        manga: MangaMeta;
    }[];
};
export declare type Person = {
    mal_id?: number;
    url?: string;
    website_url?: string;
    images: PeopleImages;
    name?: string;
    given_name?: string;
    family_name?: string;
    alternate_names: string[];
    birthday?: string;
    favorites?: number;
    about?: string;
};
export declare type PersonVoiceActingRoles = {
    data: {
        role?: string;
        anime: AnimeMeta;
        character: CharacterMeta;
    }[];
};
export declare type Pictures = {
    data: {
        images: AnimeImages;
    }[];
};
export declare type PicturesVariants = {
    data: {
        images: CommonImages;
    }[];
};
export declare type Producers = {
    data: Producer[];
} & Pagination;
export declare type Producer = {
    mal_id?: number;
    name?: string;
    url?: string;
    count?: number;
};
export declare type UserAbout = {
    data: {
        about?: string;
    }[];
};
export declare type UserFavorites = {
    data: {
        anime: ({
            type?: string;
            start_year?: number;
        } & AnimeMeta)[];
        manga: ({
            type?: string;
            start_year?: number;
        } & MangaMeta)[];
        characters: (MalUrl2 & CharacterMeta)[];
        people: CharacterMeta[];
    };
};
export declare type UserHistory = {
    data: {}[];
};
export declare type History = {
    entry: MalUrl;
    increment?: number;
    date?: string;
};
export declare type UserUpdates = {
    data: {
        anime: ({
            entry: AnimeMeta;
        } & {
            score: number;
            status?: string;
            episodes_seen?: number;
            episodes_total?: number;
            date?: string;
        })[];
        manga: ({
            entry: MangaMeta;
        } & {
            score: number;
            status?: string;
            chapters_read?: number;
            chapters_total?: number;
            volumes_read?: number;
            volumes_total?: number;
            date?: string;
        })[];
    };
};
export declare type UserProfile = {
    mal_id?: number;
    username?: string;
    url?: string;
    images: UserImages;
    last_online?: string;
    gender?: string;
    birthday?: string;
    location?: string;
    joined?: string;
};
export declare type UsersTemp = {
    data: {
        mal_id?: number;
        username?: string;
        url?: string;
        images: {
            jpg: {
                image_url?: string;
            };
            webp: {
                image_url?: string;
            };
        };
        last_online?: string;
        gender?: string;
        birthday?: string;
        location?: string;
        joined?: string;
        anime_stats: {
            days_watched?: number;
            mean_score?: number;
            watching?: number;
            completed?: number;
            on_hold?: number;
            dropped?: number;
            plan_to_watch?: number;
            total_entries?: number;
            rewatched?: number;
            episodes_watched?: number;
        };
        manga_stats: {
            days_read?: number;
            mean_score?: number;
            reading?: number;
            completed?: number;
            on_hold?: number;
            dropped?: number;
            plan_to_read?: number;
            total_entries?: number;
            reread?: number;
            chapters_read?: number;
            volumes_read?: number;
        };
        favorites: {
            anime: EntryMeta[];
            manga: EntryMeta[];
            characters: EntryMeta[];
            people: EntryMeta[];
        };
        about?: string;
    }[];
};
export declare type UserStatistics = {
    data: {
        anime: {
            days_watched?: number;
            mean_score?: number;
            watching?: number;
            completed?: number;
            on_hold?: number;
            dropped?: number;
            plan_to_watch?: number;
            total_entries?: number;
            rewatched?: number;
            episodes_watched?: number;
        };
        manga: {
            days_read?: number;
            mean_score?: number;
            reading?: number;
            completed?: number;
            on_hold?: number;
            dropped?: number;
            plan_to_read?: number;
            total_entries?: number;
            reread?: number;
            chapters_read?: number;
            volumes_read?: number;
        };
    };
};
export declare type Recommendations = {
    data: {
        mal_id?: string;
        entry: (AnimeMeta | MangaMeta)[];
        content?: string;
        user: UserById;
    }[];
} & Pagination;
export declare type EntryRecommendations = {
    data: {
        entry: (AnimeMeta | MangaMeta)[];
        url?: string;
        votes?: number;
    }[];
};
export declare type MangaReview = {
    mal_id?: number;
    url?: string;
    type?: string;
    votes?: number;
    date?: string;
    chapters_read?: number;
    review?: string;
    scores: {
        overall?: number;
        story?: number;
        art?: number;
        character?: number;
        enjoyment?: number;
    };
};
export declare type AnimeReview = {
    mal_id?: number;
    url?: string;
    type?: string;
    votes?: number;
    date?: string;
    review?: string;
    episodes_watched?: number;
    scores: {
        overall?: number;
        story?: number;
        animation?: number;
        sound?: number;
        character?: number;
        enjoyment?: number;
    };
};
export declare type AnimeReviews = {
    data: ({
        user: UserMeta;
    } & AnimeReview)[];
} & Pagination;
export declare type MangaReviews = {
    data: ({
        user: UserMeta;
    } & MangaReview)[];
} & Pagination;
export declare type AnimeUserupdates = {
    data: {
        user: UserMeta;
        score: number;
        status?: string;
        episodes_seen?: number;
        episodes_total?: number;
        date?: string;
    }[];
} & Pagination;
export declare type MangaUserupdates = {
    data: {
        user: UserMeta;
        score: number;
        status?: string;
        volumes_read?: number;
        volumes_total?: number;
        chapters_read?: number;
        chapters_total?: number;
        date?: string;
    }[];
} & Pagination;
