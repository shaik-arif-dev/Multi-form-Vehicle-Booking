import React from 'react';
import { CheckCircleOutline } from '@mui/icons-material';
import { 
  Box, 
  Typography, 
  Paper, 
  Button, 
  Divider, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemIcon,
} from '@mui/material';
import { format } from 'date-fns';
import axios from 'axios';
import { API_BASE } from '../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const StepSummary = ({ formData, prevStep, onSubmit, resetForm }) => {
  const navigate = useNavigate();
  if (!formData) return <Typography>No data to display.</Typography>;

const handleSubmit = async () => {
  try {
    // Ensure dates are in ISO format
    const formatDate = (date) => {
      if (!date) return null;
      return new Date(date).toISOString().split('T')[0]; // Format as YYYY-MM-DD
    };

    const bookingData = {
      vehicleId: formData.vehicleId,
      user: formData.user || 'Unknown User',
      startDate: formatDate(formData.startDate),
      endDate: formatDate(formData.endDate)
    };

    console.log('Submitting booking data:', bookingData);

    const response = await axios.post(`${API_BASE}/bookings`, bookingData, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (onSubmit) {
      await onSubmit(formData);
      toast.success('🎉 Booking submitted successfully!'+response.data.id, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      resetForm();
      navigate('/bookings');
    }
  } catch (error) {
    console.error('Full error object:', error);
    const errorMessage = error.response?.data?.error || error.message || 'Failed to submit booking';
    
    toast.error(`❌ ${errorMessage}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
};

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Typography variant="h4" gutterBottom align="center" color="primary">
        Review Your Booking
      </Typography>
      
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckCircleOutline color="primary" />
            </ListItemIcon>
            <ListItemText 
              primary="Personal Information" 
              secondary={`${formData.firstName} ${formData.lastName}`}
            />
          </ListItem>
          
          <Divider variant="inset" component="li" />

          <ListItem>
            <ListItemIcon>
              <CheckCircleOutline color="primary" />
            </ListItemIcon>
            <ListItemText 
              primary="Vehicle Details" 
              secondary={
                <>
                  <Box component="span" display="block">
                    <strong>Wheels:</strong> {formData.wheels}-wheeler
                  </Box>
                  <Box component="span" display="block">
                    <strong>Type:</strong> {formData.vehicleTypeName || 'Not selected'}
                  </Box>
                  <Box component="span" display="block">
                    <strong>Model:</strong> {formData.vehicleModelName || 'Not selected'}
                  </Box>
                </>
              }
              secondaryTypographyProps={{ component: 'div' }}
            />
          </ListItem>

          <Divider variant="inset" component="li" />

          <ListItem>
            <ListItemIcon>
              <CheckCircleOutline color="primary" />
            </ListItemIcon>
            <ListItemText 
              primary="Booking Period" 
              secondary={
                formData.startDate && formData.endDate 
                  ? `${format(new Date(formData.startDate), 'PPP')} to ${format(new Date(formData.endDate), 'PPP')}`
                  : 'No dates selected'
              }
            />
          </ListItem>
        </List>
      </Paper>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
        <Button
          variant="outlined"
          onClick={prevStep}
          sx={{ minWidth: '120px' }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ minWidth: '120px' }}
        >
          Confirm Booking
        </Button>
      </Box>
    </Box>
  );
};

export default StepSummary;