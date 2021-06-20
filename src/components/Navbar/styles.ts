import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const NavbarWrapper = styled.nav`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white_600};
  padding: 10px 50px;
  position: fixed;
  bottom: 0;
  left: 0;
`;

export const NavbarList = styled.div`
  max-width: calc(800px - 48px);
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    stroke: ${({ theme }) => theme.colors.gray_300};
    margin-bottom: 10px;
  }
`;

export const NavbarItemLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    stroke: ${({ theme }) => theme.colors.gray_300};
    margin-bottom: 10px;
  }

  &.selected {
    span {
      color: ${({ theme }) => theme.colors.black_700};
    }
  }
`;

export const NavbarItemImg = styled.img``;

export const NavbarItemText = styled.span`
  color: ${({ theme }) => theme.colors.gray_300};
`;
