import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import cartReducer from "./cartProducts/cartReducer";
import favoritesReducer from "./favoritesProducts/favoritesReducer";
import authorizationReducer from "./authorization/authorizationReducer";
import personalInfoReducer from "./personalInfo/personalInfoReducer";
import {
    createStateSyncMiddleware,
    initStateWithPrevTab,
} from "redux-state-sync";

const rootReducer = combineReducers({
    cartReducer,
    favoritesReducer,
    authorizationReducer,
    personalInfoReducer,
});
const config = {
    channel: "my_channel",
};

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk, createStateSyncMiddleware(config)],
    devTools: true,
});
initStateWithPrevTab(store);

export default store;
