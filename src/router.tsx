import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home, Search } from './pages';
import Layout from './components/Layout';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
