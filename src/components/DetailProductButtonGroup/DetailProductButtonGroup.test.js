import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DetailProductButtonGroup from "./DetailProductButtonGroup";

describe("DetailProductButtonGroup", () => {
    const sizes = [
        { size: "S", count: 2 },
        { size: "M", count: 0 },
        { size: "L", count: 1 },
    ];

    it("renders buttons with correct styles", () => {
        render(<DetailProductButtonGroup sizes={sizes} values={sizes[0]} />);

        const buttons = screen.getAllByRole("button");

        expect(buttons).toHaveLength(sizes.length);

        buttons.forEach((button, index) => {
            const sizeObj = sizes[index];
            expect(button).toHaveTextContent(sizeObj.size);

            if (sizeObj.count === 0) {
                expect(button).toHaveStyle("pointer-events: none");
            } else {
                expect(button).not.toHaveStyle("pointer-events: none");
            }
        });
    });

    it("handles button click correctly", () => {
        const values = { size: "S" };
        render(<DetailProductButtonGroup sizes={sizes} values={values} />);

        const buttonL = screen.getByText("L");
        fireEvent.click(buttonL);

        expect(values.size).toBe("L");
    });
});
