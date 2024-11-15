import React from 'react';

function CityCard({ city }) {
  return (
    <div className="city-card">
      <img src={city.imageUrl} alt={city.name} className="city-card__image" />
      <h3 className="city-card__name">{city.name}</h3>
      <p className="city-card__description">{city.description}</p>
      <p className="city-card__price">Price: ${city.price}</p>
      <button className="city-card__buy-button">Buy Now</button>
    </div>
  );
}

export default CityCard;
