import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Reset } from "styled-reset";
import { ThemeProvider } from "styled-components";

import { theme } from "theme";
import GlobalStyles from "theme/globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
