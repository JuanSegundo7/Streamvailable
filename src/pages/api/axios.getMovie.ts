import axios from 'axios';

const getMovie = async(imdbId: string, country: string) => {
    const omdbKey = process.env.NEXT_PUBLIC_OMDB_API_KEY;
    const rapidKey = process.env.NEXT_PUBLIC_RAPID_API_KEY;

    const options = {
        method: 'GET',
        url: 'https://streaming-availability.p.rapidapi.com/get',
        params: {
            output_language: 'en',
            imdb_id: imdbId
        },
        headers: {
            'X-RapidAPI-Key': rapidKey,
            'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
        }
    };

    const optionsOMDb = {
        method: 'GET',
        url: `https://www.omdbapi.com/?i=${imdbId}&plot=full&apikey=${omdbKey}`,
    };

    try {
        const { data } = await axios.request(options);
        const { result } = data
        const info = await axios.request(optionsOMDb)
        const dataOMDb = info.data  

        const movie = {
            ...dataOMDb,
            seasons: result.seasons,
            genres: result.genres,
            stream_platforms: result.streamingInfo[country],
        }

        return movie

    } catch (e) {
        console.log(e);
    }
}

export default getMovie
