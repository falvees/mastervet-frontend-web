import http from '../http-common';
import { PropsApi } from './response';

export type PropsAnimalType = {
  type_id: string;
  description: string;
};

const getAll = (): Promise<PropsApi<PropsAnimalType[]>> => {
  return http.get('/animal-type').then(response => response);
};
const create = (
  data: PropsAnimalType[],
): Promise<PropsApi<PropsAnimalType[]>> => {
  return http.post('/animal-type', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
export default {
  getAll,
  create,
};
