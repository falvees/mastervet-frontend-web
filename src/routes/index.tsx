import React from 'react';
import { Switch, Route, match } from 'react-router-dom';

import SingIn from '../pages/SignIn';
import FormUsers from '../pages/FormsPages/FormUsers';
import People from '../pages/ListPages/People';
import PadraoAdd from '../pages/PadraoAdd';
import PadraoList from '../pages/PadraoList';
import AnimalType from '../pages/ListPages/AnimalType';
import FormAnimalType from '../pages/FormsPages/FormAnimalType';
import FormAnimalBreed from '../pages/FormsPages/FormAnimalBreed';
import FormModalities from '../pages/FormsPages/FormModalities';
import AnimalBreed from '../pages/ListPages/AnimalBreed';
import Modalities from '../pages/ListPages/Modalities';
import BillsCategory from '../pages/ListPages/BillsCategory';
import FormBillsCategory from '../pages/FormsPages/FormBillsCategory';
import FormBenefits from '../pages/FormsPages/FormBenefits';
import Benefits from '../pages/ListPages/Benefits';
import FormPetProcedure from '../pages/FormsPages/FormPetProcedures';
import HealthPlans from '../pages/ListPages/HealthPlans';
import FormHealthPlans from '../pages/FormsPages/FormHealthPlans';
import PetProcedures from '../pages/ListPages/PetProcedures';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SingIn} />
    <Route path="/register_user" component={FormUsers} />
    <Route path="/edit_user/:id" component={FormUsers} />
    <Route path="/register_animal_type" component={FormAnimalType} />
    <Route path="/register_animal_breed" component={FormAnimalBreed} />
    <Route path="/register_modalities" component={FormModalities} />
    <Route path="/register_accounts_category" component={FormBillsCategory} />
    <Route path="/padrao_add" component={PadraoAdd} />
    <Route path="/padrao_list" component={PadraoList} />
    <Route path="/users" component={People} />
    <Route path="/animaltype" component={AnimalType} />
    <Route path="/animalbreed" component={AnimalBreed} />
    <Route path="/modalities" component={Modalities} />
    <Route path="/accounts_categories" component={BillsCategory} />
    <Route path="/benefits" component={Benefits} />
    <Route path="/register_benefits" component={FormBenefits} />
    <Route path="/register_procedures" component={FormPetProcedure} />
    <Route path="/plans" component={HealthPlans} />
    <Route path="/register_plans" component={FormHealthPlans} />
    <Route path="/procedures" component={PetProcedures} />
  </Switch>
);
export default Routes;
