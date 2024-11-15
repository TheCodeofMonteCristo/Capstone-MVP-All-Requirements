import axios from 'axios';

// Define the base URL for your API (adjust this as needed)
const BASE_URL = 'http://localhost:5000/api/cities'; // Change to your backend URL

// Function to fetch cities
export const getCities = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching cities:', error);
    throw error;
  }
};

// Function to get a single city by its ID
export const getCityById = async (cityId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${cityId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching city with id ${cityId}:`, error);
    throw error;
  }
};
