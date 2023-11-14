import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import "@testing-library/jest-dom/extend-expect";

import Footer from "./Footer";

test("checks if the Footer component renders without errors", () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
  expect(screen.getByText("shop.co")).toBeInTheDocument();
});

test('checks the presence of social media icons', () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
  expect(screen.getByAltText("TwitterIcon")).toBeInTheDocument();
  expect(screen.getByAltText("FaceBookIcon")).toBeInTheDocument();
  expect(screen.getByAltText("InstagramIcon")).toBeInTheDocument();
  expect(screen.getByAltText("GitHubIcon")).toBeInTheDocument();
});

test("checks the presence and functionality of the email subscription form", () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );

  const emailContainerTitle = screen.getByText("Stay Up to Date About Our Latest Offers");
  expect(emailContainerTitle).toBeInTheDocument();

  const emailInput = screen.getByPlaceholderText("Enter your email address");
  expect(emailInput).toBeInTheDocument();

  const subscribeButton = screen.getByText("Subscribe to newsletter");
  expect(subscribeButton).toBeInTheDocument();
});
