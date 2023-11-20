import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SortFilter from "./Sorting";
import "@testing-library/jest-dom/extend-expect";

describe("SortFilter Component", () => {
    it("renders SortFilter component with default sort value", () => {
        const changeFilterMock = jest.fn();
        const filterSortParams = { sort: "az", page: 1 };

        render(
            <SortFilter
                changeFilter={changeFilterMock}
                filterSortParams={filterSortParams}
            />
        );

        const sortSelect = screen.getByLabelText(/Sort by/);
        expect(sortSelect).toBeInTheDocument();
        expect(sortSelect).toHaveValue("az");
    });
    it("calls changeFilter function when sort value changes", () => {
        const changeFilterMock = jest.fn();
        const filterSortParams = { sort: "az", page: 1 };

        render(
            <SortFilter
                changeFilter={changeFilterMock}
                filterSortParams={filterSortParams}
            />
        );

        const sortSelect = screen.getByLabelText(/Sort by/);

        fireEvent.change(sortSelect, { target: { value: "za" } });

        expect(changeFilterMock).toHaveBeenCalledWith({ sort: "za", page: 1 });
    });
});
