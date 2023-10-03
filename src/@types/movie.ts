export interface Movie {
    imdbId: string;
    Actors: string;
    Awards: string;
    BoxOffice: string;
    Country: string;
    DVD: string;
    Director: string;
    genres: Genre;
    Language: string;
    Metascore: string;
    Plot: string;
    Poster: string;
    Production: string;
    Rated: string;
    Ratings: string;
    Released: string;
    Response: string;
    Runtime: string;
    Title: string;
    Type: string;
    Website: string;
    Writer: string;
    Year: string;
    imdbRating: string;
    imdbVotes: string;
    seasons: string;
    streamingInfo: string;
    stream_platforms: CountryStreamData;
}

type CountryStreamData = {
    [countryCode: string]: StreamPlatform[];
};

type StreamPlatform = {
    service: string;
    streamingType: string;
    quality: string;
    link: string;
    videoLink: string;
};

type Genre = {
    id: number;
    name: string;
}

export interface MoviesState {
    search: Movie[],
    movies: Movie[],
    series: Movie[],
}
