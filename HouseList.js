import React from 'react';

const houses = [
  { id: 1, name: 'House 1', address: '123 Main St' },
  { id: 2, name: 'House 2', address: '456 Oak St' },
  // Add more houses as needed
];

const HouseList = ({ selectHouse }) => {
  return (
    <div>
      <h2>House List</h2>
      <ul>
        {houses.map((house) => (
          <li key={house.id} onClick={() => selectHouse(house)}>
            {house.name} - {house.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HouseList;
