import React, { useState } from "react";
import LinearStepper from "./LinearStepper";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";



const RegistrationPage1 = () => {
  return (
    <>
    
    <div>

  

    <CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
          <LinearStepper />
        </Paper>
      </Container>
    </div>
    </>
  );
};

export default RegistrationPage1;
