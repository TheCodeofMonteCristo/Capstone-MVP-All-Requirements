import React, { useState, useEffect } from 'react';
import CityCard from '../components/CityCard'; // Import the CityCard component
import axios from 'axios'; // Axios to handle HTTP requests (optional, depending on your backend)

function CityList() {
  const [cities, setCities] = useState([]);

  // Fetch city data when the component mounts
  useEffect(() => {
    // Simulate fetching data from the backend API (you can replace this with an actual API call)
    axios.get('/api/cities') // Replace with your actual backend API endpoint
      .then(response => {
        setCities(response.data); // Set the fetched city data into the state
      })
      .catch(error => {
        console.error('Error fetching cities:', error); // Handle any errors
      });
  }, []);

  return (
    <div className="city-list">
      <h2>Available Cities for Purchase</h2>
      <div className="city-list__grid">
        {cities.map(city => (
          <CityCard key={city.id} city={city} /> // Render a CityCard for each city in the list
        ))}
      </div>
    </div>
  );
}

export default CityList;
