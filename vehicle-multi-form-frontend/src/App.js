import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import StepForm from './component/StepForm.js';

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <h1 className="text-3xl font-bold text-center mt-6">Vehicle Booking Form</h1>
        <StepForm />
      </Container>
    </>
  );
}

export default App;
