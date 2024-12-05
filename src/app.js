const express = require('express');
const versionRoutes = require('src/routes/versionRoutes');
const config = require('src/config/appConfig');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', versionRoutes);

// Metadata Endpoint
app.get('/', (req, res) => {
  res.json({
    author: config.metadata.author,
    version: config.metadata.version,
    releaseDate: config.metadata.releaseDate,
  });
});

module.exports = app;
