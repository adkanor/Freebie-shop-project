import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import ListOrders from "./ListOrders";
import axios from "axios";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";

const mockStore = configureStore();

test("renders ListOrders component successfully", async () => {
    render(
        <Provider store={mockStore({})}>
            <MemoryRouter>
                <ListOrders />
            </MemoryRouter>
        </Provider>
    );

    waitFor(() => {
        const loadingElement = screen.queryByText("Loading...");
        expect(loadingElement).toBeNull();
    });
});

jest.mock("axios");

const mockOrders = [];

test("displays a message when there are no orders", async () => {
    axios.post.mockResolvedValue({ data: { orders: mockOrders } });
    render(
        <Provider store={mockStore({})}>
            <MemoryRouter>
                <ListOrders />
            </MemoryRouter>
        </Provider>
    );

    waitFor(() => {
        const noOrdersMessage = screen.getByText(/There is no orders yet/);
        expect(noOrdersMessage).toBeTruthy();
    });
});

test("displays an error message when the request fails", async () => {
    axios.post.mockRejectedValue(new Error("Test error"));
    render(
        <Provider store={mockStore({})}>
            <MemoryRouter>
                <ListOrders />
            </MemoryRouter>
        </Provider>
    );

    waitFor(() => {
        const errorMessage = screen.getByText(/Error: Test error/);
        expect(errorMessage).toBeTruthy();
    });
});
