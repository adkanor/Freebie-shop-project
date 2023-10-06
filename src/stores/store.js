import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";
import getAllProductsReducer from "./reducerAllProducts";
import newArrivalsReducer from "./getArrivals_and_getTopSelling/newArrivalsReducer/reducer";
import topSaleReducer from "./getArrivals_and_getTopSelling/topSaleReducer/topSaleReducer";


const rootReducer = combineReducers({
    getAllProductsReducer: getAllProductsReducer,newArrivalsReducer,topSaleReducer
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
