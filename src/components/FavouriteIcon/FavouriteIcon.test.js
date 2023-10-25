import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import FavoriteIcon from "./FavouriteIcon"; // Импортируйте ваш компонент
import userEvent from "@testing-library/user-event";
import {
    addProductToFavorites,
    deleteProductFromFavorites,
} from "../../stores/favoritesProducts/action";
import "@testing-library/jest-dom/extend-expect";
const mockStore = configureStore([]);

describe("FavoriteIcon Component", () => {
    it("renders the FavoriteIcon component", () => {
        const initialState = {
            favoritesReducer: {
                favorites: [],
            },
        };
        const store = mockStore(initialState);

        render(
            <Provider store={store}>
                <FavoriteIcon thisCard={{ id: 1 }} />
            </Provider>
        );

        const favoriteIcon = screen.getByRole("img", { name: "favorite icon" });
        expect(favoriteIcon).toBeTruthy();
    });
    it("adds product to favorites", () => {
        const initialState = {
            favoritesReducer: {
                favorites: [],
            },
        };
        const store = mockStore(initialState);

        render(
            <Provider store={store}>
                <FavoriteIcon thisCard={{ id: 1 }} />
            </Provider>
        );

        const favoriteIcon = screen.getByRole("img", { name: "favorite icon" });
        expect(favoriteIcon).toBeTruthy();

        userEvent.click(favoriteIcon);

        const actions = store.getActions();
        const expectedAction = addProductToFavorites({ id: 1 });
        expect(actions).toContainEqual(expectedAction);
    });
    it("removes product from favorites", () => {
        const initialState = {
            favoritesReducer: {
                favorites: [{ id: 1 }],
            },
        };
        const store = mockStore(initialState);

        render(
            <Provider store={store}>
                <FavoriteIcon thisCard={{ id: 1 }} />
            </Provider>
        );

        const favoriteIcon = screen.getByRole("img", { name: "favorite icon" });
        expect(favoriteIcon).toBeTruthy();

        userEvent.click(favoriteIcon);

        const actions = store.getActions();
        const expectedAction = deleteProductFromFavorites(1);
        expect(actions).toContainEqual(expectedAction);
    });
});
