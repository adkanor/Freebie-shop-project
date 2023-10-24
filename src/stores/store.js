import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";
import newArrivalsReducer from "./newArrivals/newArrivalsReducer";
import topSaleReducer from "./topSelling/topSellingReducer";
import cartReducer from "./cartProducts/cartReducer";
import favoritesReducer from "./favoritesProducts/favoritesReducer";
import getAllProductsByStyleReducer from "./pageWithFiltersProducts/productByStyleReducer";
import authorizationReducer from "./authorization/authorizationReducer";
import personalInfoReducer from "./personalInfo/personalInfoReducer";
import searchResultReducer from "./searchResult/searchResultReducer";
import orderReducer from "./orders/orderReducer";
import {
    createStateSyncMiddleware,
    initStateWithPrevTab,
} from "redux-state-sync";

const rootReducer = combineReducers({
    newArrivalsReducer,
    topSaleReducer,
    searchResultReducer,
    orderReducer,
    cartReducer,
    favoritesReducer,
    authorizationReducer,
    getAllProductsByStyleReducer,
    personalInfoReducer,
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
