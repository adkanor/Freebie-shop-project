import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import EditProfile from "./EditProfile";
import { MemoryRouter } from "react-router-dom";
import "jest-localstorage-mock";
import { BrowserRouter } from "react-router-dom";

test("renders EditProfile component", () => {
    render(
        <MemoryRouter>
            <EditProfile />
        </MemoryRouter>
    );

    expect(screen.getByText("Personal Info")).toBeTruthy();
    expect(screen.getByText("Contact Us")).toBeTruthy();
    expect(screen.getByText("Orders")).toBeTruthy();
    expect(screen.getByText("Sign out")).toBeTruthy();
});

describe("EditProfile Component", () => {
    it("sign out button triggers sign out", () => {
        render(
            <BrowserRouter>
                <EditProfile />
            </BrowserRouter>
        );
        fireEvent.click(screen.getByText("Sign out"));

        expect(window.location.pathname).toBe("/login");
    });
});
