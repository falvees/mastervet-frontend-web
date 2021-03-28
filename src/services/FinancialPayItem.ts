import http from '../http-common';
import { PropsApi } from './response';

export type PropsFinancialPayItem = {
  pay_item_id: string;
  expected_date: string;
  expected_amount: string;
  realized_date: string;
  realized_amount: string;
  create_user: string;
  created_at: string;
  update_user: string;
  updated_at: string;
  status: string;
  pay_id: {
    pay_id: string;
    description: string;
    create_at: string;
    create_user: string;
    repetition_type: string;
    repetition: string;
    people_id: string;
    date_init: string;
    amount: string;
    category_id: string;
    status: string;
  };
};

const getAll = (): Promise<PropsApi<PropsFinancialPayItem[]>> => {
  return http.get('/financial-pay-item').then(response => response);
};
const create = (
  data: PropsFinancialPayItem[],
): Promise<PropsApi<PropsFinancialPayItem[]>> => {
  return http.post('/financial-pay-item', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
const put = (
  data: PropsFinancialPayItem[],
): Promise<PropsApi<PropsFinancialPayItem[]>> => {
  return http.put('/financial-pay-item', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
const get = (id: string): Promise<PropsApi<PropsFinancialPayItem[]>> => {
  return http.get(`/financial-pay-item/${id}`);
};
const del = (id: string): Promise<PropsApi<PropsFinancialPayItem[]>> => {
  return http.delete(`/financial-pay-item/${id}`);
};
const getBetween = (
  dt_init: string,
  dt_end: string,
): Promise<PropsApi<PropsFinancialPayItem[]>> => {
  console.log(`/financial-pay-item/${dt_init}/${dt_end}`);
  return http
    .get(`/financial-pay-item/${dt_init}/${dt_end}`)
    .then(response => response);
};
export default {
  del,
  getAll,
  create,
  get,
  put,
  getBetween,
};
