import {
    FETCH_PRODUCTS,
    SORT_PRODUCTS,
    RESET_FILTERS,
    SET_FILTERS,
} from "./action";
/* eslint-disable */

const initState = {
    productByStyle: [],
    filteredProducts: [],
};
const getAllProductsByStyleReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                productByStyle: action.payload,
                filteredProducts: action.payload,
            };
        case SORT_PRODUCTS:
            return {
                ...state,
                filteredProducts: action.payload,
            };
        case SET_FILTERS:
            return {
                ...state,
                filteredProducts: action.payload,
            };
        case RESET_FILTERS:
            return {
                ...state,
                filteredProducts: state.productByStyle,
            };
        default:
            return state;
    }
};
export default getAllProductsByStyleReducer;
