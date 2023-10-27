import React from 'react';
import { render, screen } from '@testing-library/react';
import Brands from './Brands';
import '@testing-library/jest-dom/extend-expect'; 



test('отображает бренды, начинающиеся с буквы "A"', () => {
  render(<Brands />);
  const brandA = screen.getByText('Aeronautica Militare'); 
  expect(brandA).toBeInTheDocument();
});

test('отображает бренды, начинающиеся с буквы "B"', () => {
  render(<Brands />);
  const brandB = screen.getByText('Bado'); 
  expect(brandB).toBeInTheDocument();
});

test('отображает бренды, начинающиеся с буквы "C"', () => {
  render(<Brands />);
  const brandC = screen.getByText('Cafe Noir'); 
  expect(brandC).toBeInTheDocument();
});












