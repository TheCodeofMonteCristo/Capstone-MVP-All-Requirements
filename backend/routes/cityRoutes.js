const express = require('express');
const router = express.Router();
const cityController = require('../controllers/cityController');

// Route for creating a city
router.post('/cities', cityController.createCity);

// Route for getting all cities
router.get('/cities', cityController.getCities);

// Route for getting a specific city by ID
router.get('/cities/:id', cityController.getCity);

// Route for updating a city by ID
router.put('/cities/:id', cityController.updateCity);

// Route for deleting a city by ID
router.delete('/cities/:id', cityController.deleteCity);

module.exports = router;




