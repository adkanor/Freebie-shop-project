import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import FavouritesPage from "./FavouritesPage";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";

const mockStore = configureStore([]);

describe("FavouritesPage Component", () => {
    it("renders FavouritesPage component with favorite products", () => {
        const store = mockStore({
            favoritesReducer: {
                favorites: [
                    {
                        id: 1,
                        name: "Product 1",
                        price: 20,
                        rating: 4,
                        url_image: ["/product1.jpg"],
                        discount: 0,
                        final_price: 15,
                    },
                ],
            },
            authorizationReducer: {
                isAuth: true,
            },
        });

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <FavouritesPage />
                </MemoryRouter>
            </Provider>
        );

        waitFor(() => {
            expect(screen.getByText(/product 1/i)).toBeInTheDocument();
            expect(screen.getByText(/\$15.00/i)).toBeInTheDocument();
        });
    });
});
