import {GET_SEARCH_RESULT} from "./actions";

const initialState = [];

const searchResultReducer = (state = initialState, actions) => {
    switch (actions.type) {
    case GET_SEARCH_RESULT: {
        return actions.payload;
    }
    default:
        return state;
    }
};

export default searchResultReducer;