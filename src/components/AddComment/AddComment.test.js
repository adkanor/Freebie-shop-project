import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import AddComment from "./AddComment";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);
jest.mock('axios')

describe("AddComment Component", () => {
    const store = mockStore({
        authorizationReducer: {
            isAuth: true,
        },
    });

    it("renders AddComment component properly", () => {
        render(
            <Provider store={store}>
                <AddComment id="1" closeFunc={() => {}} submitFunc={() => {}} />
            </Provider>
        );
        expect(
            screen.getByPlaceholderText("Enter commentary")
        ).toBeInTheDocument();
        expect(screen.getByText("Leave comment")).toBeInTheDocument();
    });

    it("shows error when submitting with empty fields", async () => {
        const closeFunc = jest.fn();
        const submitFunc = jest.fn();
        render(
            <Provider store={store}>
                <AddComment
                    id="mockedId"
                    closeFunc={closeFunc}
                    submitFunc={submitFunc}
                />
            </Provider>
        );

        const submitButton = screen.getByText("Leave comment");
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(axios.post).not.toHaveBeenCalled();
            expect(submitFunc).not.toHaveBeenCalled();
        });
    });
});
