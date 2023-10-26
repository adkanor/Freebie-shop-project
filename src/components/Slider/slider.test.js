import Slider from "./Slider";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


describe("Slider component", () => {

    it("Render slider", () => {
        render(<Slider/>);
        const sliderWrapper = screen.getByTestId("sliderWrapper");
        expect(sliderWrapper).toBeInTheDocument();
    });

    it("renders the \"Shop Now\" button", () => {
        render(<Slider/>);
        const shopNowButton = screen.getByText(/Shop Now/i);
        expect(shopNowButton).toBeInTheDocument();
    });
});


