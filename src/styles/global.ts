import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 10px;
  }

  body, #root {
    min-height: 100vh;
    width: 100%;
  }

  body,
    input,
    textarea,
    select,
    button {
      font-family: ${({ theme }) => theme.font.family.source};
      font-size: ${({ theme }) => theme.font.sizes.medium};
    }

    img {
      max-width: 100%;
    }

  input {
    border: 0;
  }

  input:focus, textarea:focus, select:focus{
      outline: none;
  }

  html {
    font-size: 62.5%;
  }
`;

export default GlobalStyles;
