// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      family: {
        source: string;
        playfair: string;
        roboto: string;
      };
      light: number;
      normal: number;
      bold: number;
      sizes: {
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
      };
    };
    colors: {
      white_500: string;
      gray_100: string;
      gray_200: string;
      gray_500: string;
      black_500: string;
      black_600: string;
      black_650: string;
      black_700: string;
      black_800: string;
      orange_500: string;
      blue_500: string;
    };
  }
}
