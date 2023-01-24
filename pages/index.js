import Head from 'next/head';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();

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
      </div>
    </>
  );
}

export default Home;
