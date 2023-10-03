import axios from 'axios';

const rapidKey = process.env.NEXT_PUBLIC_RAPID_API_KEY;

const options = {
    method: 'GET',
    url: 'https://streaming-availability.p.rapidapi.com/services',
    headers: {
        "X-RapidAPI-Key": rapidKey,
        "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
    },
};

const get_countries = async () => {
    try {
      const { data } = await axios.request(options);
      return data.result;
    } catch (e) {
      console.log(e);
    }
};

export default get_countries
