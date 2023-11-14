import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ErrorModal from "./ErrorModal";
import { MemoryRouter } from "react-router-dom";

describe("ErrorModal Component", () => {
  it("renders the ErrorModal component when toggle is true", () => {
    render(
      <MemoryRouter>
        <ErrorModal toggle={true} toggleFunc={() => {}} />
      </MemoryRouter>
    );

    expect(() => screen.getByText("The product is out of stock!!!")).not.toThrow();
});

  it("does not render the ErrorModal component when toggle is false", () => {
    render(
      <MemoryRouter>
        <ErrorModal toggle={false} toggleFunc={() => {}} />
      </MemoryRouter>
    );
    expect(screen.queryByText("The product is out of stock!!!")).toBeNull();
  });

  it("calls toggleFunc and navigates when clicking on the overlay and 'X' button", () => {
    const toggleFunc = jest.fn();
    const navigate = jest.fn();

    render(
      <MemoryRouter>
        <ErrorModal toggle={true} toggleFunc={toggleFunc} />
      </MemoryRouter>
    );

    const overlay = screen.getByTestId("overlay");
    const closeButton = screen.getByText("X");

    fireEvent.click(closeButton);
    fireEvent.click(overlay);
    expect(toggleFunc).toHaveBeenCalledTimes(0);
    expect(navigate).toHaveBeenCalledTimes(0);
  });
});
