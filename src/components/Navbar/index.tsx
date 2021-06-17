import React from 'react';

import {
  NavbarItem,
  NavbarItemImg,
  NavbarItemText,
  NavbarList,
  NavbarWrapper,
} from './styles';

import HomeIcon from '../../assets/img/nav_home.svg';
import LibrariesIcon from '../../assets/img/nav_book.svg';
import ProfileIcon from '../../assets/img/nav_user.svg';

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarList>
        <NavbarItem>
          <NavbarItemImg src={HomeIcon} alt="Home icon" />
          <NavbarItemText>Home</NavbarItemText>
        </NavbarItem>
        <NavbarItem>
          <NavbarItemImg src={LibrariesIcon} alt="Libraries icon" />
          <NavbarItemText>Libraries</NavbarItemText>
        </NavbarItem>
        <NavbarItem>
          <NavbarItemImg src={ProfileIcon} alt="Profile icon" />
          <NavbarItemText>Profile</NavbarItemText>
        </NavbarItem>
      </NavbarList>
    </NavbarWrapper>
  );
};

export default Navbar;
