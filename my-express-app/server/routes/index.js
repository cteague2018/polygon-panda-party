// server/routes/index.js  
const express = require('express');  
const router = express.Router();  
  
// Example route  
router.get('/', (req, res) => {  
  res.send('Hello, World!');  
});  
  
// Add more routes as needed  
  
module.exports = router;  