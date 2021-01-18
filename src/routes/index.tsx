import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SingIn from '../pages/SignIn';
import FormUsers from '../pages/FormUsers';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SingIn} />
    <Route path="/cadastro_usuario" component={FormUsers} />
  </Switch>
);
export default Routes;
