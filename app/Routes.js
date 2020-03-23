import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes.json';
import App from './containers/App';
import LandingPage from './containers/LandingPage';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
import MainPage from './containers/MainPage';

export default () => (
  <App>
    <Switch>
      <Route path={routes.LANDING} exact component={LandingPage} />
      <Route path={routes.LOGIN} exact component={LoginPage} />
      <Route path={routes.REGSITER} exact component={RegisterPage} />
      <Route path={routes.HOME} exact component={MainPage} />
    </Switch>
  </App>
);
