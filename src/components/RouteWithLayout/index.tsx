import React from 'react';

import { Route, RouteProps } from 'react-router-dom';

import Layout from '../Layout';

interface RouteWithLayoutProps extends RouteProps {
  // eslint-disable-next-line
  component: any;
}

const RouteWithLayout = ({
  component: Component,
  ...rest
}: RouteWithLayoutProps) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};
export default RouteWithLayout;
