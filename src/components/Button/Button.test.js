import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import BlackButton from "./Button";
import "@testing-library/jest-dom/extend-expect";

describe("BlackButton Component", () => {
    it("renders a button with the provided text", () => {
        const buttonText = "Click Me";
        render(<BlackButton text={buttonText} />);
        const button = screen.getByText(buttonText);
        expect(button).toBeInTheDocument();
    });

    it("calls the onClick function when the button is clicked", () => {
        const onClickMock = jest.fn();
        render(<BlackButton text="Click Me" onClick={onClickMock} />);
        const button = screen.getByText("Click Me");
        fireEvent.click(button);
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
    it("matches the snapshot", () => {
        const { asFragment } = render(<BlackButton text="Snapshot Test" />);
        expect(asFragment()).toMatchSnapshot();
    });
    it("renders a button with custom styles", () => {
        const buttonText = "Styled Button";
        const customStyles = {
            backgroundColor: "blue",
            padding: "10px",
        };
        render(<BlackButton text={buttonText} style={customStyles} />);
        const button = screen.getByText(buttonText);
        expect(button).toHaveStyle("background-color: blue");
        expect(button).toHaveStyle("padding: 10px");
    });

    it("renders a button with a custom type attribute", () => {
        const buttonText = "Custom Type Button";
        const customType = "submit";
        render(<BlackButton text={buttonText} type={customType} />);
        const button = screen.getByText(buttonText);
        expect(button).toHaveAttribute("type", customType);
    });

    it("renders a button with children elements", () => {
        render(
            <BlackButton text="Button with Children">
                <span>Child Element 1</span>
                <span>Child Element 2</span>
            </BlackButton>
        );
        const button = screen.getByText("Button with Children");
        expect(button).toBeInTheDocument();
        const childElement1 = screen.getByText("Child Element 1");
        expect(childElement1).toBeInTheDocument();
        const childElement2 = screen.getByText("Child Element 2");
        expect(childElement2).toBeInTheDocument();
    });

    it("renders a button with no onClick function", () => {
        render(<BlackButton text="No onClick Function" />);
        const button = screen.getByText("No onClick Function");
        fireEvent.click(button);
    });

    it("renders a button with no type attribute (default type is 'button')", () => {
        render(<BlackButton text="No Type Button" />);
        const button = screen.getByText("No Type Button");
        expect(button).toBeInTheDocument();
    });

    it("renders a button with no style", () => {
        render(<BlackButton text="No Style Button" />);
        const button = screen.getByText("No Style Button");
        expect(button).not.toHaveAttribute("style");
    });
});
