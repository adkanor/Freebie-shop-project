import * as itemsTypes from "../types/type";

const initialState = [];

const topSellingReducer = (state = initialState, actions) =>{
    switch (actions.type) {
    case itemsTypes.GET_TOP_SALE_LIST:{
        return actions.payload;
    }
    default:
        return state;
    }
};

export default topSellingReducer;