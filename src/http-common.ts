import axios from 'axios';

// axios.defaults.baseURL = 'http://Dominio';
// axios.defaults.headers.common['Content-Type'] =
//   'application/json;charset=utf-8';
// axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
export default axios.create({
  baseURL: 'http://201.48.4.238:3000',
  // baseURL: 'http://201.48.4.238/back-end/mastervetapp',
  headers: {
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    // 'Access-Control-Allow-Headers': 'X-CSRF-TOKEN, X-Requested-With',
  },
});
