import http from '../http-common';

const getAll = () => {
  return http.get('/animal-breed').then(response => response.data);
};
const create = data => {
  return http.post('/animal-breed', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
export default {
  getAll,
  create,
};
