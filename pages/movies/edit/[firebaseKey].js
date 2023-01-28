import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getSingleMovie } from '../../../api/movieData';
import MovieForm from '../../../components/forms/MovieForm';

export default function UpdateMovie() {
  const [editMovie, setEditMovie] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleMovie(firebaseKey).then(setEditMovie);
  }, [firebaseKey]);

  return (
    <MovieForm obj={editMovie} />
  );
}
