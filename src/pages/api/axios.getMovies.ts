import axios from 'axios';

const getMovies = async(imdbId: string) => {
    const omdbKey = process.env.NEXT_PUBLIC_OMDB_API_KEY;

    const options = {
    method: 'GET',
    url: `http://www.omdbapi.com/?i=${imdbId}&apikey=${omdbKey}`,
    };

    try {
        const { data } = await axios.request(options);
        return data;
    } catch (e) {
        console.log(e);
    }
}

export default getMovies
