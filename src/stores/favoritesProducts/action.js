export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";

export const addProductToFavorites = (product) => {
    return {
        type: ADD_TO_FAVORITES,
        payload: product,
    };
};

export const deleteProductFromFavorites = (id) => {
    return {
        type: REMOVE_FROM_FAVORITES,
        payload: id,
    };
};
