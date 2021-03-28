import http from '../http-common';

import { PropsApi } from './response';

export type PropsBillsPay = {
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
  financial_pay_itens: {
    pay_item_id: string;
    pay_id: string;
    expected_date: string;
    expected_amount: string;
    realized_date: string;
    realized_amount: string;
    create_user: string;
    created_at: string;
    update_user: string;
    updated_at: string;
    status: string;
  };
};

const getAll = (): Promise<PropsApi<PropsBillsPay[]>> => {
  return http.get('/bills-pay').then(response => response);
};
const create = (data: PropsBillsPay[]): Promise<PropsApi<PropsBillsPay[]>> => {
  return http.post('/bills-pay', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
const put = (data: PropsBillsPay[]): Promise<PropsApi<PropsBillsPay[]>> => {
  return http.put('/bills-pay', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

const getBetween = (
  dt_init: string,
  dt_end: string,
): Promise<PropsApi<PropsBillsPay[]>> => {
  console.log(`/bills-pay/${dt_init}/${dt_end}`);
  return http.get(`/bills-pay/${dt_init}/${dt_end}`).then(response => response);
};
export default {
  getAll,
  create,
  getBetween,
  put,
};
