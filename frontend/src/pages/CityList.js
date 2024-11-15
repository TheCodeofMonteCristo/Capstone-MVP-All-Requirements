import React, { useState, useEffect } from 'react';
import CityCard from '../components/CityCard';
import axios from 'axios';

function CityList() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    // Fetch cities from the backend API
    axios.get('/api/cities')
      .then(response => {
        setCities(response.data);
      })
      .catch(error => {
        console.error('Error fetching cities:', error);
      });
  }, []);

  return (
    <div className="city-list">
      {cities.map(city => (
        <CityCard key={city.id} city={city} />
      ))}
    </div>
  );
}

export default CityList;
