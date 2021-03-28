import http from '../http-common';
import { PropsApi } from './response';

type PropsOwnerPets = {
  pet_id: string;
  date_registration: string;
  user_registration: string;
  people_id: string;
  pet_name: string;
  type_id: string;
  breed_id: {
    breed_id: string;
    breed_name: string;
    type_id: string;
    animal_size: string;
  };
  date_birth: string;
  weight: string;
  height: string;
  predominant_color: string;
  characteristics: string;
  date_death: string;
  picture_face: string;
  picture_body: string;
  picture_detail: string;
};
const get = (id: string): Promise<PropsApi<PropsOwnerPets[]>> => {
  return http.get(`/owner-pets/${id}`);
};

export default {
  get,
};
