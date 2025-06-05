import React from 'react';

const StepVehicleModel = ({ vehicles = [], selectedVehicleId, onSelect }) => {
  return (
    <div>
      <h2>Select Vehicle Model</h2>
      {vehicles.length === 0 && <p>No models available for this type.</p>}
      <div>
        {vehicles.map((vehicle) => (
          <label key={vehicle.id} style={{ display: 'block', margin: '8px 0' }}>
            <input
              type="radio"
              name="vehicleModel"
              value={vehicle.id}
              checked={selectedVehicleId === vehicle.id}
              onChange={() => onSelect(vehicle.id)}
            />
            {' '}
            {vehicle.name}
          </label>
        ))}
      </div>
    </div>
  );
};

export default StepVehicleModel;
