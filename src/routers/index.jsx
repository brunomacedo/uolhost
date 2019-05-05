import React from 'react';
import {
  Route, Switch, BrowserRouter, Redirect,
} from 'react-router-dom';
import Customers from '../containers/Customers';
import CustomersForm from '../containers/Customers/Form';
// import NotFoundPage from '../containers/NotFoundPage';

const MainRouters = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/clientes" component={Customers} />
      <Route exact path="/clientes/:id" component={CustomersForm} />
      <Route exact path="/clientes/novo" component={CustomersForm} />
      <Route render={() => <Redirect to="/clientes" />} />
      {/* <Route component={NotFoundPage} /> */}
    </Switch>
  </BrowserRouter>
);

export default MainRouters;
