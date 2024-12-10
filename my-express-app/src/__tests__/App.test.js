import React from 'react';  
import { render, screen, fireEvent } from '@testing-library/react';  
import '@testing-library/jest-dom';  
import App from '../App';  // Note the changed import path  

describe('Polygon Panda Party App', () => {  
  beforeEach(() => {  
    render(<App />);  
  });  

  test('renders welcome message', () => {  
    const welcomeHeading = screen.getByTestId('welcome-heading');  
    expect(welcomeHeading).toBeInTheDocument();  
    expect(welcomeHeading).toHaveTextContent('Welcome to Polygon Panda Party! 🐼');  
  });  

  test('renders button to view current winners', () => {  
    const button = screen.getByText(/View Current Winners/i);  
    expect(button).toBeInTheDocument();  
  });  

  test('shows winners section when button is clicked', () => {  
    const button = screen.getByText(/View Current Winners/i);  
    fireEvent.click(button);  
    const winnersSection = screen.getByTestId('winners-section');  
    expect(winnersSection).toBeInTheDocument();  
  });  

  test('includes panda emoji in title', () => {  
    const heading = screen.getByTestId('welcome-heading');  
    expect(heading).toHaveTextContent('🐼');  
  });  
});  