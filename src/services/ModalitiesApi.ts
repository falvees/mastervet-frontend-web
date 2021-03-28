import http from '../http-common';
import { PropsApi } from './response';

type PropsModalities = {
  modality_id: string;
  description: string;
  status: string;
  benefit_id: string;
};

const getAll = (): Promise<PropsApi<PropsModalities[]>> => {
  return http.get('/modalities').then(response => response);
};
const create = (
  data: PropsModalities[],
): Promise<PropsApi<PropsModalities[]>> => {
  return http.post('/modalities', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
export default {
  getAll,
  create,
};
