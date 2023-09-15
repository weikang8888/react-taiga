import React from 'react';

const PriceRangeDisplay = ({ minValue, maxValue }) => {
  return (
    <div className="price-range-display">
      Price: RM{minValue} - RM{maxValue}
    </div>
  );
};

export default PriceRangeDisplay;
