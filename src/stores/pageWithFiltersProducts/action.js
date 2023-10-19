import axios from "axios";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const SORT_PRODUCTS = "SORT_PRODUCTS";
export const SET_FILTERS = "SET_FILTERS";
export const RESET_FILTERS = "RESET_FILTERS";
export const fetchProductsByStyle = (url) => async (dispatch, getState) => {
    const response = await axios.get(url);
    return dispatch({
        type: FETCH_PRODUCTS,
        payload: response.data,
    });
};

export const sortProducts = (sortType) => {
    return {
        type: SORT_PRODUCTS,
        payload: sortType,
    };
};

export const setFilters = (filteredProducts) => {
    return {
        type: SET_FILTERS,
        payload: filteredProducts,
    };
};

export const resetFilters = () => {
    return {
        type: RESET_FILTERS,
    };
};
