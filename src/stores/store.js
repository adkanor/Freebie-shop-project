import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";
import newArrivalsReducer from "./newArrivals/newArrivalsReducer";
import topSaleReducer from "./topSelling/topSellingReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
    newArrivalsReducer, topSaleReducer, cartReducer

});

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk, logger],
    devTools: true,
});

export default store;
