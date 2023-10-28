import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import ListOrders from "./ListOrders";
import axios from "axios";

test("renders ListOrders component successfully", async () => {
    render(<ListOrders />);

    waitFor(() => {
        const loadingElement = screen.queryByText("Loading...");
        expect(loadingElement).toBeNull();
    });
});
jest.mock("axios");

const mockOrders = [];

test("displays a message when there are no orders", async () => {
    axios.post.mockResolvedValue({ data: { orders: mockOrders } });
    render(<ListOrders />);

    waitFor(() => {
        const noOrdersMessage = screen.getByText(/There is no orders yet/);
        expect(noOrdersMessage).toBeTruthy();
    });
});

test("displays an error message when the request fails", async () => {
    axios.post.mockRejectedValue(new Error("Test error"));
    render(<ListOrders />);

    waitFor(() => {
        const errorMessage = screen.getByText(/Error: Test error/);
        expect(errorMessage).toBeTruthy();
    });
});
