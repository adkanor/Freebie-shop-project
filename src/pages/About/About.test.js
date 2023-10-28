import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import About from './About';

test('About page scrolls to top', () => {
  const scrollToMock = jest.fn();
  window.scrollTo = scrollToMock;

  render(
    <BrowserRouter> 
      <About />
    </BrowserRouter>
  );

  expect(scrollToMock).toHaveBeenCalledWith(0, 0);

  window.scrollTo = jest.fn();
});

test('About page contains section titles', () => {
  const { getByText } = render(
    <MemoryRouter>
      <About />
    </MemoryRouter>
  );

  const premiumQualityTitle = getByText('Premium quality');
  const paymentMethodsTitle = getByText('Proven payment methods');
  const sslTitle = getByText('SSL - guarantee of safe purchases');
  const dataSafetyTitle = getByText('Your data is safe with us');
  const guaranteeTitle = getByText((content, element) => {
    return content.includes("We guarantee you successful and safe purchases! See for yourself");
  });
  
  expect(premiumQualityTitle).toBeTruthy();
  expect(paymentMethodsTitle).toBeTruthy();
  expect(sslTitle).toBeTruthy();
  expect(dataSafetyTitle).toBeTruthy();
  expect(guaranteeTitle).toBeTruthy();
});
