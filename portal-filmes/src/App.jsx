import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import WatchList from './pages/WatchList';
import Genres from './pages/Genres';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/genres" element={<Genres />} />
      </Routes>
    </div>
  );
}

export default App;

