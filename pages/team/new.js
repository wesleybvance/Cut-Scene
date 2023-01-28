/* eslint-disable @next/next/no-page-custom-font */
import React from 'react';
import Head from 'next/head';
import MemberForm from '../../components/forms/MemberForm';

export default function AddMember() {
  return (
    <>
      <Head>
        <title>Add New Member</title>
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Noto+Emoji:wght@300&family=Noto+Sans+Mono:wght@200&family=Poppins:ital,wght@0,200;1,200&display=swap" rel="stylesheet" />
      </Head>
      <MemberForm />
    </>
  );
}
