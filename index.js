const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

// Enable CORS
app.use(cors());
app.use(bodyParser.json());

// Import the PDF generation route
const generatePdfRoute = require('./api/generate-pdf');

// Use the generate PDF route
app.use('/api', generatePdfRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
