import {CHECK_AUTHORIZATION} from "./actions";


const initialState = {isAuth: false};

const authorizationReducer = (state = initialState, actions) => {
    switch (actions.type) {
    case CHECK_AUTHORIZATION: {
        return {...state, isAuth: actions.payload};
    }
    default:
        return state;
    }
};

export default authorizationReducer;
