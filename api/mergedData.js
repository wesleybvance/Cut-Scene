import { deleteSingleMember, getSingleMember } from './memberData';
import { deleteSingleMovie, getMovieCrew, getSingleMovie } from './movieData';

const viewMemberMovie = (memberFirebaseKey) => new Promise((resolve, reject) => {
  getSingleMember(memberFirebaseKey)
    .then((memberObject) => {
      getSingleMovie(memberObject.movieid)
        .then((movieObject) => {
          resolve({ movieObject, ...memberObject });
        });
    }).catch((error) => reject(error));
});

const viewMovieDetails = (movieFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleMovie(movieFirebaseKey), getMovieCrew(movieFirebaseKey)])
    .then(([movieObject, movieCrewArray]) => {
      resolve({ ...movieObject, members: movieCrewArray });
    }).catch((error) => reject(error));
});

const deleteMovieCrew = (movieId) => new Promise((resolve, reject) => {
  getMovieCrew(movieId).then((membersArray) => {
    const deleteMemberPromises = membersArray.map((member) => deleteSingleMember(member.firebaseKey));

    Promise.all(deleteMemberPromises).then(() => {
      deleteSingleMovie(movieId).then(resolve);
    });
  }).catch((error) => reject(error));
});

export { viewMemberMovie, viewMovieDetails, deleteMovieCrew };
