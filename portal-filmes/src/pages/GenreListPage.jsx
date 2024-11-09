import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Genres() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function fetchGenres() {
      const response = await fetch("api_genres_endpoint");
      const data = await response.json();
      setGenres(data.genres);
    }
    fetchGenres();
  }, []);

  return (
    <div>
      <nav className="genre-nav">
        {genres.map((genre) => (
          <Link key={genre.id} to={`/genres/${genre.id}`} className="genre-link">
            {genre.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
