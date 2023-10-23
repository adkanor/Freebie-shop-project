import favoritesReducer from "./favoritesReducer";
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "./action";

describe("favoritesReducer", () => {
    it("should return the initial state", () => {
        const initialState = { favorites: [] };
        expect(favoritesReducer(undefined, {})).toEqual(initialState);
    });

    it("should handle ADD_TO_FAVORITES action", () => {
        const productToAdd = { id: 1, name: "Product A" };
        const initialState = { favorites: [] };
        const action = {
            type: ADD_TO_FAVORITES,
            payload: productToAdd,
        };
        const expectedState = {
            favorites: [productToAdd],
        };
        expect(favoritesReducer(initialState, action)).toEqual(expectedState);
    });

    it("should handle REMOVE_FROM_FAVORITES action", () => {
        const product1 = { id: 1, name: "Product A" };
        const product2 = { id: 2, name: "Product B" };
        const initialState = { favorites: [product1, product2] };
        const action = {
            type: REMOVE_FROM_FAVORITES,
            payload: 1,
        };
        const expectedState = {
            favorites: [product2],
        };
        expect(favoritesReducer(initialState, action)).toEqual(expectedState);
    });

    it("should handle REMOVE_FROM_FAVORITES action for an item that does not exist in favorites", () => {
        const product1 = { id: 1, name: "Product A" };
        const initialState = { favorites: [product1] };
        const action = {
            type: REMOVE_FROM_FAVORITES,
            payload: 2,
        };

        expect(favoritesReducer(initialState, action)).toEqual(initialState);
    });
});
