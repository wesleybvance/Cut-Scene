import { clientCredentials } from '../utils/client';

// API CALLS FOR MEMBERS
const dbUrl = clientCredentials.databaseURL;

const getMembers = (uid) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/members.json?orderBy="uid"&equalTo="${uid}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve.apply(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});
