/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { viewMovieDetails } from '../../api/mergedData';
import { getMovieCrew } from '../../api/movieData';
import MemberCard from '../../components/MemberCard';

export default function ViewMember() {
  const [movieDetails, setMovieDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    viewMovieDetails(firebaseKey).then(setMovieDetails);
  }, [firebaseKey]);

  const getAllMovieCrew = () => {
    getMovieCrew(firebaseKey);
  };

  return (
    <div className="movie-detail-container">
      <div className="movie-detail-card-container">
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={movieDetails.poster} />
          <Card.Body className="member-card">
            <Card.Title className="member-card">{`${movieDetails.title}`}</Card.Title>
            <Card.Text>
              <p className="movie-description">{movieDetails.description}</p>
            </Card.Text>
            <Link href={`edit/${movieDetails.firebaseKey}`} passHref>
              <Button variant="outline-dark" className="m-2">Edit</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
      <div className="movie-cards-array">
        {movieDetails.members?.map((member) => (
          <MemberCard key={member.firebaseKey} memberObj={member} onUpdate={getAllMovieCrew} />
        ))}
      </div>
    </div>

  );
}
