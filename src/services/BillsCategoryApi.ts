import http from '../http-common';
import { PropsApi } from './response';

export type PropsBillsCategory = {
  category_id: string;
  kind: string;
  description: string;
};
const getAll = (): Promise<PropsApi<PropsBillsCategory[]>> => {
  return http.get('/bills-category').then(response => response);
};
const create = (
  data: PropsBillsCategory[],
): Promise<PropsApi<PropsBillsCategory[]>> => {
  return http.post('/bills-category', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
export default {
  getAll,
  create,
};
