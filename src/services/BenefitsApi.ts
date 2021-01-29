import http from '../http-common';

const getAll = () => {
  return http.get('/benefits').then(response => response.data);
};
const create = data => {
  return http.post('/benefits', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
export default {
  getAll,
  create,
};
