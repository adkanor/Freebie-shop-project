import {GET_NEW_ARRIVALS_LIST} from "./actions";

const initialState = [];

const newArrivalsReducer = (state = initialState, actions) => {
    switch (actions.type) {
    case GET_NEW_ARRIVALS_LIST: {
        return actions.payload;
    }
    default:
        return state;
    }
};

export default newArrivalsReducer;