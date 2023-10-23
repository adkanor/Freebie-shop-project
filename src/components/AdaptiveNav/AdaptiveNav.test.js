import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom"; // Добавляем MemoryRouter

import AdaptiveNav from "./AdaptiveNav";

test("renders the component with links", () => {
    const linksObj = {
        Home: "/",
        Products: "/products",
        Contact: "/contact",
    };

    render(
        <MemoryRouter>
            {" "}
            {/* Оборачиваем компонент в MemoryRouter */}
            <AdaptiveNav linksObj={linksObj} />
        </MemoryRouter>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Products")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
});
