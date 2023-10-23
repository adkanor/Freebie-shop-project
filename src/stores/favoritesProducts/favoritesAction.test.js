import {
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES,
    addProductToFavorites,
    deleteProductFromFavorites,
} from "./action";

describe("addProductToFavorites action", () => {
    it("should create an action to add a product to favorites", () => {
        const product = { id: 1, name: "Sample Product" };
        const expectedAction = {
            type: ADD_TO_FAVORITES,
            payload: product,
        };
        expect(addProductToFavorites(product)).toEqual(expectedAction);
    });
});

describe("deleteProductFromFavorites action", () => {
    it("should create an action to delete a product from favorites by id", () => {
        const productId = 1;
        const expectedAction = {
            type: REMOVE_FROM_FAVORITES,
            payload: productId,
        };
        expect(deleteProductFromFavorites(productId)).toEqual(expectedAction);
    });
});
