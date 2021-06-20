import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 50px 24px 80px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.yellow_100};
  min-height: 100vh;
`;
