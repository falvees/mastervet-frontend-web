import http from '../http-common';

const getAll = () => {
  return http.get('/pet_procedures').then(response => response.data);
};
const create = data => {
  return http.post('/pet_procedures', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
export default {
  getAll,
  create,
};
