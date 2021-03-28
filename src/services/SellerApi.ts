import http from '../http-common';
import { PropsApi } from './response';

type PropsSaller = {
  people_id: string;
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
};

const getAll = (): Promise<PropsApi<PropsSaller[]>> => {
  return http.get('/seller').then(response => response);
};

const create = (data: PropsSaller[]): Promise<PropsApi<PropsSaller[]>> => {
  return http.post('/seler', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

const put = (data: unknown): Promise<void> => {
  return http.put('/seller', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
const get = (id: string): Promise<void> => {
  return http.get(`/seller/${id}`);
};
export default {
  getAll,
  create,
  get,
  put,
};
