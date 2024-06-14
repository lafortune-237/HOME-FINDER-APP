import React from 'react';

const HouseDetail = ({ house }) => {
  if (!house) return <div>Select a house to see details</div>;

  return (
    <div>
      <h2>{house.name}</h2>
      <p>Address: {house.address}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default HouseDetail;
