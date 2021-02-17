import http from '../http-common';

const getAll = () => {
  return http.get('/seller').then(response => response.data);
};
const create = data => {
  return http.post('/seler', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
const put = data => {
  return http.put('/seller', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
const get = id => {
  return http.get(`/seller/${id}`);
};
export default {
  getAll,
  create,
  get,
  put,
};
