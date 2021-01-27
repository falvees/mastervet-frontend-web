import http from '../http-common';

const getAll = () => {
  return http.get('/modalities').then(response => response.data);
};
const create = data => {
  return http.post('/modalities', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
export default {
  getAll,
  create,
};
