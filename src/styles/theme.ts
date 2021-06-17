import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  font: {
    family: {
      source: "'Source Sans Pro', sans-serif",
      playfair: "'Playfair Display', serif",
      roboto: "'Roboto', sans-serif",
    },
    light: 300,
    normal: 400,
    bold: 700,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.4rem',
    },
  },
  colors: {
    white_500: '#FEFEFE',
    white_600: '#FFFFFF',

    gray_200: '#E7E7E1',
    gray_500: '#74776D',

    black_500: '#54565A',
    black_600: '#3F4043',
    black_650: 'rgba(49, 49, 49, 0.6)',
    black_680: 'rgba(49, 49, 49, 0.8)',
    black_700: '#313131',
    black_750: '#36383A',
    black_800: '#2A2B26',

    yellow_100: '#FFFCF9',
    yellow_200: '#fff6e5',

    orange_500: '#FF6978',

    blue_500: '#4ABDF1',
  },
};

export { theme };
