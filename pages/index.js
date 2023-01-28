/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head';
import ViewMovies from '../components/ViewMovies';
// import ViewMovies from '../components/ViewMovies';
// import { useEffect, useState } from 'react';
// import { getMembers } from '../api/memberData';
import { useAuth } from '../utils/context/authContext';
// import MemberCard from '../components/MemberCard';

function Home() {
  const { user } = useAuth();

  return (
    <div className="container-one">
      <Head>
        <title>Your Film Crew</title>
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Noto+Emoji:wght@300&family=Noto+Sans+Mono:wght@200&family=Poppins:ital,wght@0,200;1,200&display=swap" rel="stylesheet" />
      </Head>
      <div
        className="text-center container-one justify-content-center align-content-center"
      >
        <h2 className="welcome-page">W E L C O M E</h2>
        <h5 className="welcome-user">{user.displayName}</h5>
      </div>
      <ViewMovies />
    </div>
  );
}

export default Home;
