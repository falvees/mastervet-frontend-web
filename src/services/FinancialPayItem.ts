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
const del = id => {
  return http.delete(`/financial-pay-item/${id}`);
};
const getBetween = (dt_init, dt_end) => {
  console.log(`/financial-pay-item/${dt_init}/${dt_end}`);
  return http
    .get(`/financial-pay-item/${dt_init}/${dt_end}`)
    .then(response => response.data);
};
export default {
  del,
  getAll,
  create,
  get,
  put,
  getBetween,
};
