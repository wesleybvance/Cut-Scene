/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { getMembers } from '../api/memberData';
import { useAuth } from '../utils/context/authContext';
import MemberCard from '../components/MemberCard';

function Home() {
  const { user } = useAuth();

  const [members, setMembers] = useState([]);

  const getAllMembers = () => {
    getMembers(user.uid).then(setMembers);
  };

  useEffect(() => {
    getAllMembers();
  }, []);

  return (
    <><Head><title>Welcome to your Team</title></Head>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '90vh',
          padding: '30px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <h1>Hello, {user.displayName}! </h1>
        <h3> Your Movie Cast </h3>
        <div>{members.map((member) => (
          <MemberCard key={member.firebaseKey} memberObj={member} onUpdate={getAllMembers} />
        ))}
        </div>
      </div>
    </>
  );
}

export default Home;
