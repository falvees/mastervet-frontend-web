import http from '../http-common';
import { PropsApi } from './response';

export type PropsPeople = {
  people_id: number;
  registration_date: string;
  category: string;
  name: string;
  kind_people: string;
  cpf_cgc: string;
  identity_document: string;
  issuing_entity: string;
  date_birth: string;
  gender: string;
  telephone01: string;
  telephone02: string;
  telephone03: string;
  email: string;
  zip_code: string;
  address: string;
  number_address: string;
  neighborhood: string;
  city: string;
  state: string;
  observations: string;
  username: string;
  password: string;
  professional_profile: string;
  regional_council: string;
  address_complement: string;
  face_picture: string;
  cover_picture: string;
};

const getAll = (): Promise<PropsApi<PropsPeople[]>> => {
  return http.get('/client').then(response => response);
};
const create = (data: PropsPeople[]): Promise<PropsApi<PropsPeople[]>> => {
  return http.post('/client', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
const put = (data: PropsPeople[]): Promise<PropsApi<PropsPeople[]>> => {
  return http.put('/client', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
const get = (id: number): Promise<PropsApi<PropsPeople[]>> => {
  return http.get(`/client/${id}`);
};
export default {
  getAll,
  create,
  get,
  put,
};
