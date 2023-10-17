export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";

export const getAllProducts = (items) => ({
    type: GET_ALL_PRODUCTS,
    payload: items
});