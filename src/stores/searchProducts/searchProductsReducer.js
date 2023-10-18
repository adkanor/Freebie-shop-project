import {GET_ALL_PRODUCTS, GET_FILTERED_PRODUCTS} from "./actions";

const initialState = {
    data: [],
    filteredData: [],
};

const searchProductsReducer = (state = initialState, actions) => {
    switch (actions.type) {
    case GET_ALL_PRODUCTS: {
        return {...state, data: actions.payload};
    }
    case GET_FILTERED_PRODUCTS: {
        const results = state.data.filter((item) => {
            return (
                item.style.toLowerCase().includes(actions.payload.toLowerCase()) ||
                item.name.toLowerCase().includes(actions.payload.toLowerCase())
            );
        });
        
        return {...state, filteredData: results};
    }
    default:
        return state;
    }
};

export default searchProductsReducer;