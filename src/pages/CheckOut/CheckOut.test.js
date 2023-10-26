import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import CheckOut from "./CheckOut";

const mockStore = configureStore();

describe("CheckOut Component", () => {
  it("renders CheckOut component", () => {
    const store = mockStore({
      cartReducer: {
        cartItems: [],
        cartTotalAmount: 0,
        cartQuantity: 0,
        discount: 0,
        deliveryFee: 15,
        amountOfDiscount: 0,
        final_total: 0,
      },
      personalInfoReducer: {
        userData: null,
        error: null,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <CheckOut />
        </MemoryRouter>
      </Provider>
    );

    const billingDetailsElement = screen.queryByText("Billing Details");
    expect(billingDetailsElement).toBeNull();
  });

  it("displays an empty cart page when there are no items in the cart", () => {
    const store = mockStore({
      cartReducer: {
        cartItems: [],
        cartTotalAmount: 0,
        cartQuantity: 0,
        discount: 0,
        deliveryFee: 15,
        amountOfDiscount: 0,
        final_total: 0,
      },
      personalInfoReducer: {
        userData: null,
        error: null,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <CheckOut />
        </MemoryRouter>
      </Provider>
    );

    const emptyCartElement = screen.queryByText("Your cart is empty");
    expect(emptyCartElement).toBeNull();
  });
});
