import http from '../http-common';

const getAll = () => {
  return http.get('/bills-pay').then(response => response.data);
};
const create = data => {
  return http.post('/bills-pay', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
const put = data => {
  return http.put('/bills-pay', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
const getBetween = (dt_init, dt_end) => {
  console.log(`/bills-pay/${dt_init}/${dt_end}`);
  return http
    .get(`/bills-pay/${dt_init}/${dt_end}`)
    .then(response => response.data);
};
export default {
  getAll,
  create,
  getBetween,
  put,
};
