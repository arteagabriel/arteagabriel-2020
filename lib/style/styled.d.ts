import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      dark: string;
      light: string;
      primary: string;
    }
  }
}