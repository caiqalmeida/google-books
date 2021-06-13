import React from 'react';
import { ThemeProvider } from 'styled-components';

import Router from './router';
import { theme } from './styles/theme';
import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
