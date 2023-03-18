import styled, { createGlobalStyle } from "styled-components";
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

  @font-face {
    font-family: 'Nimbus Sans L';
    src: url(${NimbusSanL}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  html {
    font-family: 'Nimbus Sans L';

  }

  img {
    max-width: 100%;
  }

  a {
    text-decoration: none;
  }

  
  body {
    position: relative;
  }

  h1 {
    font-family: 'Nimbus Sans L';
    font-size: 40px;
    margin-bottom: 10px;
    line-height: 2;
  }

  h2 {
    font-family: 'Nimbus Sans L';
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 2;
  }
`

// export const StyledContainer = styled.div`
//   width: 1160px;
//   margin: 0 auto;
// `;

// export const Overlay = styled.div`
//   position: fixed;
//   width: 100%;
//   height: 100%;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: rgba(0, 0, 0, 0.5);
//   cursor: pointer;
// `
