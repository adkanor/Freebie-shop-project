import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Импортируйте MemoryRouter
import EmptyCartPage from "./EmptyCartPage";

describe("EmptyCartPage Component", () => {
    it("should render the empty cart page correctly", () => {
        const { getByText, getByAltText, getByTestId } = render(
            <MemoryRouter>
                <EmptyCartPage />
            </MemoryRouter>
        );

        expect(getByText("Oops...")).toBeTruthy();
        expect(getByText("There is no items added to the cart!")).toBeTruthy();
        expect(getByAltText("Empty cart page")).toBeTruthy();

        const link = getByTestId("empty-cart-link");
        expect(link).toBeTruthy();
        expect(getByText("Back to home page")).toBeTruthy();
        expect(link.querySelector("img")).toBeTruthy();
    });
});
