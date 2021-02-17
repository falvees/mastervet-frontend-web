import http from '../http-common';

const getAll = () => {
  return http.get('/accreditations').then(response => response.data);
};
const create = data => {
  return http.post('/accreditations', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
const put = data => {
  return http.put('/accreditations', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
const get = id => {
  return http.get(`/accreditations/${id}`);
};
export default {
  getAll,
  create,
  get,
  put,
};
