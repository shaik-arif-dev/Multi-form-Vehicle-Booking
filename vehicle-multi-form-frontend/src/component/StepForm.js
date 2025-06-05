import React, { useState } from 'react';
import StepName from './StepName';
import StepWheels from './StepWheels';
import StepVehicleType from './StepVehicleType';
import StepVehicleModel from './StepVehicleModel';
import StepDateRange from './StepDateRange';
import StepSummary from './StepSummary';

const StepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    wheels: '',
    vehicleType: '',
    vehicleId: '',
    startDate: null,
    endDate: null
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleDataChange = (input) => {
    setFormData({
      ...formData,
      ...input
    });
  };

  switch (step) {
    case 1:
      return <StepName nextStep={nextStep} handleDataChange={handleDataChange} data={formData} />;
    case 2:
      return <StepWheels nextStep={nextStep} prevStep={prevStep} handleDataChange={handleDataChange} data={formData} />;
    case 3:
      return <StepVehicleType nextStep={nextStep} prevStep={prevStep} handleDataChange={handleDataChange} data={formData} />;
    case 4:
      return <StepVehicleModel nextStep={nextStep} prevStep={prevStep} handleDataChange={handleDataChange} data={formData} />;
    case 5:
      return <StepDateRange nextStep={nextStep} prevStep={prevStep} handleDataChange={handleDataChange} data={formData} />;
    case 6:
      return <StepSummary prevStep={prevStep} data={formData} />;
    default:
      return null;
  }
};

export default StepForm;
