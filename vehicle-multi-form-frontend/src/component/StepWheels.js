import React from 'react';
import { Button, Box, Typography, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const StepWheels = ({ nextStep, handleDataChange, data }) => {
  const [wheels, setWheels] = React.useState(data.wheels || 4);

  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setWheels(value);
  };

  const handleNext = () => {
    handleDataChange({ wheels });
    nextStep();
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Select Number of Wheels
      </Typography>
      
      <Box mb={4} p={3} sx={{ border: '1px solid #e0e0e0', borderRadius: 1 }}>
        <RadioGroup
          row
          aria-label="wheels"
          name="wheels"
          value={wheels}
          onChange={handleChange}
        >
          <FormControlLabel 
            value={2} 
            control={<Radio />} 
            label="2-Wheeler"
            sx={{ mr: 3 }}
          />
          <FormControlLabel 
            value={4} 
            control={<Radio />} 
            label="4-Wheeler"
          />
        </RadioGroup>
      </Box>

      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          sx={{ minWidth: '120px' }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default StepWheels;
