import React from 'react';

const StepVehicleType = ({ vehicleTypes = [], selectedTypeId, onSelect }) => {
  return (
    <div>
      <h2>Select Vehicle Type</h2>
      {vehicleTypes.length === 0 && <p>Loading vehicle types...</p>}
      <div>
        {vehicleTypes.map((type) => (
          <label key={type.id} style={{ display: 'block', margin: '8px 0' }}>
            <input
              type="radio"
              name="vehicleType"
              value={type.id}
              checked={selectedTypeId === type.id}
              onChange={() => onSelect(type.id)}
            />
            {' '}
            {type.name} ({type.category})
          </label>
        ))}
      </div>
    </div>
  );
};

export default StepVehicleType;
