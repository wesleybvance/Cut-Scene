/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getMovies } from '../api/movieData';
import MovieCard from './MovieCard';

export default function ViewMovies() {
  const { user } = useAuth();

  const [movies, setMovies] = useState([]);

  const getAllMovies = () => {
    getMovies(user.uid).then(setMovies);
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <div className="move-view">{movies.map((movie) => (
      <MovieCard key={movie.firebaseKey} movieObj={movie} onUpdate={getAllMovies} />
    ))}
    </div>
  );
}
