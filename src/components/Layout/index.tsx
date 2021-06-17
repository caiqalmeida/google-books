import React from 'react';

import SearchBox from '../../components/SearchBox';
import Navbar from '../Navbar';

import { LayoutWrapper } from './styles';

const Layout: React.FC = (props) => {
  return (
    <>
      <LayoutWrapper>
        <SearchBox />
        {props.children}
      </LayoutWrapper>
      <Navbar />
    </>
  );
};
export default Layout;
