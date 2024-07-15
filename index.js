// index.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // For parsing application/json

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Sample API endpoint
app.get('/api/data', (req, res) => {
  res.json({
    message: 'This is your data!',
    data: [1, 2, 3, 4, 5]
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
