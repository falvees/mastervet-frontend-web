import http from '../http-common';
import { PropsApi } from './response';

export type PropsHealthPlans = {
  plan_id: string;
  description: string;
  status: number;
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

const get = (id: string): Promise<PropsApi<PropsHealthPlans[]>> => {
  return http
    .get(`/health-plans/${id}`)
    .then(response => response.data.response[0]);
};
export default {
  getAll,
  create,
  get,
};
