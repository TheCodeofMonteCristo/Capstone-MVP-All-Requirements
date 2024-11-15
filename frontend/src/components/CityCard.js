import React from 'react';

function CityCard({ city }) {
  return (
    <div className="city-card">
      <img src={city.imageUrl} alt={city.name} />
      <h3>{city.name}</h3>
      <p>{city.description}</p>
      <p>Price: ${city.price}</p>
    </div>
  );
}

export default CityCard;
