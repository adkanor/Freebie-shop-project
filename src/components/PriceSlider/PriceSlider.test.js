import React from "react";
import { render, screen } from "@testing-library/react";
import PriceSlider from "./PriceSlider";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

test("renders PriceSlider component with default props", () => {
    const valuePriseHandlerMock = jest.fn();
    const filterStateMock = { minprice: 20, maxprice: 80 };

    render(
        <PriceSlider
            valuePriseHandler={valuePriseHandlerMock}
            filterState={filterStateMock}
        />
    );

    expect(screen.getByText("Price")).toBeInTheDocument();
});
test("calls valuePriseHandler when slider value changes", () => {
    const valuePriseHandlerMock = jest.fn();
    const filterStateMock = { minprice: 20, maxprice: 80 };

    render(
        <PriceSlider
            valuePriseHandler={valuePriseHandlerMock}
            filterState={filterStateMock}
        />
    );

    userEvent.click(screen.getByTestId("multi-range-slider"), { clientX: 100 });

    expect(valuePriseHandlerMock).toHaveBeenCalledWith({
        minprice: expect.any(Number),
        maxprice: expect.any(Number),
    });
});
