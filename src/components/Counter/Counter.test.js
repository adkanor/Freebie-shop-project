import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "./Counter";
import "@testing-library/jest-dom/extend-expect";

describe("Counter Component", () => {
  it("renders the component with the initial quantity", () => {
    const { container } = render(<Counter onDecrease={() => {}} quantity={1} onIncrease={() => {}} />);
    const decreaseButton = screen.getByText("-");
    const quantityNumber = screen.getByText("1");
    const increaseButton = screen.getByText("+");

    expect(decreaseButton).toBeInTheDocument();
    expect(quantityNumber).toBeInTheDocument();
    expect(increaseButton).toBeInTheDocument();
  });

  it("calls onDecrease when the '-' button is clicked", () => {
    const onDecrease = jest.fn();
    render(<Counter onDecrease={onDecrease} quantity={2} onIncrease={() => {}} />);
    const decreaseButton = screen.getByText("-");
    fireEvent.click(decreaseButton);
    expect(onDecrease).toHaveBeenCalledTimes(1);
  });

  it("calls onIncrease when the '+' button is clicked", () => {
    const onIncrease = jest.fn();
    render(<Counter onDecrease={() => {}} quantity={2} onIncrease={onIncrease} />);
    const increaseButton = screen.getByText("+");
    fireEvent.click(increaseButton);
    expect(onIncrease).toHaveBeenCalledTimes(1);
  });

  it("disables the '-' button when quantity is 1", () => {
    const { container } = render(<Counter onDecrease={() => {}} quantity={1} onIncrease={() => {}} />);
    const decreaseButton = screen.getByText("-");
    expect(decreaseButton).toBeDisabled();
  });
});
