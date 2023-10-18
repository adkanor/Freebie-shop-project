import axios from "axios";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_FILTERED_PRODUCTS = "GET_FILTERED_PRODUCTS";


export const getAllProducts = () => async (dispatch, getState) => {
    const response = await axios.get(
        "https://shopcoserver-git-main-chesterfalmen.vercel.app/api/goods"
    );
    return dispatch({
        type: GET_ALL_PRODUCTS,
        payload: response.data,
    });
};

export const getFilteredProducts = (value) => ({
    type: GET_FILTERED_PRODUCTS,
    payload: value
});