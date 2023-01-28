/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';
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
    <>
      <Head>
        <title>Update Movie</title>
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Noto+Emoji:wght@300&family=Noto+Sans+Mono:wght@200&family=Poppins:ital,wght@0,200;1,200&display=swap" rel="stylesheet" />
      </Head><MovieForm obj={editMovie} />
    </>
  );
}
