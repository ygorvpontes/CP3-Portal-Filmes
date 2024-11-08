import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';

const apiKey = f68e62a4f3ba4d35a42d89822b8cd368
;

const getPopularMovies = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR`
    );
    return response.data.results;
  } catch (error) {
    console.error("Erro ao buscar filmes populares:", error);
    throw error;
  }
};

export default getPopularMovies;



