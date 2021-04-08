import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SingIn from '../pages/SignIn';
import FormUsers from '../pages/ListPages/People/FormUsers';
import People from '../pages/ListPages/People';
// import PadraoAdd from '../pages/PadraoAdd';
// import PadraoList from '../pages/PadraoList';
import AnimalType from '../pages/ListPages/AnimalType';
import FormAnimalType from '../pages/ListPages/AnimalType/FormAnimalType';
import FormAnimalBreed from '../pages/ListPages/AnimalBreed/FormAnimalBreed';
import FormModalities from '../pages/ListPages/Modalities/FormModalities';
import AnimalBreed from '../pages/ListPages/AnimalBreed';
import Modalities from '../pages/ListPages/Modalities';
import BillsCategory from '../pages/ListPages/BillsCategory';
import FormBillsCategory from '../pages/ListPages/BillsCategory/FormBillsCategory';
import FormBenefits from '../pages/ListPages/Benefits/FormBenefits';
import Benefits from '../pages/ListPages/Benefits';
import FormPetProcedure from '../pages/ListPages/PetProcedures/FormPetProcedures';
import HealthPlans from '../pages/ListPages/HealthPlans';
import FormHealthPlans from '../pages/ListPages/HealthPlans/FormHealthPlans';
import PetProcedures from '../pages/ListPages/PetProcedures';
import FormFinancial from '../pages/ListPages/Financial';
import FormBill from '../pages/FormsPages/FormBill';
import Accreditations from '../pages/ListPages/Accreditations';
import FormAccreditations from '../pages/ListPages/Accreditations/FormAccreditations';
import ProfilePet from '../pages/site/perfil';
import profileCustomer from '../pages/site/perfilCustomer';
import UserLogin from '../pages/site/Login';
import UserLogup from '../pages/site/Logup';
import FirstAccess from '../pages/site/FirstAccess';
import MyPets from '../pages/site/MyPets';
import PaymentPlan from '../pages/site/Payment';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SingIn} />
    <Route path="/register_user" component={FormUsers} />
    <Route path="/register_financial" component={FormFinancial} />
    <Route path="/register_bill" component={FormBill} />
    <Route path="/edit_user/" component={FormUsers} />
    <Route path="/register_animal_type" component={FormAnimalType} />
    <Route path="/register_animal_breed" component={FormAnimalBreed} />
    <Route path="/register_modalities" component={FormModalities} />
    <Route path="/register_accounts_category" component={FormBillsCategory} />
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
    <Route path="/accreditations" component={Accreditations} />
    <Route path="/edit_accreditation/" component={FormAccreditations} />
    <Route path="/profilePet" component={ProfilePet} />
    <Route path="/customer/:id" component={profileCustomer} />

    <Route path="/login/:id" component={UserLogin} />
    <Route path="/logup/:id" component={UserLogup} />
    <Route path="/first_access/:id" component={FirstAccess} />
    <Route path="/my_pets" component={MyPets} />
    <Route path="/payment_plan" component={PaymentPlan} />
  </Switch>
);
export default Routes;
