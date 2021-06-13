import React from 'react';

import { LayoutWrapper } from './styles';

const Layout: React.FC = (props) => {
  return (
    <>
      <LayoutWrapper>{props.children}</LayoutWrapper>
    </>
  );
};
export default Layout;
