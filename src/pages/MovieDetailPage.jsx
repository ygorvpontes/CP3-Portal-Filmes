import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetailPage() {

    const { id } = useParams()

    const [movie, setMovie] = useState({})

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f68e62a4f3ba4d35a42d89822b8cd368&language=pt-br`)
            .then(response => response.json())
            .then(data => setMovie(data))
            .catch(error => console.error(error))
            .finally(() => console.log('fetch finalizado'));
    }, []);
    return (
        <>
            <div className="movie-details">
      <h1>{movie.title}</h1>
      <p>Sinopse: {movie.overview}</p>
      <p>Avaliação: {movie.vote_average}</p>
      <p>Data de Lançamento: {movie.release_date}</p>
      {/* Adicione a lista do elenco se disponível */}
     </div>
  
            
        </>
    )
}