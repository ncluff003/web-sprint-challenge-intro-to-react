import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
  *::before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font: inherit;
    vertical-align: baseline;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  
  body {
    position: relative;
    height: 100%;
    width: 100vw;
    box-sizing: border-box;
    overflow-x: hidden;
  }
  
  .App {
    position: relative;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyle;
