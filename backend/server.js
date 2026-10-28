// ==========================================
// Forensic Science Portfolio - Backend Server
// ==========================================

// 1. Import required dependencies
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// 2. Load environment variables from .env file into process.env
dotenv.config();

// 3. Initialize the Express application
const app = express();

// 4. Set server port from environment variable (.env) or default to 5000
const PORT = process.env.PORT || 5000;

// ------------------------------------------
// Middleware Setup
// ------------------------------------------

// Enable CORS so your frontend can communicate with this API
app.use(cors());

// Enable parsing of JSON request bodies
app.use(express.json());

// Enable parsing of URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

const path = require('path');
const fs = require('fs');

// ------------------------------------------
// Static Files Setup (Frontend)
// ------------------------------------------
const frontendRoot = path.join(__dirname, '../frontend');
const frontendPath = fs.existsSync(path.join(frontendRoot, 'priya_saini_portfolio_forensic_science'))
  ? path.join(frontendRoot, 'priya_saini_portfolio_forensic_science')
  : (fs.existsSync(frontendRoot)
      ? frontendRoot
      : path.join(__dirname, '../stitch_forensic_nexus_portfolio/priya_saini_portfolio_forensic_science'));

// Serve the main portfolio folder and the entire frontend directory
app.use(express.static(frontendPath));
if (fs.existsSync(frontendRoot)) {
  app.use(express.static(frontendRoot));
  app.use('/static', express.static(frontendRoot));
}

// ------------------------------------------
// Routes
// ------------------------------------------

// Serve Main Frontend Portfolio at localhost:5000/
app.get('/', (req, res) => {
  const targetFile = fs.existsSync(path.join(frontendPath, 'index.html'))
    ? 'index.html'
    : 'code.html';
  res.sendFile(path.join(frontendPath, targetFile));
});

// GET /api - API status check
app.get('/api', (req, res) => {
  res.json({
    status: 'online',
    project: 'Forensic Science Portfolio API',
    endpoints: {
      test: '/api/test'
    }
  });
});

// GET /api/test - Required test route
app.get('/api/test', (req, res) => {
  res.status(200).json({
    message: 'Backend is working!'
  });
});

// ------------------------------------------
// Error Handling Middleware
// ------------------------------------------

// 404 Handler: Triggered when a requested route does not exist
app.use((req, res, next) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Cannot ${req.method} ${req.originalUrl}`
  });
});

// Global Error Handler: Catches any unhandled errors in route handlers
app.use((err, req, res, next) => {
  console.error('Server Error:', err.stack);
  res.status(err.status || 500).json({
    error: 'Internal Server Error',
    message: err.message || 'Something went wrong on the server.'
  });
});

// ------------------------------------------
// Start Server
// ------------------------------------------
app.listen(PORT, () => {
  console.log(`========================================`);
  console.log(`🚀 Forensic Backend Server is running!`);
  console.log(`📍 URL: http://localhost:${PORT}`);
  console.log(`🧪 Test Endpoint: http://localhost:${PORT}/api/test`);
  console.log(`========================================`);
});
