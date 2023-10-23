import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";

import NavigationBar from "./NavigationBar";

describe("NavigationBar Component", () => {
    it("should render links", () => {
        render(
            <MemoryRouter>
                <NavigationBar classList="NavigationBar" clickFunc={() => {}} />
            </MemoryRouter>
        );

        const femaleLink = screen.getByText("Female");
        const maleLink = screen.getByText("Male");
        const brandsLink = screen.getByText("Brands");
        const saleLink = screen.getByText("On Sale");

        expect(femaleLink).toBeInTheDocument();
        expect(maleLink).toBeInTheDocument();
        expect(brandsLink).toBeInTheDocument();
        expect(saleLink).toBeInTheDocument();
    });

    it("should call clickFunc when a link is clicked", () => {
        const clickFunc = jest.fn();
        render(
            <MemoryRouter>
                <NavigationBar
                    classList="NavigationBar"
                    clickFunc={clickFunc}
                />
            </MemoryRouter>
        );

        const femaleLink = screen.getByText("Female");

        fireEvent.click(femaleLink);

        expect(clickFunc).toHaveBeenCalledTimes(1);
    });
});
