const express = require('express');
const cors = require("cors");

const app = express();
const PORT = 4000;

// Health API
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    message: 'Server is healthy',
    timestamp: new Date().toISOString()
  });
});

// Another GET API
app.get('/api/info', (req, res) => {
  res.status(200).json({
    name: 'Express Demo API',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});