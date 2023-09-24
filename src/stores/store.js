import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
    // here will be our reducers (each in his own folder) ex:
    //   modalReducer: modalReducer,
    //   cartReducer: cartReducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk, logger],
    devTools: true,
});

export default store;
