/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head';
// import { useEffect, useState } from 'react';
// import { getMembers } from '../api/memberData';
import { useAuth } from '../utils/context/authContext';
// import MemberCard from '../components/MemberCard';

function Home() {
  const { user } = useAuth();

  return (
    <><Head><title>Your Film Crew</title></Head>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
      >
        <h2>Welcome {user.displayName} </h2>
        <h5> Film Crew </h5>
        {/* <ViewTeam /> */}
      </div>
    </>
  );
}

export default Home;
