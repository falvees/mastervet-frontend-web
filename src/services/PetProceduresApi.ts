import http from '../http-common';
import { PropsApi } from './response';

type PropsPetProcedures = {
  procedure_id: string;
  description: string;
  modality_id: {
    modality_id: string;
    description: string;
    status: string;
    benefit_id: string;
  };
  status: string;
};

const getAll = (): Promise<PropsApi<PropsPetProcedures[]>> => {
  return http.get('/pet-procedures').then(response => response);
};
const create = (
  data: PropsPetProcedures[],
): Promise<PropsApi<PropsPetProcedures[]>> => {
  return http.post('/pet-procedures', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
export default {
  getAll,
  create,
};
