const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import API routes
const generatePdf = require('./api/generate-pdf');

// Route for PDF generation
app.post('/api/generate-pdf', generatePdf);

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
