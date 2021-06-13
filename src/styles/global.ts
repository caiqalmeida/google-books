import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 10px;
  }

  body,
    input,
    textarea,
    select,
    button {
      font-family: ${({ theme }) => theme.font.family};
      font-size: ${({ theme }) => theme.font.sizes.medium};
    }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.colors.purple};
  }
`;

export default GlobalStyles;
