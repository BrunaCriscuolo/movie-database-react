import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './routes';

import Teste from '../pages/Teste';

const Routes = () => (
  <Switch>
    <Route path='/' exact component={Teste} />
  </Switch>
);

export default Routes;
