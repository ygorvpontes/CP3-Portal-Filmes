import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
    return (
      <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img src={movie.poster_path} alt={movie.title} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
          <h3 className="text-lg font-bold">{movie.title}</h3>
          <p className="text-sm">Avaliação: {movie.vote_average}</p>
        </div>
      </div>
    );
  }
  
