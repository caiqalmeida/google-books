import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 50px 24px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.yellow_100};
`;
