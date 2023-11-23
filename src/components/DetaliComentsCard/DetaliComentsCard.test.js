import React from "react";
import {
    render,
    screen,
    fireEvent,
    waitFor,
    act,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DetaliComentsCard from "./DetaliComentsCard.jsx";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";

const mockStore = configureStore([]);

describe("DetaiLComentsCard", () => {
    const sampleDetails = "Color: Red && Size: Small";
    const sampleFAQ = "Frequently Asked Questions";
    const store = mockStore({
        authorizationReducer: {
            isAuth: true,
        },
    });

    it("renders product details tab when tabNum is 0", () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <DetaliComentsCard
                        details={sampleDetails}
                        idGoods="1"
                        FAQ={sampleFAQ}
                    />
                </Provider>
            </MemoryRouter>
        );

        const productDetailsTab = screen.getByText("Product Details");
        expect(productDetailsTab).toBeInTheDocument();

        const detailsText = screen.getByText("Color:");
        expect(detailsText).toBeInTheDocument();
    });

    it("renders the comments tab when tabNum is 1 and no comments on get", () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <DetaliComentsCard
                        details={sampleDetails}
                        idGoods="1"
                        FAQ={sampleFAQ}
                    />
                </Provider>
            </MemoryRouter>
        );
        const commentsTab = screen.getByText("Rating & Reviews");

        fireEvent.click(commentsTab);

        const noCommentsMessage = screen.getByText("No comments yet");
        expect(noCommentsMessage).toBeInTheDocument();

        const writeReviewButton = screen.getByText("Write a Review");
        expect(writeReviewButton).toBeInTheDocument();
    });

    it("renders the comments tab when tabNum is 1 with comments", async () => {
        await act(() =>
            render(
                <MemoryRouter>
                    <Provider store={store}>
                        <DetaliComentsCard
                            details={sampleDetails}
                            idGoods="653d4a2de01a78f61a8eb5dd"
                            FAQ={sampleFAQ}
                        />
                    </Provider>
                </MemoryRouter>
            )
        );
        await waitFor(() => {
            const commentsTab = screen.getByText("Rating & Reviews");

            fireEvent.click(commentsTab);

            const filterSelect = screen.getByTestId("commentsFilter");
            expect(filterSelect).toBeInTheDocument();

            const writeReviewButton = screen.getByText("Write a Review");
            expect(writeReviewButton).toBeInTheDocument();
        });
    });

    it("renders the about page when tabNum is 2", async () => {
        await act(() =>
            render(
                <MemoryRouter>
                    <Provider store={store}>
                        <DetaliComentsCard
                            details={sampleDetails}
                            idGoods="6522ffea3ecd0de1f47512dc"
                            FAQ={sampleFAQ}
                        />
                    </Provider>
                </MemoryRouter>
            )
        );
        await waitFor(() => {
            const aboutTab = screen.getByText("FAQs");

            fireEvent.click(aboutTab);

            const about = screen.getByTestId("description");
            expect(about).toBeInTheDocument();
        });
    });
    it("doesn't render write comment, when user is not authorised", () => {
        const nonAuthStore = mockStore({
            authorizationReducer: {
                isAuth: false,
            },
        });
        render(
            <MemoryRouter>
                <Provider store={nonAuthStore}>
                    <DetaliComentsCard
                        details={sampleDetails}
                        idGoods="1"
                        FAQ={sampleFAQ}
                    />
                </Provider>
            </MemoryRouter>
        );
        const commentsTab = screen.getByText("Rating & Reviews");
        fireEvent.click(commentsTab);
        const writeButton = screen.queryByText("Write a Review");
        expect(writeButton).toBeNull();
    });
});
