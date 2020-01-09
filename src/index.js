import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

import App from "./App";

import cars from "./cars.json";

const GlobalStyle = createGlobalStyle`
html,
body {
  margin: 0;
  padding: 0;
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  font-size: 10px;
}

`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <App cars={cars} />
  </>,
  document.getElementById("root")
);
