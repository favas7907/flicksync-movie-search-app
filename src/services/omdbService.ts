import { config } from '@/config/config';

export const searchMovies = async (query: string, page = 1) => {
  if (!config.OMDB_API_KEY) {
    console.warn('OMDb API Key is missing. Please add VITE_OMDB_API_KEY to your .env file.');
    return { Response: 'False', Error: 'API Key missing' };
  }

  try {
    const response = await fetch(
      `${config.BASE_URL}?apikey=${config.OMDB_API_KEY}&s=${encodeURIComponent(query)}&page=${page}`
    );
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    return { Response: 'False', Error: 'Network error' };
  }
};

export const getMovieDetails = async (id: string) => {
  if (!config.OMDB_API_KEY) return null;

  try {
    const response = await fetch(
      `${config.BASE_URL}?apikey=${config.OMDB_API_KEY}&i=${id}&plot=full`
    );
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    return null;
  }
};
