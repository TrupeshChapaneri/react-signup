import React from "react";
import { Container, Paper } from "@mui/material";

function UnAuthenticatedLayout({ children }) {
  return (
    <Container component="main" className="signin-wrap">
      <Paper variant="outlined" className="signin-wrap-form">
        {children}
      </Paper>
    </Container>
  );
}

export { UnAuthenticatedLayout };
