import React from 'react';
import { Button, TextField, Box } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required')
});

const StepName = ({ nextStep, handleDataChange, data }) => {
  const handleSubmit = (values) => {
   // In StepName.js
     const user = `${values.firstName} ${values.lastName}`.trim();
     handleDataChange({ 
       ...values,
       user  // Add the combined name to the form data
     });
     nextStep();
   };

  return (
    <Formik
      initialValues={{ firstName: data.firstName, lastName: data.lastName }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Box mb={2}>
            <Field
              as={TextField}
              name="firstName"
              label="First Name"
              fullWidth
              error={touched.firstName && !!errors.firstName}
              helperText={touched.firstName && errors.firstName}
            />
          </Box>
          <Box mb={2}>
            <Field
              as={TextField}
              name="lastName"
              label="Last Name"
              fullWidth
              error={touched.lastName && !!errors.lastName}
              helperText={touched.lastName && errors.lastName}
            />
          </Box>
          <Button type="submit" variant="contained" fullWidth>
            Next
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default StepName;
