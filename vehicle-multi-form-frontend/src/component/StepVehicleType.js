import React, { useState, useEffect } from 'react';
import { fetchVehicleTypes } from '../services/api';
import { Button, Box, Typography, RadioGroup, FormControlLabel, Radio, CircularProgress } from '@mui/material';

const StepVehicleType = ({ nextStep, prevStep, handleDataChange, data }) => {
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [selectedType, setSelectedType] = useState(data.vehicleType || '');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadVehicleTypes = async () => {
      try {
        setLoading(true);
        const response = await fetchVehicleTypes(data.wheels || 4);
        setVehicleTypes(response.data);
        
        // Auto-select the first vehicle type if none is selected
        if (!data.vehicleType && response.data.length > 0) {
          setSelectedType(response.data[0].id);
        }
      } catch (err) {
        console.error('Error loading vehicle types:', err);
        setError('Failed to load vehicle types. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    loadVehicleTypes();
  }, [data.wheels, data.vehicleType]);

  const handleNext = () => {
    if (selectedType) {
      handleDataChange({ vehicleType: selectedType });
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
        Select Vehicle Type
      </Typography>
      
      <Box mb={4} p={3} sx={{ border: '1px solid #e0e0e0', borderRadius: 1 }}>
        {vehicleTypes.length === 0 ? (
          <Typography>No vehicle types available for {data.wheels || 4}-wheelers.</Typography>
        ) : (
          <RadioGroup
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            {vehicleTypes.map((type) => (
              <FormControlLabel
                key={type.id}
                value={type.id}
                control={<Radio />}
                label={`${type.name} (${type.category})`}
                sx={{
                  display: 'block',
                  mb: 1,
                  p: 1.5,
                  borderRadius: 1,
                  '&:hover': { backgroundColor: 'action.hover' },
                  backgroundColor: selectedType === type.id ? 'action.selected' : 'transparent',
                  transition: 'background-color 0.2s',
                }}
              />
            ))}
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
          disabled={!selectedType}
          sx={{ minWidth: '120px' }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default StepVehicleType;
