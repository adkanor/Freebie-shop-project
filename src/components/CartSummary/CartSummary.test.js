import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CartSummary from "./CartSummary";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import * as ScrollToTopModule from "../../utils/scrollToTop";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { useDispatch } from "react-redux";

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useDispatch: jest.fn(),
}));
const mockStore = configureStore([]);

describe("CartSummary Component", () => {
    const store = mockStore({
        authorizationReducer: {
            isAuth: true,
        },
    });

    const mockData = {
        cartSubtotal: 100,
        discount: 10,
        deliveryFee: 5,
        amountOfDiscount: 10,
        total: 95,
    };

    const mockDispatch = jest.fn();
    beforeEach(() => {
        useDispatch.mockReturnValue(mockDispatch);
    });

    it("renders CartSummary component with provided props", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <CartSummary
                        cartSubtotal={mockData.cartSubtotal}
                        discount={mockData.discount}
                        deliveryFee={mockData.deliveryFee}
                        amountOfDiscount={mockData.amountOfDiscount}
                        total={mockData.total}
                    />
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getByText("Order Summary")).toBeInTheDocument();
        expect(screen.getByText("Subtotal")).toBeInTheDocument();
        expect(screen.getByText("$100.00")).toBeInTheDocument();
        expect(screen.getByText("Discount")).toBeInTheDocument();
        expect(screen.getByText("10%")).toBeInTheDocument();
        expect(screen.getByText("-$10.00")).toBeInTheDocument();
        expect(screen.getByText("Delivery Fee")).toBeInTheDocument();
        expect(screen.getByText("$5")).toBeInTheDocument();
        expect(screen.getByText("Total")).toBeInTheDocument();
        expect(screen.getByText("$95.00")).toBeInTheDocument();
    });



    it('calls scrollToTop function when "Go to Checkout" button is clicked', () => {
        const scrollToTopMock = jest.spyOn(ScrollToTopModule, "scrollToTop");
        Element.prototype.scrollTo = () => {}

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <CartSummary
                        cartSubtotal={mockData.cartSubtotal}
                        discount={mockData.discount}
                        deliveryFee={mockData.deliveryFee}
                        amountOfDiscount={mockData.amountOfDiscount}
                        total={mockData.total}
                    />
                </MemoryRouter>
            </Provider>
        );

        const goToCheckoutButton = screen.getByText("Go to Checkout");
        fireEvent.click(goToCheckoutButton);

        expect(scrollToTopMock).toHaveBeenCalledTimes(1);
    });
});
