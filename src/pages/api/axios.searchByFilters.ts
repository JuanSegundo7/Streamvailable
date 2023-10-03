import axios from 'axios';

const searchByFilters = async (country: string, title: string) => {
  const rapidKey = process.env.NEXT_PUBLIC_RAPID_API_KEY;

  const options = {
    method: 'GET',
    url: 'https://streaming-availability.p.rapidapi.com/search/title',
    params: {
      title,
      country,
      output_language: 'en',
      order_by: 'original_title',
      genres_relation: 'and',
      show_type: 'all',
    },
    headers: {
      'X-RapidAPI-Key': rapidKey,
      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default searchByFilters