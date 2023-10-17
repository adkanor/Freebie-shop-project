import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";
import newArrivalsReducer from "./newArrivals/newArrivalsReducer";
import topSaleReducer from "./topSelling/topSellingReducer";
import cartReducer from "./cartProducts/cartReducer";
import searchProductsReducer from "./searchProducts/searchProductsReducer";
import favoritesReducer from "./favoritesProducts/favoritesReducer";
import {
    createStateSyncMiddleware,
    initStateWithPrevTab,
} from "redux-state-sync";
const rootReducer = combineReducers({
    newArrivalsReducer,
    topSaleReducer,
    cartReducer,
    favoritesReducer,
    searchProductsReducer,
});
const config = {
    channel: "my_channel",
};

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk, logger, createStateSyncMiddleware(config)],
    devTools: true,
});
initStateWithPrevTab(store);

export default store;
