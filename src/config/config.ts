/// <reference types="vite/client" />
export const config = {
  OMDB_API_KEY: import.meta.env.VITE_OMDB_API_KEY || '',
  BASE_URL: 'https://www.omdbapi.com/',
};
