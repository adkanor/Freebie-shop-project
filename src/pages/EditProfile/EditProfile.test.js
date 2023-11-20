import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import EditProfile from "./EditProfile";
import { clearCart } from "../../stores/cartProducts/action";
import "@testing-library/jest-dom/extend-expect";

const mockStore = configureStore([]);

describe("EditProfile Component", () => {
    it("renders EditProfile component and signs out", () => {
        const store = mockStore({});

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <EditProfile />
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getByText("Personal Info")).toBeInTheDocument();

        expect(screen.getByText("Contact Us")).toBeInTheDocument();

        expect(screen.getByText("Orders")).toBeInTheDocument();

        userEvent.click(screen.getByText("Sign out"));

        const actions = store.getActions();
        expect(actions).toEqual([clearCart()]);
    });
});
