import {GET_ALL_PRODUCTS} from "./actions";

const initialState = [];

const allProductsReducer = (state = initialState, actions) => {
    switch (actions.type) {
    case GET_ALL_PRODUCTS: {
        return actions.payload;
    }
    default:
        return state;
    }
};

export default allProductsReducer;