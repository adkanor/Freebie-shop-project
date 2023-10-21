import {CHECK_AUTHORIZATION} from "./actions";

const initialState = [];

const authorizationReducer = (state = initialState, actions) => {
    switch (actions.type) {
    case CHECK_AUTHORIZATION: {
        return actions.payload;
    }
    default:
        return state;
    }
};

export default authorizationReducer;