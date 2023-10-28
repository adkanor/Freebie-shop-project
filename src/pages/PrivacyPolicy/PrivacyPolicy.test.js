import React from 'react';
import { render, screen } from '@testing-library/react';
import PrivacyPolicy from './PrivacyPolicy';
import { MemoryRouter } from 'react-router-dom';
import "@testing-library/jest-dom/extend-expect"; 

test('Privacy Policy page scrolls to top', () => {
    const scrollToMock = jest.fn();
    window.scrollTo = scrollToMock;
  
    render(
      <MemoryRouter>
        <PrivacyPolicy />
      </MemoryRouter>
    );
  
    expect(scrollToMock).toHaveBeenCalledWith(0, 0);
  
    window.scrollTo = jest.fn();
  });

test('Privacy Policy page renders without errors', () => {
    render(
        <MemoryRouter>
          <PrivacyPolicy />
        </MemoryRouter>
      );  
  const pageTitle = screen.getByText('Privacy Policy');
  expect(pageTitle).toBeInTheDocument();

});

  test('Privacy Policy page applies styles correctly', () => {
    render(
      <MemoryRouter>
        <PrivacyPolicy />
      </MemoryRouter>
    );
  
    const pageTitle = screen.getByText('Privacy Policy');
    expect(pageTitle).toHaveStyle('font-size: 2em');
  });
  