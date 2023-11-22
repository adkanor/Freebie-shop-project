import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import FavoriteIcon from "./FavouriteIcon";
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

        const component = renderer.create(
            <Provider store={store}>
                <FavoriteIcon thisCard={{ id: 1 }} />
            </Provider>
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
