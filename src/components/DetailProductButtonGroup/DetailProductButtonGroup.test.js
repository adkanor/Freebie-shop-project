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
        render(
            <DetailProductButtonGroup sizes={sizes} values={{ size: "S" }} />
        );

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

    // it("handles button click correctly", () => {
    //     render(
    //         <DetailProductButtonGroup
    //             sizes={sizes}
    //             values={{ size: "S" }}
    //         />
    //     );

    //     const buttons = screen.getAllByRole("button");

    //     fireEvent.click(buttons[2]);
    //     fireEvent.click(buttons[1]);
    //     const enabledButton = screen.getByText("L");
    //     console.log(enabledButton)
    //     expect(enabledButton).toHaveStyle("color: white");
    // });
});
