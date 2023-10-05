import * as itemsTypes from "../types/type";

const initialState = [];

const newArrivalsReducer = (state = initialState, actions) =>{
    switch (actions.type) {
    case itemsTypes.GET_NEW_ARRIVALS_LIST:{
        return actions.payload;
    }
    default:
        return state;
    }
};

export default newArrivalsReducer;