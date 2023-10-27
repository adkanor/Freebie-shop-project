import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TermsAndConditions from './TermsAndConditions';
import { BrowserRouter } from 'react-router-dom';


test('Page renders without errors', () => {
  render(<BrowserRouter />);
});

test('Terms and Conditions page scrolls to top', () => {
    const scrollToMock = jest.fn();
    window.scrollTo = scrollToMock;
  
    render(
      <BrowserRouter> 
        <TermsAndConditions />
      </BrowserRouter>
    );
  
    expect(scrollToMock).toHaveBeenCalledWith(0, 0);
  
    window.scrollTo = jest.fn();
  });

test('Page title is visible', () => {
    render(
        <BrowserRouter>
          <TermsAndConditions />
        </BrowserRouter>
      );  const pageTitle = screen.getByText('Terms & Conditions');
  expect(pageTitle).toBeInTheDocument();
});


test('Scrolling to top when the page is mounted', () => {
    render(
        <BrowserRouter>
          <TermsAndConditions />
        </BrowserRouter>
      );  expect(window.scrollY).toBe(0);
});

test('Page contains specific terms and conditions', () => {
    render(
      <BrowserRouter>
        <TermsAndConditions />
      </BrowserRouter>
    );
    expect(screen.getByText('1. Terms and definitions:')).toBeInTheDocument();
    expect(screen.getByText('3. General rules for using the SHOP.CO online store.')).toBeInTheDocument();
  });

  test('Page title has the correct styling', () => {
    render(
      <BrowserRouter>
        <TermsAndConditions />
      </BrowserRouter>
    );
    const pageTitle = screen.getByText('Terms & Conditions');
    const styles = window.getComputedStyle(pageTitle);
    expect(styles.fontSize).toBe('2em');
  });
