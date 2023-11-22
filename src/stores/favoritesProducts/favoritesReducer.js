/* eslint-disable */

import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "./action";

const favoriteItems = localStorage.getItem("favoriteItems");

const initState = {
    favorites: favoriteItems ? JSON.parse(favoriteItems) : [],
};

const favoritesReducer = (state = initState, action) => {
    let newStateOfFav;
    switch (action.type) {
        // Add a product to favorites and update the state
        case ADD_TO_FAVORITES:
            newStateOfFav = {
                ...state,
                favorites: [...state.favorites, action.payload],
            };
            localStorage.setItem(
                "favoriteItems",
                JSON.stringify(newStateOfFav.favorites)
            );
            return newStateOfFav;

        // Remove a product from favorites and update the state
        case REMOVE_FROM_FAVORITES:
            newStateOfFav = {
                ...state,
                favorites: [
                    ...state.favorites.filter(
                        (product) => product.id !== action.payload
                    ),
                ],
            };
            localStorage.setItem(
                "favoriteItems",
                JSON.stringify(newStateOfFav.favorites)
            );
            return newStateOfFav;

        default:
            return state;
    }
};
export default favoritesReducer;
