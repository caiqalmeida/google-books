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
      white_600: string;
      gray_200: string;
      gray_300: string;
      gray_500: string;
      black_500: string;
      black_600: string;
      black_650: string;
      black_680: string;
      black_700: string;
      black_750: string;
      black_800: string;
      black_900: string;
      yellow_100: string;
      yellow_200: string;
      orange_500: string;
      blue_500: string;
    };
  }
}
