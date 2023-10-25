import getAllProductsByStyleReducer from "./productByStyleReducer";
import {
    FETCH_PRODUCTS,
    SORT_PRODUCTS,
    RESET_FILTERS,
    SET_FILTERS,
} from "./action";

describe("getAllProductsByStyleReducer", () => {
    it("should handle FETCH_PRODUCTS action", () => {
        const initialState = {
            productByStyle: [],
            filteredProducts: [],
        };
        const action = {
            type: FETCH_PRODUCTS,
            payload: [
                { id: 1, name: "Product 1" },
                { id: 2, name: "Product 2" },
            ],
        };

        const newState = getAllProductsByStyleReducer(initialState, action);

        expect(newState.productByStyle).toEqual(action.payload);
        expect(newState.filteredProducts).toEqual(action.payload);
    });

    it("should handle SORT_PRODUCTS action", () => {
        const initialState = {
            productByStyle: [
                { id: 1, name: "Product 1", final_price: 100 },
                { id: 2, name: "Product 2", final_price: 200 },
            ],
            filteredProducts: [
                { id: 1, name: "Product 1", final_price: 100 },
                { id: 2, name: "Product 2", final_price: 200 },
            ],
        };
        const action = {
            type: SORT_PRODUCTS,
            payload: "price-asc",
        };

        const newState = getAllProductsByStyleReducer(initialState, action);

        expect(newState.filteredProducts).toEqual([
            { id: 1, name: "Product 1", final_price: 100 },
            { id: 2, name: "Product 2", final_price: 200 },
        ]); // Ensure products are sorted by price ascending
    });

    it("should handle SET_FILTERS action", () => {
        const initialState = {
            productByStyle: [
                { id: 1, name: "Product 1", category: "Category A" },
                { id: 2, name: "Product 2", category: "Category B" },
            ],
            filteredProducts: [
                { id: 1, name: "Product 1", category: "Category A" },
                { id: 2, name: "Product 2", category: "Category B" },
            ],
        };
        const action = {
            type: SET_FILTERS,
            payload: [{ id: 1, name: "Product 1", category: "Category A" }],
        };

        const newState = getAllProductsByStyleReducer(initialState, action);

        expect(newState.filteredProducts).toEqual([
            { id: 1, name: "Product 1", category: "Category A" },
        ]); // Ensure products are filtered according to the payload
    });

    it("should handle RESET_FILTERS action", () => {
        const initialState = {
            productByStyle: [
                { id: 1, name: "Product 1", category: "Category A" },
                { id: 2, name: "Product 2", category: "Category B" },
            ],
            filteredProducts: [
                { id: 1, name: "Product 1", category: "Category A" },
                { id: 2, name: "Product 2", category: "Category B" },
            ],
        };
        const action = {
            type: RESET_FILTERS,
        };

        const newState = getAllProductsByStyleReducer(initialState, action);

        expect(newState.filteredProducts).toEqual([
            { id: 1, name: "Product 1", category: "Category A" },
            { id: 2, name: "Product 2", category: "Category B" },
        ]); // Ensure products are reset to the initial state
    });
});
