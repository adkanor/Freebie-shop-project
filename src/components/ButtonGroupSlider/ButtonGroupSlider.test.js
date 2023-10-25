import React from "react";
import "@testing-library/jest-dom/extend-expect";
import CustomButtonGroup from "./ButtonGroupSlider";
import {render, fireEvent} from "@testing-library/react";


describe("CustomButtonGroup component", () => {
    it("renders the component with left and right arrows", () => {
        const {getByAltText} = render(<CustomButtonGroup/>);
        expect(getByAltText("leftArrow")).toBeInTheDocument();
        expect(getByAltText("rightArrow")).toBeInTheDocument();
    });

    it("calls the \"previous\" function when left arrow is clicked", () => {
        const mockPrevious = jest.fn();
        const {getByAltText} = render(<CustomButtonGroup previous={mockPrevious}/>);
        fireEvent.click(getByAltText("leftArrow"));
        expect(mockPrevious).toHaveBeenCalledTimes(1);
    });

    it("calls the \"next\" function when right arrow is clicked", () => {
        const mockNext = jest.fn();
        const {getByAltText} = render(<CustomButtonGroup next={mockNext}/>);
        // eslint-disable-next-line testing-library/prefer-screen-queries
        fireEvent.click(getByAltText("rightArrow"));
        expect(mockNext).toHaveBeenCalledTimes(1);
    });
});