import React from "react";
import EmptyFavoritePage from "./EmptyFavoritesPage";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

describe("EmptyFavoritePage Component", () => {
    it("should render the empty favorites page correctly", () => {
        render(
            <Router>
                <EmptyFavoritePage />
            </Router>
        );

        expect(screen.getByText("Oops...")).toBeTruthy();
        expect(
            screen.getByText("There is no items added to the favourites!")
        ).toBeTruthy();
        expect(screen.getByAltText("No favourites added")).toBeTruthy();

        const link = screen.getByTestId("empty-fav-link");
        expect(link).toBeTruthy();
        expect(screen.getByText("Back to home page")).toBeTruthy();
        expect(screen.getByAltText("Arrow link to main page")).toBeTruthy();
    });
});
