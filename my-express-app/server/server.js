const express = require('express');  
const helmet = require('helmet');  

const app = express();  

// Set Content Security Policy  
app.use(helmet.contentSecurityPolicy({  
  directives: {  
    defaultSrc: ["'self'"],  
    scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://cdn.tailwindcss.com", "https://unpkg.com", "https://vercel.live"],  
    styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],  
    imgSrc: ["'self'", "data:"],  
    connectSrc: ["'self'", "https://vercel.live"],  
    // Add other directives as needed  
  },  
}));  

// Your other middleware and routes  
app.get('/', (req, res) => {  
  res.send('Hello, World!'); // Example route  
});  

// Start the server  
app.listen(3000, () => {  
  console.log('Server is running on port 3000');  
});  