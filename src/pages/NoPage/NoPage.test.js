import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NoPage from "./NoPage";
import { useNavigate } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

jest.mock("react-router-dom", () => {
    return {
        ...jest.requireActual("react-router-dom"),
        useNavigate: jest.fn(),
    };
});

describe("NoPage", () => {
    it("should render the `404 not found` message", () => {
        render(<NoPage />);
        expect(screen.getByText("404 not found")).toBeInTheDocument();
    });

    it("should render the `Your visited page not found` message", () => {
        render(<NoPage />);
        expect(
            screen.getByText(
                "Your visited page not found. You may go home page."
            )
        ).toBeInTheDocument();
    });

    it("should render a `Go back` button", () => {
        render(<NoPage />);
        const goBackButton = screen.getByText("Go back");
        expect(goBackButton).toBeInTheDocument();
    });

    it("should call navigate with -1 when the `Go back` button is clicked", () => {
        const navigate = jest.fn();
        useNavigate.mockReturnValue(navigate);
        render(<NoPage />);
        const goBackButton = screen.getByText("Go back");
        fireEvent.click(goBackButton);
        expect(navigate).toHaveBeenCalledWith(-1);
    });
});
