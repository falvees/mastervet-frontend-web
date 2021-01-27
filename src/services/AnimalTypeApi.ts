import http from '../http-common';

const getAll = () => {
  return http.get('/animal-type').then(response => response.data);
};
const create = data => {
  return http.post('/animal-type', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
export default {
  getAll,
  create,
};
