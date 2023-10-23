import axios from "axios";
import {
    fetchProductsByStyle,
    sortProducts,
    setFilters,
    resetFilters,
    FETCH_PRODUCTS,
    SORT_PRODUCTS,
    SET_FILTERS,
    RESET_FILTERS,
} from "./action";

jest.mock("axios");

describe("Redux Actions", () => {
    it("should create an action to fetch products by style", async () => {
        const url = "mocked-url";
        const responseData = [{ id: 1, name: "Product 1" }];

        axios.get.mockResolvedValue({ data: responseData });

        const dispatch = jest.fn();
        await fetchProductsByStyle(url)(dispatch);

        expect(axios.get).toHaveBeenCalledWith(url);

        expect(dispatch).toHaveBeenCalledWith({
            type: FETCH_PRODUCTS,
            payload: responseData,
        });
    });

    it("should create an action to sort products", () => {
        const sortType = "price_asc";
        const expectedAction = {
            type: SORT_PRODUCTS,
            payload: sortType,
        };
        expect(sortProducts(sortType)).toEqual(expectedAction);
    });

    it("should create an action to set filters", () => {
        const filteredProducts = [{ id: 1, name: "Filtered Product" }];
        const expectedAction = {
            type: SET_FILTERS,
            payload: filteredProducts,
        };
        expect(setFilters(filteredProducts)).toEqual(expectedAction);
    });

    it("should create an action to reset filters", () => {
        const expectedAction = {
            type: RESET_FILTERS,
        };
        expect(resetFilters()).toEqual(expectedAction);
    });
});
