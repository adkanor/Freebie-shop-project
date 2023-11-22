export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";

// Action creator to add a product to favorites
export const addProductToFavorites = (product) => {
    return {
        type: ADD_TO_FAVORITES,
        payload: product,
    };
};

// Action creator to remove a product from favorites
export const deleteProductFromFavorites = (id) => {
    return {
        type: REMOVE_FROM_FAVORITES,
        payload: id,
    };
};
