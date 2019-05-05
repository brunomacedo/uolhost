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
      <Route exact path="/customers" component={Customers} />
      <Route exact path="/customers/:id" component={CustomersForm} />
      <Route render={() => <Redirect to="/customers" />} />
      {/* <Route component={NotFoundPage} /> */}
    </Switch>
  </BrowserRouter>
);

export default MainRouters;
