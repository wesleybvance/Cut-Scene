/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';
import React from 'react';
import ViewMovies from '../components/ViewMovies';

export default function Movies() {
  return (
    <>
      <Head>
        <title>Your Movies</title>
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Noto+Emoji:wght@300&family=Noto+Sans+Mono:wght@200&family=Poppins:ital,wght@0,200;1,200&display=swap" rel="stylesheet" />
      </Head>
      <div><ViewMovies /></div>
    </>
  );
}
