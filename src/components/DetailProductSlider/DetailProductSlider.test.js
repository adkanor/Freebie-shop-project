import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'; 
import DetailProductSlider from "./DetailProductSlider";
import { MemoryRouter } from "react-router";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureStore();

const sampleInfo = {
    _id: "1",
    url_image: ["image1.jpg", "image2.jpg", "image3.jpg"],
};

const store = mockStore({
    favoritesReducer: {
        favorites: [],
    },
});

Element.prototype.scrollTo = () => {}

describe("DetailProductSlider", () => {
    it("renders the initial image and small squares", () => {

        Element.prototype.scrollTo = () => {} 

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <DetailProductSlider info={sampleInfo} />
                </MemoryRouter>
            </Provider>
        );

        const largeImage = screen.getByAltText("Big square");
        expect(largeImage).toBeInTheDocument();

        const smallSquares = screen.getAllByAltText("Small square");
        expect(smallSquares).toHaveLength(sampleInfo.url_image.length);
    });

      it("updates the large image and selection on small square click", () => {

        Element.prototype.scrollTo = () => {} 

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <DetailProductSlider info={sampleInfo} />
                </MemoryRouter>
            </Provider>
        );

        const smallSquares = screen.getAllByAltText("Small square");

        fireEvent.click(smallSquares[1]);

        const largeImage = screen.getByAltText("Big square");

        expect(largeImage).toHaveAttribute("src", sampleInfo.url_image[1].split("/")[-1]);
      });

      it("resets to the first image when props change", () => {

        Element.prototype.scrollTo = () => {} 

        const {rerender} = render(
            <Provider store={store}>
                <MemoryRouter>
                    <DetailProductSlider info={sampleInfo} />
                </MemoryRouter>
            </Provider>
        );

        const smallSquares = screen.getAllByAltText("Small square");

        fireEvent.click(smallSquares[1]);

        const updatedInfo = { ...sampleInfo, url_image: ["new-image.jpg"] };

        rerender(
            <Provider store={store}>
                <MemoryRouter>
                    <DetailProductSlider info={sampleInfo} />
                </MemoryRouter>
            </Provider>
        );

        const largeImage = screen.getByAltText("Big square");
        expect(largeImage).toHaveAttribute("src", updatedInfo.url_image[0].split("/")[-1]);
      });
});
