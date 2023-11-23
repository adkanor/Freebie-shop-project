import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ClosedProductCard from "./ClosedProductCard";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

const mockStore = configureStore([]);

describe("ClosedProductCard Component", () => {
    const store = mockStore({
        authorizationReducer: {
            isAuth: true,
        },
        favoritesReducer: { favorites: [] },
    });

    const infoData = {
        _id: "product_id_1",
        url_image: ["image_url"],
        name: "Product Name",
        rating: 4.5,
        discount: 10,
        final_price: 90,
        price: 100,
        sizes: [
            { size: "S", count: 5 },
            { size: "M", count: 0 },
            { size: "L", count: 3 },
        ],
    };

    it("renders product card with all details", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <ClosedProductCard info={infoData} />
                </MemoryRouter>
            </Provider>
        );

        const productImage = screen.getByAltText("productImg");
        const productName = screen.getByText("Product Name");
        const productRating = screen.getByText("4.5");
        const salePrice = screen.getByText("$90");
        const originalPrice = screen.getByText("$90");
        const saleValue = screen.getByText("-10%");

        expect(productImage).toBeInTheDocument();
        expect(productName).toBeInTheDocument();
        expect(productRating).toBeInTheDocument();
        expect(salePrice).toBeInTheDocument();
        expect(originalPrice).toBeInTheDocument();
        expect(saleValue).toBeInTheDocument();
    });

    it("opens and closes sizes selection", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <ClosedProductCard info={infoData} />
                </MemoryRouter>
            </Provider>
        );

        const openButton = screen.getByText("˄");
        fireEvent.click(openButton);
        expect(screen.getByText("˅")).toBeInTheDocument();

        fireEvent.click(openButton);
        expect(screen.getByText("˄")).toBeInTheDocument();
    });
});
