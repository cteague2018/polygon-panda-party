module.exports = {  
  content: [  
    "./src/**/*.{js,jsx,ts,tsx}",  
  ],  
  theme: {  
    extend: {  
      fontFamily: {  
        'bubblegum': ['"Bubblegum Sans"', 'cursive'],  
      },  
    },  
  },  
  plugins: [  
    require('@tailwindcss/typography'),  
  ],  
}  