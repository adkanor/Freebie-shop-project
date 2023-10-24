import { SET_ORDER } from "./actions";

const initialState = {
    status: null,
    data: null,
    error: null
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_ORDER:
        return {
            status: action.payload.errorCode || action.payload.status,
            data: action.payload.errorMsg || action.payload.data,
            error: action.payload.errorMsg ? "Error" : null
        };
    default:
        return state;
    }
};

export default orderReducer;

