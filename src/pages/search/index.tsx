import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import searchByFilters from "../api/axios.searchByFilters";
import processMovies from "@/hooks/processMovieData";
import Spinner from "@/components/Spinner";
import Card from "@/components/Card";
import Image from "next/image";
import Switch from "@/components/Switch";
import { Movie, MoviesState } from "@/@types/movie";

const Search = () => {
  const [data, setData] = useState<MoviesState>({
    search: [],
    movies: [],
    series: [],
  });
  const [type, setType] = useState("movie");
  const [searchLoading, setSearchLoading] = useState(true);
  const router = useRouter();

  const { country, keyword } = router.query as {
    country: string;
    keyword: string;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { result } = await searchByFilters(country, keyword);

        const movies = await processMovies(result, country);

        setData({
          search: result,
          movies: movies.filter((item: Movie) => item.Type === "movie"),
          series: movies.filter((item: Movie) => item.Type === "series"),
        });
        setSearchLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [country, keyword]);

  const moviesOrSeries = type === "movie" ? data.movies : data.series;

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-start px-8 md:px-24 bg-gradient-to-b from-black to-transparent">
      <div className="flex flex-col gap-4 justify-center items-center sm:flex-row sm:justify-between sm:w-full sm:gap-0">
        <div className="items-center justify-center flex gap-1">
          <h3>
            These are {keyword && keyword.charAt(0).toUpperCase()}
            {keyword && keyword.slice(1)}
            {`'`}s {type}s in
          </h3>
          <Image
            src={`https://flagcdn.com/h80/${country}.png`}
            height={30}
            width={30}
            alt="flag"
          />
        </div>
        <Switch setType={setType} type={type} />
      </div>
      <article className="w-full h-full min-h-[400px] justify-center items-center gap-6 flex flex-wrap mt-10">
        {searchLoading ? (
          <div>
            <Spinner />
          </div>
        ) : data.search.length === 0 ? (
          <p className="text-white">
            We couldn{`'`}t find the {type} you were looking for
          </p>
        ) : (
          moviesOrSeries.map((movie: Movie) => {
            return (
              <Card
                id={movie.imdbId}
                image={movie.Poster}
                title={movie.Title}
                key={movie.Title}
                country={country}
              />
            );
          })
        )}
      </article>
    </section>
  );
};

export default Search;
