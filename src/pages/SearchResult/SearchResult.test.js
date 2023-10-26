import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SearchResult from "./SearchResult";
import { act } from "react-dom/test-utils";
jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));
window.matchMedia = jest.fn().mockImplementation(query => ({
    matches: true,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  }));

jest.mock("../../stores/topSelling/actions");
jest.mock("../../stores/newArrivals/actions");
jest.mock("../../stores/searchResult/actions");

describe("SearchResult Component", () => {
    
window.matchMedia = jest.fn().mockImplementation(query => ({
    matches: true,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  }));
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      newArrivalsReducer: [], 
      topSaleReducer: [],
      searchResultReducer: [],
    }));
  });

  it("renders Preloader while loading", async () => {
    window.matchMedia = jest.fn().mockImplementation(query => ({
        matches: true,
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      }));
    useDispatch.mockReturnValue(jest.fn().mockImplementation(() => Promise.resolve()));
  
    render(
      <MemoryRouter initialEntries={["/search/new-arrivals"]}>
        <Routes>
          <Route path="/search/:value" element={<SearchResult />} />
        </Routes>
      </MemoryRouter>
    );
  
    await act(async () => {
      await waitFor(() => {
        expect(screen.queryByText("Loading...")).toBeNull();
      });
    });
  });
});
