import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './routes';

import { Home } from '../pages/Home/home';

const Routes = () => (
  <Switch>
    <Route path='/' exact component={Home} />
  </Switch>
);

export default Routes;
