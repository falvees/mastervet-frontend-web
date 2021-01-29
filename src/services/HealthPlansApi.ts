import http from '../http-common';

const getAll = () => {
  return http.get('/health_plans').then(response => response.data);
};
const create = data => {
  return http.post('/health_plans', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
export default {
  getAll,
  create,
};
