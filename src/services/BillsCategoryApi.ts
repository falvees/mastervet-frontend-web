import http from '../http-common';

const getAll = () => {
  return http.get('/bills-category').then(response => response.data);
};
const create = data => {
  return http.post('/bills-category', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
export default {
  getAll,
  create,
};
