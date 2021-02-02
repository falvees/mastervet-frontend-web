import http from '../http-common';

const getAll = () => {
  return http.get('/client').then(response => response.data);
};
const create = data => {
  return http.post('/client', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
const put = data => {
  return http.put('/client', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
const get = id => {
  return http.get(`/client/${id}`);
};
export default {
  getAll,
  create,
  get,
  put,
};
