import http from '../http-common';
import { PropsApi } from './response';

export type PropsAccreditations = {
  accreditation_id: number;
  people_id: number;
  registration_date: string;
  registration_user: string;
  duration: number;
  disqualification_date: string;
  plan_id: number;
  status: string;
  pets_numbers: number;
  amount: string;
  seller_id: string;
  name: string;
  description: string;
  pets: [];
  // gender: string;
};
const getAll = (): Promise<PropsApi<PropsAccreditations[]>> => {
  return http.get('/accreditations').then(response => response);
};
const create = (
  data: PropsAccreditations[],
): Promise<PropsApi<PropsAccreditations[]>> => {
  return http.post('/accreditations', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
const put = (
  data: PropsAccreditations[],
): Promise<PropsApi<PropsAccreditations[]>> => {
  return http.put('/accreditations', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
const get = (id: number): Promise<PropsApi<PropsAccreditations[]>> => {
  return http.get(`/accreditations/${id}`);
};
export default {
  getAll,
  create,
  get,
  put,
};
