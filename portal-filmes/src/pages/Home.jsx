import { useEffect, useState } from 'react';
import { getMovies } from '../services/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const popularData = await getMovies('/movie/popular');
      const upcomingData = await getMovies('/movie/upcoming');
      const tvData = await getMovies('/tv/popular');

      setPopularMovies(popularData.results);
      setUpcomingMovies(upcomingData.results);
      setTvShows(tvData.results);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold">Filmes Populares</h2>
      <Swiper spaceBetween={10} slidesPerView={5}>
        {popularMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
          </SwiperSlide>
        ))}
      </Swiper>

      <h2 className="text-2xl font-bold mt-4">Filmes por Vir</h2>
      <Swiper spaceBetween={10} slidesPerView={5}>
        {upcomingMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
          </SwiperSlide>
        ))}
      </Swiper>

      <h2 className="text-2xl font-bold mt-4">Séries de TV</h2>
      <Swiper spaceBetween={10} slidesPerView={5}>
        {tvShows.map((tv) => (
          <SwiperSlide key={tv.id}>
            <img src={`https://image.tmdb.org/t/p/w200${tv.poster_path}`} alt={tv.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Home;