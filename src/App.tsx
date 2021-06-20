import React from 'react';
import { ThemeProvider } from 'styled-components';

import Router from './router';
import SearchProvider from './context/search';
import { theme } from './styles/theme';
import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SearchProvider>
          <GlobalStyles />
          <Router />
        </SearchProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
