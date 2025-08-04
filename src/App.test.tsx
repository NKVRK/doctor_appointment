import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MediBook header', () => {
  const mockSetIsDarkMode = jest.fn();
  render(<App isDarkMode={true} setIsDarkMode={mockSetIsDarkMode} />);
  const headerElement = screen.getByText(/MediBook/i);
  expect(headerElement).toBeInTheDocument();
});