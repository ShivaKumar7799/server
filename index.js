// index.js
const express = require('express');
const cors = require('cors'); // Import cors package
const app = express();
const port = process.env.PORT || 3000; // Use the PORT from the environment or default to 3000

// Use CORS middleware
app.use(cors()); // This will allow all origins by default

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello, World!'); // Respond with "Hello, World!"
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
