import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: {
      small: number;
      medium: number;
      big: number;
    };

    widthPercentage: (widthPercent: string | number) => number;
    heightPercentage: (heightPercent: string | number) => number;

    padding: {
      small: number;
      medium: number;
      big: number;
      large: number;
    };

    colors: {
      primary: string;

      secondary: string;

      danger: string;
      success: string;
      info: string;

      background: {
        primary: string;
      };

      texts: {
        primary: string;
        secondary: string;
      };

      disabled: string;
    };
  }
}
