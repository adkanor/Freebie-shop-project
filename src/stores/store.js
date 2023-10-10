import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";
import newArrivalsReducer from "./getArrivals_and_getTopSelling/newArrivalsReducer/reducer";
import topSaleReducer from "./getArrivals_and_getTopSelling/topSaleReducer/topSaleReducer";
import cartReducer from "./cartReducer";
const rootReducer = combineReducers({
    newArrivalsReducer,topSaleReducer, cartReducer

});

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk, logger],
    devTools: true,
});

export default store;
