import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";
import "./style/style.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/index";
import { GlobalContextWrapper } from "./context/global-context";
import ErrorBoundary from "./components/error-boundary";

ReactDOM.render(
  <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <GlobalContextWrapper>
        <CssBaseline />
        <App />
      </GlobalContextWrapper>
    </ThemeProvider>
  </ErrorBoundary>,
  document.getElementById("root")
);
