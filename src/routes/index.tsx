import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SingIn from '../pages/SignIn';
import FormUsers from '../pages/FormUsers';
import People from '../pages/Registrations/People';
import PadraoAdd from '../pages/PadraoAdd';
import PadraoList from '../pages/PadraoList';
import AnimalType from '../pages/Registrations/AnimalType';
import FormAnimalType from '../pages/FormAnimalType';
import FormAnimalBreed from '../pages/FormAnimalBreed';
import FormModalities from '../pages/FormModalities';
import AnimalBreed from '../pages/Registrations/AnimalBreed';
import Modalities from '../pages/Registrations/Modalities';
import BillsCategory from '../pages/Registrations/BillsCategory';
import FormBillsCategory from '../pages/FormBillsCategory';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SingIn} />
    <Route path="/cadastro_usuario" component={FormUsers} />
    <Route path="/cadastro_animal_tipo" component={FormAnimalType} />
    <Route path="/cadastro_animal_raca" component={FormAnimalBreed} />
    <Route path="/cadastro_modalidades" component={FormModalities} />
    <Route path="/usuario" component={People} />
    <Route path="/padrao_add" component={PadraoAdd} />
    <Route path="/padrao_list" component={PadraoList} />
    <Route path="/animaltype" component={AnimalType} />
    <Route path="/animalbreed" component={AnimalBreed} />
    <Route path="/modalidades" component={Modalities} />
    <Route path="/contas_categorias" component={BillsCategory} />
    <Route path="/cadastro_contas_categoria" component={FormBillsCategory} />
  </Switch>
);
export default Routes;
