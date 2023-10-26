import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import SortFilter from "./Sorting";
import { sortProducts } from "../../stores/pageWithFiltersProducts/action";

describe("SortFilter", () => {
    const mockStore = configureStore();
    const store = mockStore({});

    it("should render the SortFilter component", () => {
        render(
            <Provider store={store}>
                <SortFilter setCurrentPage={() => {}} />
            </Provider>
        );

        const sortContainerLabel = screen.getByText("Sort by:");
        expect(sortContainerLabel).toBeTruthy();

        const sortSelect = screen.getByRole("combobox");
        expect(sortSelect).toBeTruthy();
    });

    it("should dispatch the sortProducts action when a different option is selected", () => {
        const dispatch = jest.fn();
        store.dispatch = dispatch;

        render(
            <Provider store={store}>
                <SortFilter setCurrentPage={() => {}} />
            </Provider>
        );

        const sortSelect = screen.getByRole("combobox");

        fireEvent.change(sortSelect, { target: { value: "price-asc" } });

        expect(dispatch).toHaveBeenCalledWith(sortProducts("price-asc"));
    });

    it("should call the setCurrentPage function when a different option is selected", () => {
        const setCurrentPage = jest.fn();

        render(
            <Provider store={store}>
                <SortFilter setCurrentPage={setCurrentPage} />
            </Provider>
        );

        const sortSelect = screen.getByRole("combobox");

        fireEvent.change(sortSelect, { target: { value: "za" } });

        expect(setCurrentPage).toHaveBeenCalledWith(1);
    });
});
