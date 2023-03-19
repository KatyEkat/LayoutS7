import { createGlobalStyle } from "styled-components";
import NimbusSanL from "./asserts/fonts/nimbus-sans-l/NimbusSanL-Reg.otf";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1.5;
  }


  @font-face {
    font-family: 'Nimbus Sans L';
    src: url(${NimbusSanL}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  html {
    font-family: 'Nimbus Sans L';
  }
  
  body {
    position: relative;
  }
  a{
    text-decoration: none;
  }

  h1 {
    font-family: 'Nimbus Sans L';

  }

  h2 {
    font-family: 'Nimbus Sans L';

  }
`;