import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import StepForm from './component/StepForm.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <h1 className="text-3xl font-bold text-center mt-6">Vehicle Booking Form</h1>
        <StepForm />
      </Container>
        {/* Your other components */}
  <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />
    </>
  );
}

export default App;
