import React from 'react';
import { Button, Radio, RadioGroup, FormControlLabel, Box, Typography } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  wheels: Yup.string().required('Select wheels')
});

const StepWheels = ({ nextStep, prevStep, handleDataChange, data }) => {
  const handleSubmit = (values) => {
    handleDataChange(values);
    nextStep();
  };

  return (
    <Formik
      initialValues={{ wheels: data.wheels }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Typography variant="h6" gutterBottom>Select Number of Wheels</Typography>
          <Field as={RadioGroup} name="wheels">
            <FormControlLabel value="2" control={<Radio />} label="2" />
            <FormControlLabel value="4" control={<Radio />} label="4" />
          </Field>
          {touched.wheels && errors.wheels && (
            <Box color="red" mb={2}>{errors.wheels}</Box>
          )}
          <Box mt={2} display="flex" justifyContent="space-between">
            <Button onClick={prevStep}>Back</Button>
            <Button type="submit" variant="contained">Next</Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default StepWheels;
