import React from 'react';
import { Container, CssBaseline, Button, Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import StepForm from './component/StepForm';
import AllBookings from './component/Bookings/AllBookings';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <Container maxWidth="sm">
      <h1 className="text-3xl font-bold text-center mt-6">Vehicle Booking System</h1>
      <Box display="flex" flexDirection="column" gap={2} mt={4} alignItems="center">
        <Button 
          variant="contained" 
          color="primary" 
          size="large" 
          fullWidth
          onClick={() => navigate('/new-booking')}
        >
          Create New Booking
        </Button>
        <Button 
          variant="outlined" 
          color="primary" 
          size="large" 
          fullWidth
          onClick={() => navigate('/bookings')}
        >
          View All Bookings
        </Button>
      </Box>
    </Container>
  );
};

function App() {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-booking" element={
          <Container maxWidth="sm">
            <StepForm />
          </Container>
        } />
        <Route path="/bookings" element={<AllBookings />} />
      </Routes>
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
    </Router>
  );
}

export default App;