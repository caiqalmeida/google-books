import React from 'react';

import {
  NavbarItem,
  NavbarItemImg,
  NavbarItemText,
  NavbarList,
  NavbarWrapper,
} from './styles';

import { ReactComponent as HomeIcon } from '../../assets/img/nav_home.svg';
import { ReactComponent as LibrariesIcon } from '../../assets/img/nav_book.svg';
import { ReactComponent as ProfileIcon } from '../../assets/img/nav_user.svg';

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarList>
        <NavbarItem exact to="/" activeClassName="selected">
          <HomeIcon stroke="pink" />
          <NavbarItemText>Home</NavbarItemText>
        </NavbarItem>
        <NavbarItem exact to="/details" activeClassName="selected">
          <LibrariesIcon />
          <NavbarItemText>Libraries</NavbarItemText>
        </NavbarItem>
        <NavbarItem exact to="/search" activeClassName="selected">
          <ProfileIcon />
          <NavbarItemText>Profile</NavbarItemText>
        </NavbarItem>
      </NavbarList>
    </NavbarWrapper>
  );
};

export default Navbar;
