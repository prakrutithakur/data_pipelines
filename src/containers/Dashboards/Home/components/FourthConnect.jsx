import React from 'react';

const FourthConnect = ({ status }) => {
  return (
    <svg
      width="184"
      height="104"
      viewBox="0 0 184 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="182"
        height="102"
        rx="11"
        fill="#F8A774"
        stroke="#555555"
        strokeWidth="2"
      />
      <circle cx="171" cy="13" r="5" fill={status ? status : '#C74D4D'} />
    </svg>
  );
};

export default FourthConnect;
