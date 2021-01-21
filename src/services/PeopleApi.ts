import http from '../http-common';

const getAll = () => {
  return http.get('/client').then(response => response.data);
};
const create = data => {
  return http.post('/client', data);
};

// const getAll = () => {
//   return http.get('/client');
// };
// const getAll = () => {
//   return http
//     .get('/client')
//     .then(function (response) {
//       // handle success
//       return response;
//       // console.log(response);
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     })
//     .then(function () {
//       // always executed
//     });
// };

export default {
  getAll,
  create,
};
