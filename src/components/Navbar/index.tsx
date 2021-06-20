import React from 'react';

import {
  NavbarItem,
  NavbarItemLink,
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
        <NavbarItemLink exact to="/" activeClassName="selected">
          <HomeIcon stroke="pink" />
          <NavbarItemText>Home</NavbarItemText>
        </NavbarItemLink>
        <NavbarItem>
          <LibrariesIcon />
          <NavbarItemText>Libraries</NavbarItemText>
        </NavbarItem>
        <NavbarItem>
          <ProfileIcon />
          <NavbarItemText>Profile</NavbarItemText>
        </NavbarItem>
      </NavbarList>
    </NavbarWrapper>
  );
};

export default Navbar;
