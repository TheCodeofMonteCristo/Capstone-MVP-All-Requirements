const prisma = require('../config/db');

// Create a new city
const createCity = async (req, res) => {
  const { name, description, price, imageUrl } = req.body;
  try {
    const city = await prisma.city.create({
      data: { name, description, price, imageUrl },
    });
    res.status(201).json(city);
  } catch (error) {
    res.status(500).json({ error: "Failed to create city" });
  }
};

// Get all cities
const getCities = async (req, res) => {
  try {
    const cities = await prisma.city.findMany();
    res.status(200).json(cities);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cities" });
  }
};

// Get a single city by ID
const getCity = async (req, res) => {
  const { id } = req.params;
  try {
    const city = await prisma.city.findUnique({
      where: { id: parseInt(id) },
    });
    if (city) {
      res.status(200).json(city);
    } else {
      res.status(404).json({ error: "City not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch city" });
  }
};

// Update a city
const updateCity = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, imageUrl } = req.body;
  try {
    const updatedCity = await prisma.city.update({
      where: { id: parseInt(id) },
      data: { name, description, price, imageUrl },
    });
    res.status(200).json(updatedCity);
  } catch (error) {
    res.status(500).json({ error: "Failed to update city" });
  }
};

// Delete a city
const deleteCity = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.city.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete city" });
  }
};

module.exports = { createCity, getCities, getCity, updateCity, deleteCity };
