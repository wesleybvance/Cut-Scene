import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { deleteMovieCrew } from '../api/mergedData';
// import { deleteSingleMovie } from '../api/movieData';

function MovieCard({ movieObj, onUpdate }) {
  const deleteMovieBtn = () => {
    if (window.confirm(`Are you sure you want to remove ${movieObj.title}?`)) {
      deleteMovieCrew(movieObj.firebaseKey).then(() => onUpdate());
    }
  };
  return (
    <>
      <Card style={{ width: '18rem', margin: '15px' }}>
        <Card.Img variant="top" src={movieObj.poster} alt={`${movieObj.title}`} />
        <Card.Body style={{ color: 'black' }}>
          <div className="member-card-align">
            <Card.Title><h4 className="card-title">{movieObj.title}</h4></Card.Title>
            <Card.Text>
              <Link href={`movies/${movieObj.firebaseKey}`} passHref>
                <Button variant="outline-dark" className="m-2 card-button">view</Button>
              </Link>
              <Link href={`movies/edit/${movieObj.firebaseKey}`} passHref>
                <Button variant="outline-dark" className="m-2 card-button">edit</Button>
              </Link>
            </Card.Text>
            <Button className="m-2 card-button" variant="outline-danger" onClick={deleteMovieBtn}>delete</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

MovieCard.propTypes = {
  movieObj: PropTypes.shape({
    title: PropTypes.string,
    poster: PropTypes.string,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default MovieCard;
