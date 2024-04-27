import React from 'react';

function ProgressBar({ min, max }) {
  // Pourcentage basé sur le min et le max uniquement
  const percentage = ((max - min) / (max - min)) * 100;

  return (
    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={max} aria-valuemin={min} aria-valuemax={max}>
      <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
    </div>
  );
}

export default ProgressBar;
