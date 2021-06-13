import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  font: {
    family: "'Source Sans Pro', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
    },
  },
  colors: {
    purple: '#1a0c4c',
    gradient: 'linear-gradient(45deg, #465af1, #b66aff)',
  },
};

export { theme };
