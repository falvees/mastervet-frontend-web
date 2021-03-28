import http from '../http-common';
import { PropsApi } from './response';

export type PropsAnimalBreed = {
  breed_id: string;
  breed_name: string;
  type_id: {
    type_id: string;
    description: string;
  };
  animal_size: string;
};
const getAll = (): Promise<PropsApi<PropsAnimalBreed[]>> => {
  return http.get('/animal-breed').then(response => response);
};
const create = (
  data: PropsAnimalBreed,
): Promise<PropsApi<PropsAnimalBreed[]>> => {
  return http.post('/animal-breed', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
export default {
  getAll,
  create,
};
