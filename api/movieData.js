import { clientCredentials } from '../utils/client';

// API CALLS FOR MEMBERS
const dbUrl = clientCredentials.databaseURL;

const getMovies = (uid) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/movies.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getSingleMovie = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/movies/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application.json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createMovie = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/movies.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateMovie = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/movies/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteSingleMovie = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/movies/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const getMovieCrew = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/members.json?orderBy="movieid"&equalTo="${firebaseKey}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export {
  getMovies, getSingleMovie, createMovie, updateMovie, deleteSingleMovie, getMovieCrew,
};
