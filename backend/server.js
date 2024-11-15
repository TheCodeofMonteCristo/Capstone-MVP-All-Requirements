// server.js

require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client'); // Correctly import PrismaClient
const cityRoutes = require('./routes/cityRoutes'); // Import city routes

// Initialize Prisma Client
const prisma = new PrismaClient();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Enable Cross-Origin Requests (CORS)
app.use(cors());

// Set up the API routes
app.use('/api', cityRoutes);

// Define the port for the server
const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    // Connect to the database
    await prisma.$connect();
    console.log('Connected to the database successfully');

    // Start the Express server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
}

// Handle cleanup on shutdown
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  console.log('Database disconnected');
  process.exit(0);
});

// Start the server
startServer();
