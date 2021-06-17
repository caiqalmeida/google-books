import styled from 'styled-components';

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
`;

export const NavbarItemImg = styled.img`
  margin-bottom: 10px;
`;

export const NavbarItemText = styled.span`
  color: ${({ theme }) => theme.colors.black_700};
`;
