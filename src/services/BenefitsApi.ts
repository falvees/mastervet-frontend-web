import http from '../http-common';
import { PropsApi } from './response';

export type PropsBenefits = {
  benefit_id: string;
  description: string;
  status: string;
  icon: string;
};
const getAll = (): Promise<PropsApi<PropsBenefits[]>> => {
  return http.get('/benefits').then(response => response);
};
const create = (data: PropsBenefits[]): Promise<PropsApi<PropsBenefits[]>> => {
  return http.post('/benefits', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
export default {
  getAll,
  create,
};
