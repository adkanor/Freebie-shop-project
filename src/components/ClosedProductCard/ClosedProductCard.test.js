import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ClosedProductCard from "./ClosedProductCard";
import { MemoryRouter } from "react-router";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

describe("ClosedProductCard Component", () => {
    const sampleProduct = {
        id: "1",
        name: "Sample Product",
        price: 100,
        final_price: 80,
        imageURL: "sample-image.jpg",
        rating: 4.5,
        sale: 20,
    };

    const mockStore = configureStore();

    const store = mockStore({
        favoritesReducer: {
            favorites: [],
        },
    });

    it("renders product card with all details", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <ClosedProductCard {...sampleProduct} />
                </MemoryRouter>
            </Provider>
        );

        const productImage = screen.getByAltText("productImg");
        const productName = screen.getByText("Sample Product");
        const productRating = screen.getByText("4.5");
        const salePrice = screen.getByText("$80");
        const originalPrice = screen.getByText("$100");
        const saleValue = screen.getByText("-20%");

        expect(productImage).toBeInTheDocument();
        expect(productName).toBeInTheDocument();
        expect(productRating).toBeInTheDocument();
        expect(salePrice).toBeInTheDocument();
        expect(originalPrice).toBeInTheDocument();
        expect(saleValue).toBeInTheDocument();
    });
    
    it("renders product card without sale", () => {
        const productWithoutSale = {
            ...sampleProduct,
            sale: 0,
        };

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <ClosedProductCard {...productWithoutSale} />
                </MemoryRouter>
            </Provider>
        );

        const salePrice = screen.queryByText("$100");
        const originalPrice = screen.getByText("$80");
        const saleValue = screen.queryByText("-20%");

        expect(salePrice).not.toBeInTheDocument();
        expect(originalPrice).toBeInTheDocument();
        expect(saleValue).not.toBeInTheDocument();
    });
});
