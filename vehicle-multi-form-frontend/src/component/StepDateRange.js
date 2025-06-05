import React, { useState } from 'react';

const StepDateRange = ({ startDate, endDate, onChange }) => {
  const [start, setStart] = useState(startDate || '');
  const [end, setEnd] = useState(endDate || '');

  const handleStartChange = (e) => {
    setStart(e.target.value);
    onChange(e.target.value, end);
  };

  const handleEndChange = (e) => {
    setEnd(e.target.value);
    onChange(start, e.target.value);
  };

  return (
    <div>
      <h2>Select Booking Date Range</h2>
      <label>
        Start Date:{' '}
        <input type="date" value={start} onChange={handleStartChange} />
      </label>
      <br />
      <label>
        End Date:{' '}
        <input type="date" value={end} onChange={handleEndChange} />
      </label>
    </div>
  );
};

export default StepDateRange;
