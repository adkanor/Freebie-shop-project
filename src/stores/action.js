import axios from "axios";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

// Fetching products
export const fetchProducts = () => async (dispatch, getState) => {
    const response = await axios.get(`${document.location.href}products.json`);
    console.log(response);
    return dispatch({
        type: FETCH_PRODUCTS,
        payload: response.data,
    });
};
