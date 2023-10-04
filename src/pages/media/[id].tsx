import { Movie } from "@/@types/movie";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import getMovie from "../api/axios.getMovie";
import Spinner from "@/components/Spinner";
import { Genre } from "@/@types/genre";
import { Episode, Platform, Seasons } from "@/@types/values";

const Media = () => {
  const [data, setData] = useState<Movie | undefined>(undefined);
  const router = useRouter();

  const { id, country } = router.query;

  const {
    Poster,
    Title,
    Runtime,
    imdbRating,
    Released,
    genres,
    Plot,
    Director,
    seasons,
    Actors,
    Writer,
    Metascore,
    stream_platforms,
  } = data ?? {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movie = await getMovie(id as string, country as string);
        movie && setData(movie);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [id, country]);

  return (
    <section
      className={`flex min-h-screen w-full flex-col items-center md:px-24 bg-gradient-to-b from-black to-transparent ${
        !data ? "justify-center" : "justify-between"
      }`}
    >
      {!data ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <article className="md:px-8 w-full flex flex-col lg:flex-row justify-center items-center gap-6 lg:items-start">
          <Image
            src={Poster as string}
            height={150}
            width={150}
            alt="poster"
            className="w-full h-full max-h-[500px] sm:w-[300px] sm:h-[500px] lg:w-[500px] lg:h-full object-cover drop-shadow-lg"
          />
          <div className="p-6 lg:px-6 lg:py-0 w-full h-full">
            <div className="w-full">
              <h3 className="text-white text-xl font-bold w-full text-left">
                {Title}
              </h3>
              <div className="w-full flex justify-start items-center gap-5">
                <div className="flex justify-center items-center gap-1">
                  <Image
                    src="/imgs/watch.png"
                    alt="watch"
                    width={18}
                    height={18}
                  />
                  <p className="text-base text-gray-300">{Runtime}</p>
                </div>
                <div className="flex justify-center items-center gap-1">
                  <Image
                    src="/imgs/star.png"
                    alt="star"
                    width={18}
                    height={18}
                  />
                  <p className="text-base text-gray-300">{imdbRating}</p>
                </div>
                {Metascore && (
                  <div className="flex justify-center items-end gap-1">
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Metacritic_M.png"
                      height={30}
                      width={20}
                      alt="metacritic"
                    />
                    <p>{Metascore}</p>
                  </div>
                )}
              </div>
            </div>
            <div className="w-full h-[1px] bg-gray-700 my-5"></div>
            <div className="w-full flex justify-start items-center     gap-5">
              <div className="w-full flex flex-col justify-center items-start">
                <p className="text-white text-md font-medium w-full text-left">
                  Release Date
                </p>
                <p className="text-base text-gray-300">{Released}</p>
              </div>
              <div className="w-full flex flex-col justify-center items-start">
                <p className="text-white text-md font-medium w-full text-left">
                  Genres
                </p>
                <div className=" w-full flex justify-start items-center gap-2 flex-wrap">
                  {genres &&
                    Array.isArray(genres) &&
                    genres.map((genre: Genre) => {
                      return (
                        <div
                          className="rounded-xl border-[1px] flex justify-center items-center px-3 py-1"
                          key={genre.id}
                        >
                          {genre.name}
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className="w-full h-[1px] bg-gray-700 my-5"></div>
            <div>
              <div className="w-full flex flex-col justify-center items-start gap-3">
                <p className="text-white text-md font-medium w-full text-left">
                  Synopsis
                </p>
                <p className="text-base text-gray-300 text-left">{Plot}</p>
              </div>
            </div>
            <div className="w-full h-[1px] bg-gray-700 my-5"></div>
            <div className="w-full flex flex-col justify-start items-center gap-5">
              <div className="w-full flex flex-col justify-center items-start">
                <p className="text-white text-md font-medium w-full text-left">
                  Director
                </p>
                <p className="text-base text-gray-300">{Director}</p>
              </div>
              <div className="w-full flex flex-col justify-center items-start">
                <p className="text-white text-md font-medium w-full text-left">
                  Actors
                </p>
                <div className=" w-full flex justify-start items-center gap-2 flex-wrap">
                  <p className="text-base text-gray-300">{Actors}</p>
                </div>
              </div>
              <div className="w-full flex flex-col justify-center items-start">
                <p className="text-white text-md font-medium w-full text-left">
                  Writers
                </p>
                <div className=" w-full flex justify-start items-center gap-2 flex-wrap">
                  <p className="text-base text-gray-300">{Writer}</p>
                </div>
              </div>
            </div>
            <div className="w-full h-[1px] bg-gray-700 my-5"></div>
            <div>
              <p className="text-white text-md font-medium w-full text-left">
                Streaming platforms where is available
              </p>
              <div className="my-5 flex justify-center items-center gap-4 flex-wrap">
                {stream_platforms ? (
                  Array.isArray(stream_platforms) &&
                  stream_platforms.map((platform: Platform) => {
                    return (
                      <div
                        key={platform.service}
                        className="cursor-pointer"
                        onClick={() => router.push(platform.link)}
                      >
                        <Image
                          src={`https://media.movieofthenight.com/services/${platform.service}/logo-dark-theme.svg`}
                          alt={`platform-${platform.service}`}
                          height={120}
                          width={120}
                          className="w-[120px] h-[70px]"
                        />
                        <p>
                          {platform.service.charAt(0).toUpperCase()}
                          {platform.service.slice(1)}
                        </p>
                      </div>
                    );
                  })
                ) : (
                  <p>
                    There are not streaming platforms available for this movie
                  </p>
                )}
              </div>
            </div>
            {seasons && (
              <>
                <div className="w-full h-[1px] bg-gray-700 my-5"></div>
                <div>
                  <p className="text-white text-md font-medium w-full text-left">
                    Seasons
                  </p>
                  <div className="my-5 flex flex-col items-start justify-start gap-6 sm:flex-row">
                    {Array.isArray(seasons) &&
                      seasons.map((season: Seasons) => {
                        return (
                          <div
                            key={season.title}
                            className="flex flex-col h-full sm:min-h-[520px] sm:h-full"
                          >
                            {season.episodes.length > 0 && (
                              <>
                                <p className="text-white text-md font-medium w-full text-left">
                                  {season.title}
                                </p>
                                <div>
                                  {season.episodes.map((episode: Episode) => {
                                    return (
                                      <p
                                        className="text-base text-gray-300 text-left"
                                        key={episode.title}
                                      >
                                        {episode.title}
                                      </p>
                                    );
                                  })}
                                </div>
                              </>
                            )}
                          </div>
                        );
                      })}
                  </div>
                </div>
              </>
            )}
          </div>
        </article>
      )}
    </section>
  );
};

export default Media;
