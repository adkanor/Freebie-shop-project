import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import "@testing-library/jest-dom/extend-expect";

jest.mock("react-router-dom", () => ({
  Link: ({ children }) => <a>{children}</a>,
  useNavigate: jest.fn(),
}));
jest.mock("react-redux", () => ({
  useSelector: jest.fn(() => {}),
  useDispatch: jest.fn(() => {})
}));


describe("Header Component", () => {
  it("renders the Header component", () => {
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: true,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));
    const dispatch = jest.fn();
  useDispatch.mockReturnValue(dispatch);
    
    render(<Header />);

    expect(screen.getByText("SHOP.CO")).toBeInTheDocument();
  });

  it("toggles navigation menu when menu button is clicked", () => {
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: true,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));
    const dispatch = jest.fn();
  useDispatch.mockReturnValue(dispatch);
    
    const cartAmount = [];
    const favoriteAmount = [];
    jest.spyOn(React, "useState").mockReturnValueOnce([cartAmount, jest.fn()]);
    jest.spyOn(React, "useState").mockReturnValueOnce([favoriteAmount, jest.fn()]);

    render(<Header />);

    const menuButton = screen.getByTestId("menu-button");
    expect(menuButton).toBeInTheDocument();
    expect(screen.queryByTestId("navigation-menu")).toBeNull();

    fireEvent.click(menuButton);
  });

  it("toggles search bar when search button is clicked", () => {
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: true,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));
    const dispatch = jest.fn();
  useDispatch.mockReturnValue(dispatch);
    
    const cartAmount = [];
    const favoriteAmount = [];
    jest.spyOn(React, "useState").mockReturnValueOnce([cartAmount, jest.fn()]);
    jest.spyOn(React, "useState").mockReturnValueOnce([favoriteAmount, jest.fn()]);

    render(<Header />);

    const searchButton = screen.getByAltText("Search SVG");
    expect(searchButton).toBeInTheDocument();
    expect(screen.queryByAltText("Close SVG")).toBeNull();

    fireEvent.click(searchButton);

    expect(screen.getByAltText("Close SVG")).toBeInTheDocument();
  });
});
