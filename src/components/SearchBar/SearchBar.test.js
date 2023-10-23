import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import SearchBar from "./SearchBar";

describe("SearchBar Component", () => {
    it("should render a search input", () => {
        render(
            <SearchBar
                classList="SearchBar"
                onChangeFunc={() => {}}
                onKeyUpFunc={() => {}}
            />
        );

        const searchInput = screen.getByPlaceholderText(
            "Search for products..."
        );
        expect(searchInput).toBeInTheDocument();
    });

    it("should call onChangeFunc when input value changes", () => {
        const onChangeFunc = jest.fn();
        render(
            <SearchBar
                classList="SearchBar"
                onChangeFunc={onChangeFunc}
                onKeyUpFunc={() => {}}
            />
        );

        const searchInput = screen.getByPlaceholderText(
            "Search for products..."
        );

        fireEvent.change(searchInput, { target: { value: "example" } });

        expect(onChangeFunc).toHaveBeenCalledTimes(1);
    });

    it("should call onKeyUpFunc when a key is released", () => {
        const onKeyUpFunc = jest.fn();
        render(
            <SearchBar
                classList="SearchBar"
                onChangeFunc={() => {}}
                onKeyUpFunc={onKeyUpFunc}
            />
        );

        const searchInput = screen.getByPlaceholderText(
            "Search for products..."
        );

        fireEvent.keyUp(searchInput, { key: "Enter", code: "Enter" });

        expect(onKeyUpFunc).toHaveBeenCalledTimes(1);
    });
});
