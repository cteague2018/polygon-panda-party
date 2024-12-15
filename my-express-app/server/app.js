// server/app.js  
const express = require('express');  
const helmet = require('helmet');  
const securityMiddleware = require('./middleware/security');  
const routes = require('./routes/index');  
  
const app = express();  
  
// Use security middleware for CSP  
app.use(securityMiddleware);  
  
// Parse JSON bodies  
app.use(express.json());  
  
// Use routes  
app.use('/', routes);  
  
// Error handling middleware  
app.use((err, req, res, next) => {  
  console.error(err.stack);  
  res.status(500).send('Something broke!');  
});  
  
module.exports = app;  