import http from '../http-common';

const getAll = () => {
  return http.get('/client').then(response => response.data);
};
const create = data => {
  return http.post('/client', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
export default {
  getAll,
  create,
};
