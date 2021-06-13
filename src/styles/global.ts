import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 10px;
  }

  body {
    min-height: 100vh;
    width: 100%;
  }

  body,
    input,
    textarea,
    select,
    button {
      font-family: ${({ theme }) => theme.font.family};
      font-size: ${({ theme }) => theme.font.sizes.medium};
    }

    input {
      border: 0;
    }

    input:focus, textarea:focus, select:focus{
        outline: none;
    }

    h1,h2,h3,h4,h5,h6 {
      font-size: ${({ theme }) => theme.font.sizes.xxlarge};
    }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;

export default GlobalStyles;
