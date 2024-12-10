import React from 'react';  
import { render, screen } from '@testing-library/react';  
import '@testing-library/jest-dom';  
import App from './App';  

test('renders welcome message', () => {  
  render(<App />);  
  const welcomeElement = screen.getByText(/Welcome to Polygon Panda Party!/i);  
  expect(welcomeElement).toBeInTheDocument();  
});  