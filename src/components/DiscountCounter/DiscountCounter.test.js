import React from "react";
import { render, screen } from "@testing-library/react";
import DiscountCounter from "./DiscountCounter";

describe("DiscountCounter Component", () => {
    it("displays discount message when `discountMessage` is provided", () => {
        const discountMessage = "Get a 20% discount!";
        const discount = 20;

        render(
            <DiscountCounter
                discountMessage={discountMessage}
                discount={discount}
            />
        );

        const messageElement = screen.getByText(discountMessage);
        expect(messageElement).toBeTruthy();
    });

    it("displays the discount scale based on the `discount` value", () => {
        const discountMessage = "Get a 25% discount!";
        const discount = 25;

        render(
            <DiscountCounter
                discountMessage={discountMessage}
                discount={discount}
            />
        );

        const scaleFillElement = screen.getByTestId(
            `discount-scale-fill-${discount}`
        );
        expect(scaleFillElement).toBeTruthy();
    });
});
