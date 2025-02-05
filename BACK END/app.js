const express = require('express');
const app = express();
const port = 5000;

// Define the root route (/)
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(port, () => {
  console.log(`Express server running at http://localhost:${port}`);
});
