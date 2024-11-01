import { useEffect, useState } from 'react';
import { getMovies } from '../services/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const popularData = await getMovies('/movie/popular');
        console.log("Dados de filmes populares:", popularData); // Verifica se os dados foram obtidos
        setPopularMovies(popularData.results); // Atualiza o estado com os resultados
      } catch (error) {
        setError("Não foi possível carregar os filmes populares.");
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-textPrimary text-center space-y-6 p-4">
      <p className="text-secondary uppercase tracking-widest">Portal Filmes - Exploração de Filmes e Séries</p>
      <h1 className="text-4xl font-bold">
        O portal de filmes que você vai adorar usar
      </h1>
      <p className="text-secondary max-w-md">
        Explore, descubra e organize seus filmes e séries favoritas de forma intuitiva e elegante.
      </p>

      {error && <p className="text-red-500">{error}</p>}

      <div className="flex space-x-2 mt-4">
        <input
          type="email"
          placeholder="Digite seu email de trabalho"
          value={email}
          onChange={handleEmailChange}
          className="p-2 rounded-md bg-background border border-primary focus:outline-none focus:ring-2 focus:ring-primary text-textPrimary"
        />
        <button className="bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition">
          Solicitar Acesso Antecipado
        </button>
      </div>

      <div className="w-full mt-10">
        <h2 className="text-2xl font-bold mb-4">Filmes Populares</h2>
        {popularMovies.length > 0 ? (
          <Swiper spaceBetween={10} slidesPerView={5}>
            {popularMovies.map((movie) => (
              <SwiperSlide key={movie.id} className="p-2">
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                  className="rounded-lg border border-secondary shadow-lg"
                />
                <p className="text-textPrimary mt-2 text-sm">{movie.title}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          !error && <p>Carregando filmes...</p>
        )}
      </div>
    </div>
  );
}

export default Home;
