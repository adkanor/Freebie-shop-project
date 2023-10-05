import axios from "axios";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

// Fetching products
export const fetchProducts = () => async (dispatch, getState) => {
    const response = await axios.get("https://shopcoserver-git-main-chesterfalmen.vercel.app/api/goods");
    return dispatch({
        type: FETCH_PRODUCTS,
        payload: response.data,
    });
};
