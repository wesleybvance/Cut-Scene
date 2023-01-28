import React from 'react';
import Head from 'next/head';
import ViewTeam from '../components/ViewTeam';

export default function Team() {
  return (
    <><Head><title>Your Film Crew</title></Head>
      <div><ViewTeam /></div>
    </>
  );
}
