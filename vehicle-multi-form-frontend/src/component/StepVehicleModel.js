import React, { useEffect, useState } from 'react';
import { fetchVehicles } from '../services/api';
import { Button, Box, Typography, Radio, RadioGroup, FormControlLabel, CircularProgress } from '@mui/material';

const StepVehicleModel = ({ nextStep, prevStep, handleDataChange, data }) => {
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(data.vehicleId || '');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadVehicles = async () => {
      if (!data.vehicleType) {
        setError('No vehicle type selected');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await fetchVehicles(data.vehicleType);
        setVehicles(response.data);
        console.log(response.data);
        
        // Auto-select the first vehicle if none is selected
        if (!data.vehicleId && response.data.length > 0) {
          setSelectedVehicle(response.data[0].id);
        }
      } catch (err) {
        console.error('Error loading vehicles:', err);
        setError('Failed to load vehicle models. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    loadVehicles();
  }, [data.vehicleType, data.vehicleId]);

  const handleNext = () => {
    if (selectedVehicle) {
      handleDataChange({ vehicleId: selectedVehicle });
      nextStep();
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="300px">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box textAlign="center" p={4}>
        <Typography color="error" gutterBottom>{error}</Typography>
        <Button variant="outlined" onClick={prevStep} sx={{ mt: 2 }}>
          Go Back
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Select Vehicle Model
      </Typography>
      
      <Box mb={4} p={3} sx={{ border: '1px solid #e0e0e0', borderRadius: 1, minHeight: '200px' }}>
        {vehicles.length === 0 ? (
          <Typography>No vehicle models available for the selected type.</Typography>
        ) : (
          <RadioGroup
            value={selectedVehicle}
            onChange={(e) => setSelectedVehicle(e.target.value)}
          >
            {vehicles.map((vehicle) => {
              console.log('Vehicle data:', vehicle); // Log the vehicle object to see its structure
              return (
                <FormControlLabel
                  key={vehicle.id}
                  value={vehicle.id}
                  control={<Radio />}
                  label={`${vehicle.name || 'Unnamed Vehicle'}`}
                  sx={{
                    display: 'block',
                    mb: 1,
                    p: 1.5,
                    borderRadius: 1,
                    '&:hover': { backgroundColor: 'action.hover' },
                    backgroundColor: selectedVehicle === vehicle.id ? 'action.selected' : 'transparent',
                    transition: 'background-color 0.2s',
                  }}
                />
              );
            })}
          </RadioGroup>
        )}
      </Box>

      <Box display="flex" justifyContent="space-between">
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
          onClick={handleNext}
          disabled={!selectedVehicle}
          sx={{ minWidth: '120px' }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default StepVehicleModel;
