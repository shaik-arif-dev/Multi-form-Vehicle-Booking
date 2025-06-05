import React from 'react';

const StepSummary = ({ formData }) => {
  if (!formData) return <p>No data to display.</p>;

  return (
    <div>
      <h2>Review Your Booking</h2>
      <p>
        <strong>Name:</strong> {formData.firstName} {formData.lastName}
      </p>
      <p>
        <strong>Number of Wheels:</strong> {formData.wheels}
      </p>
      <p>
        <strong>Vehicle Type:</strong> {formData.vehicleTypeName}
      </p>
      <p>
        <strong>Vehicle Model:</strong> {formData.vehicleModelName}
      </p>
      <p>
        <strong>Booking Dates:</strong> {formData.startDate} to {formData.endDate}
      </p>
      <p>Please confirm your booking information before submitting.</p>
    </div>
  );
};

export default StepSummary;
