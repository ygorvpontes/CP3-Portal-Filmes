// src/services/api.js
const API_KEY = 'SUA_API_KEY_AQUI';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getMovies = async (endpoint) => {
  const response = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}&language=pt-BR`);
  const data = await response.json();
  return data;
};
