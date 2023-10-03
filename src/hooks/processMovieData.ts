import { Movie } from "@/@types/movie";
import getMovies from "@/pages/api/axios.getMovies";

const processMovies = async (movies: Movie[], country: string) => {
    const moviePromises = movies.map(async (movie: Movie) => {
      const movieData = await getMovies(movie.imdbId);
      return {
        ...movieData,
        seasons: movie.seasons,
        genre: movie.genres,
        stream_platforms: movie.streamingInfo[country as keyof typeof movie.streamingInfo] || []
      };
    });
    return Promise.all(moviePromises);
};

export default processMovies;