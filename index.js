const express = require('express');
const cors = require("cors")
const app = express();

const PORT = 4000;

// Middleware (optional but common)
app.use(express.json());
app.use(cors())

// Simple route
app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});

// Another route
app.get('/api', (req, res) => {
  res.json({ message: 'API is working 🚀', port:PORT });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});