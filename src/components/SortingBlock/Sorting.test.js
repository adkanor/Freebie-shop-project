import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SortFilter from "./Sorting";
import "@testing-library/jest-dom/extend-expect";

test("renders SortFilter component", () => {
    // Arrange
    const changeFilterMock = jest.fn();
    const filterSortParams = { sort: "az" };

    // Act
    render(
        <SortFilter
            changeFilter={changeFilterMock}
            filterSortParams={filterSortParams}
        />
    );

    // Assert
    expect(screen.getByLabelText("Sort by:")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByDisplayValue("A to Z")).toBeInTheDocument();
});

test("calls changeFilter when select value changes", () => {
    // Arrange
    const changeFilterMock = jest.fn();
    const filterSortParams = { sort: "az" };

    // Act
    render(
        <SortFilter
            changeFilter={changeFilterMock}
            filterSortParams={filterSortParams}
        />
    );
    fireEvent.change(screen.getByRole("combobox"), { target: { value: "za" } });

    // Assert
    expect(changeFilterMock).toHaveBeenCalledWith({ sort: "za" });
});
