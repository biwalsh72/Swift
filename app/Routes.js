import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes.json';
import App from './containers/App';
import LoginPage from './containers/LoginPage';
import MainPage from './containers/MainPage';

export default () => (
  <App>
    <Switch>
      <Route path={routes.LOGIN} exact component={LoginPage} />
      <Route path={routes.HOME} exact component={MainPage} />
    </Switch>
  </App>
);
