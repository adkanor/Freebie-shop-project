import { CHECK_AUTHORIZATION } from "./actions";
/*eslint-disable*/

const initialState = { isAuth: false };

const authorizationReducer = (state = initialState, actions) => {
    console.log(actions.payload);
    switch (actions.type) {
        case CHECK_AUTHORIZATION: {
            return { ...state, isAuth: actions.payload };
        }
        default:
            return state;
    }
};

export default authorizationReducer;
