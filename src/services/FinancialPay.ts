import http from '../http-common';

const getAll = () => {
  return http.get('/financial-pay-item').then(response => response.data);
};
const create = data => {
  return http.post('/financial-pay-item', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
const put = data => {
  return http.put('/financial-pay-item', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
const get = id => {
  return http.get(`/financial-pay-item/${id}`);
};
export default {
  getAll,
  create,
  get,
  put,
};
