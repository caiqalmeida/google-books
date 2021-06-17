import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home, Search, Details } from './pages';
import RouteWithlayout from './components/RouteWithLayout';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <RouteWithlayout exact path="/" component={Home} />
        <RouteWithlayout exact path="/search" component={Search} />
        <Route exact path="/details" component={Details} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
