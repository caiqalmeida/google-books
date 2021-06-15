import React from 'react';

import SearchBox from '../../components/SearchBox';

import { LayoutWrapper } from './styles';

const Layout: React.FC = (props) => {
  return (
    <LayoutWrapper>
      <SearchBox />
      {props.children}
    </LayoutWrapper>
  );
};
export default Layout;
