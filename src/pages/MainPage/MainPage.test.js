import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import MainPage from "./MainPage";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";

const mockStore = configureStore([]);

describe("MainPage Component", () => {
    it("renders MainPage component with dress styles", () => {
        const store = mockStore({});
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <MainPage />
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getByText("BROWSE BY DRESS STYLE")).toBeInTheDocument();
        expect(screen.getByText("Casual")).toBeInTheDocument();
        expect(screen.getByText("Formal")).toBeInTheDocument();
        expect(screen.getByText("Party")).toBeInTheDocument();
        expect(screen.getByText("Gym")).toBeInTheDocument();
    });

    it("renders MainPage component with new arrivals", () => {
        const store = mockStore({}); // Provide your initial Redux store state here

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <MainPage />
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getByText("New Arrivals")).toBeInTheDocument();
        // Add more specific queries based on your component's structure
    });

    it("renders MainPage component with top-selling products", () => {
        const store = mockStore({}); // Provide your initial Redux store state here

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <MainPage />
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getByText("Top Selling")).toBeInTheDocument();
        // Add more specific queries based on your component's structure
    });

    it("renders MainPage component with happy customer comments", () => {
        const store = mockStore({}); // Provide your initial Redux store state here

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <MainPage />
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getByText("Our happy customers")).toBeInTheDocument();
        // Add more specific queries based on your component's structure
    });
});
