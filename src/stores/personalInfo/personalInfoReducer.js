import { SET_USER_DATA_ERROR, SET_USER_DATA } from "./action";

const initialState = {
    userData: null,
    error: null,
};
/* eslint-disable */

const personalInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                userData: action.payload,
                error: null,
            };
        case SET_USER_DATA_ERROR:
            return {
                ...state,
                userData: null,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default personalInfoReducer;
