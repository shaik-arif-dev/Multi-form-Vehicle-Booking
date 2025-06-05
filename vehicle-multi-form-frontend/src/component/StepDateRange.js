import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography, FormHelperText } from '@mui/material';

const StepDateRange = ({ startDate, endDate, handleDataChange, nextStep, prevStep, formData }) => {
  const [start, setStart] = useState(startDate || '');
  const [end, setEnd] = useState(endDate || '');
  const [error, setError] = useState('');

  useEffect(() => {
    // Initialize dates from formData if available
    if (formData.startDate) setStart(formData.startDate);
    if (formData.endDate) setEnd(formData.endDate);
  }, [formData]);

  const validateDates = (start, end) => {
    if (!start || !end) return 'Both dates are required';
    if (new Date(start) > new Date(end)) return 'End date must be after start date';
    if (new Date(start) < new Date().setHours(0, 0, 0, 0)) return 'Start date cannot be in the past';
    return '';
  };

  const handleNext = () => {
    const validationError = validateDates(start, end);
    if (validationError) {
      setError(validationError);
      return;
    }
    
    setError('');
    handleDataChange({ 
      startDate: start,
      endDate: end
    });
    nextStep();
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Select Booking Date Range
      </Typography>
      
      <Box mb={3} sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
        <TextField
          label="Start Date"
          type="date"
          value={start}
          onChange={(e) => {
            setStart(e.target.value);
            if (error) setError(validateDates(e.target.value, end));
          }}
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          inputProps={{
            min: new Date().toISOString().split('T')[0]
          }}
        />
        
        <TextField
          label="End Date"
          type="date"
          value={end}
          onChange={(e) => {
            setEnd(e.target.value);
            if (error) setError(validateDates(start, e.target.value));
          }}
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          inputProps={{
            min: start || new Date().toISOString().split('T')[0]
          }}
        />
      </Box>
      
      {error && (
        <FormHelperText error sx={{ mb: 2, display: 'block' }}>
          {error}
        </FormHelperText>
      )}

      <Box display="flex" justifyContent="space-between" mt={4}>
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
          disabled={!start || !end}
          sx={{ minWidth: '120px' }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default StepDateRange;