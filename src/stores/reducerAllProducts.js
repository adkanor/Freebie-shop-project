/* eslint-disable indent */
import { FETCH_PRODUCTS } from "./action";

const initState = {
    allProducts: [],
};
const getAllProductsReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            console.log(action.payload);
            return { ...state, allProducts: action.payload };
        default:
            return state;
    }
};
export default getAllProductsReducer;
