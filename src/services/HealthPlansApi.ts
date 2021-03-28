import http from '../http-common';
import { PropsApi } from './response';

type PropsHealthPlans = {
  plan_id: string;
  description: string;
  status: string;
};
const getAll = (): Promise<PropsApi<PropsHealthPlans[]>> => {
  return http.get('/health-plans').then(response => response);
};
const create = (
  data: PropsHealthPlans[],
): Promise<PropsApi<PropsHealthPlans[]>> => {
  return http.post('/health-plans', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
export default {
  getAll,
  create,
};
