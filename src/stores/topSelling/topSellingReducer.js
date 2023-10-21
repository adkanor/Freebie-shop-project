import {GET_TOP_SALE_LIST} from "./actions";

const initialState = [];

const topSellingReducer = (state = initialState, actions) => {
    switch (actions.type) {
    case GET_TOP_SALE_LIST: {
        return actions.payload;
    }
    default:
        return state;
    }
};

export default topSellingReducer;


