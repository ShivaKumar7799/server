const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

// Enable CORS with explicit origin allowed
const corsOptions = {
  origin: 'http://localhost:3001', // Replace with your frontend URL
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization',
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Preflight request handling (for CORS)
app.options('*', cors(corsOptions)); // Handle preflight requests

// Import the PDF generation route
const generatePdfRoute = require('./api/generate-pdf');

// Use the generate PDF route
app.use('/api', generatePdfRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
