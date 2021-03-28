import http from '../http-common';
import { PropsApi } from './response';

type PropsPlansBenefits = {
  plan_id: string;
  quantity: string;
  status: string;
  benefit_id: {
    benefit_id: string;
    description: string;
    status: string;
    icon: string;
  };
};

const getAll = (): Promise<PropsApi<PropsPlansBenefits[]>> => {
  return http.get('/plans-benefits').then(response => response);
};
const get = (id: number): Promise<PropsApi<PropsPlansBenefits[]>> => {
  return http.get(`/plans-benefits-view/${id}`);
};

export default {
  getAll,
  get,
};
