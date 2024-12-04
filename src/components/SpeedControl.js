import React from 'react';

const SpeedControl = ({ speed, setSpeed, isSorting }) => {
  return (
    <div>
      <label>Speed:</label>
      <input
        type="range"
        min="10"
        max="1000"
        step="10"
        value={speed}
        onChange={(e) => setSpeed(Number(e.target.value))}
        disabled={isSorting}
      />
    </div>
  );
};

export default SpeedControl;
