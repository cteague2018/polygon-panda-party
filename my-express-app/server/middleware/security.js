// server/middleware/security.js    
const helmet = require('helmet');    
  
const securityMiddleware = helmet.contentSecurityPolicy({    
  directives: {    
    defaultSrc: ["'self'"],    
    scriptSrc: [  
      "'self'",   
      "'unsafe-inline'",   
      "'unsafe-eval'", // Allow eval for scripts (use cautiously)  
      "https://unpkg.com",   
      "https://vercel.live" // Allow Vercel scripts  
    ],    
    styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],    
    imgSrc: ["'self'", "data:"],    
    connectSrc: ["'self'"],    
    // Add other directives as needed    
  },    
});    
  
module.exports = securityMiddleware;  