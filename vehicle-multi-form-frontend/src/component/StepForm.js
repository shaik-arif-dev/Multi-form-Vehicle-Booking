import React, { useState } from 'react';
import StepName from './StepName';
import StepWheels from './StepWheels';
import StepVehicleType from './StepVehicleType';
import StepVehicleModel from './StepVehicleModel';
import StepDateRange from './StepDateRange';
import StepSummary from './StepSummary';
import Header from '../component/layout/Header';

const StepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    user: '',
    wheels: 4, // Default to 4 wheels
    vehicleType: '',
    vehicleId: '',
    vehicleName: '',
    startDate: null,
    endDate: null
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const goToStep = (stepNumber) => setStep(stepNumber);

  const handleDataChange = (input) => {
    setFormData(prev => ({
      ...prev,
      ...input
    }));
  };

  const renderStep = () => {
    const commonProps = {
      nextStep,
      prevStep,
      goToStep,
      handleDataChange,
      data: formData,
      formData
    };

    switch (step) {
      case 1: return <StepName {...commonProps} />;
      case 2: return <StepWheels {...commonProps} />;
      case 3: return <StepVehicleType {...commonProps} />;
      case 4: return <StepVehicleModel {...commonProps} />;
      case 5: return <StepDateRange {...commonProps} />;
      case 6: return <StepSummary {...commonProps} />;
      default: return null;
    }
  };

  return (
    <>
    <Header />
    <div style={{ maxWidth: '800px', padding: '20px', margin: '0 auto', marginTop: '20px' }}>
      {renderStep()}
    </div>
    </>
  );
};

export default StepForm;
