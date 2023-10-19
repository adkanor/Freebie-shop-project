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
            const sortType = action.payload;
            let sortedProducts = [...state.filteredProducts];

            switch (sortType) {
                case "az":
                    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case "za":
                    sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
                    break;
                case "price-asc":
                    sortedProducts.sort(
                        (a, b) => a.final_price - b.final_price
                    );
                    break;
                case "price-desc":
                    sortedProducts.sort(
                        (a, b) => b.final_price - a.final_price
                    );
                    break;
                default:
                    break;
            }

            return {
                ...state,
                filteredProducts: sortedProducts,
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
