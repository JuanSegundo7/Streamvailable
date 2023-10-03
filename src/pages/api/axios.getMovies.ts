import axios from 'axios';

const getMovies = async(imdbId: string) => {

    const options = {
    method: 'GET',
    url: `http://www.omdbapi.com/?i=${imdbId}&apikey=f7059a62`,
    };

    try {
        const { data } = await axios.request(options);
        return data;
    } catch (e) {
        console.log(e);
    }
}

export default getMovies
