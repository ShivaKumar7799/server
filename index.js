// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the port defined in the environment or default to 3000

app.get('/', (req, res) => {
  res.send('Hello, World!'); // Respond with "Hello, World!"
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
