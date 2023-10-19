import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import CartItem from "./CartItem";
import { BrowserRouter } from "react-router-dom";
import {
    removeFromCart,
    incrementItemQuantity,
    decrementItemQuantity,
} from "../../stores/cartProducts/action";

const mockStore = configureStore([]);

describe("CartItem Component", () => {
    it("renders CartItem with correct information", () => {
        const initialState = {
            cartProducts: {
                cartItems: [
                    {
                        id: "1",
                        name: "Product 1",
                        imageURL: "image.jpg",
                        final_price: 19.99,
                        selectedSize: "M",
                        selectedAmount: 2,
                    },
                ],
            },
        };
        const store = mockStore(initialState);
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <CartItem
                        id="1"
                        name="Product 1"
                        imageURL="image.jpg"
                        final_price={19.99}
                        selectedSize="M"
                        selectedAmount={2}
                    />
                </BrowserRouter>
            </Provider>
        );

        expect(screen.getByText("Product 1")).toBeTruthy();
        expect(screen.getByText("Size:")).toBeTruthy();
        expect(screen.getByText("M")).toBeTruthy();
        expect(screen.getByText("$19.99")).toBeTruthy();
        expect(screen.getByAltText("Delete icon")).toBeTruthy();
    });

    it("dispatches removeFromCart action when delete icon is clicked", () => {
        const initialState = {
            cartProducts: {
                cartItems: [
                    {
                        id: "2",
                        name: "Product 2",
                        imageURL: "image2.jpg",
                        final_price: 25.99,
                        selectedSize: "L",
                        selectedAmount: 3,
                    },
                ],
            },
        };
        const store = mockStore(initialState);
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <CartItem
                        id="2"
                        name="Product 2"
                        imageURL="image2.jpg"
                        final_price={25.99}
                        selectedSize="L"
                        selectedAmount={3}
                    />
                </BrowserRouter>
            </Provider>
        );

        fireEvent.click(screen.getByAltText("Delete icon"));

        const expectedActions = [removeFromCart("2", "L")];
        expect(store.getActions()).toEqual(expectedActions);
    });

    it("dispatches incrementItemQuantity action when increase button is clicked", () => {
        const initialState = {
            cartProducts: {
                cartItems: [
                    {
                        id: "34535435",
                        name: "Product 3",
                        imageURL: "image3.jpg",
                        final_price: 15.99,
                        selectedSize: "S",
                        selectedAmount: 1,
                    },
                ],
            },
        };
        const store = mockStore(initialState);
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <CartItem
                        id="34535435"
                        name="Product 3"
                        imageURL="image3.jpg"
                        final_price={15.99}
                        selectedSize="S"
                        selectedAmount={1}
                    />
                </BrowserRouter>
            </Provider>
        );

        fireEvent.click(screen.getByText("+"));

        const expectedActions = [incrementItemQuantity("34535435", "S")];
        expect(store.getActions()).toEqual(expectedActions);
    });

    it("dispatches decrementItemQuantity action when decrease button is clicked", () => {
        const initialState = {
            cartProducts: {
                cartItems: [
                    {
                        id: "234234",
                        name: "Product 4",
                        imageURL: "image4.jpg",
                        final_price: 12.99,
                        selectedSize: "XS",
                        selectedAmount: 2,
                    },
                ],
            },
        };
        const store = mockStore(initialState);
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <CartItem
                        id="234234"
                        name="Product 4"
                        imageURL="image4.jpg"
                        final_price={12.99}
                        selectedSize="XS"
                        selectedAmount={2}
                    />
                </BrowserRouter>
            </Provider>
        );

        fireEvent.click(screen.getByText("-"));

        const expectedActions = [decrementItemQuantity("234234", "XS")];
        expect(store.getActions()).toEqual(expectedActions);
    });
});
