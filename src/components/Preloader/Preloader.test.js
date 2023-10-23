import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Preloader from "./Preloader";

test("Preloader renders without errors", () => {
    const { container } = render(<Preloader />);
    expect(container).toBeInTheDocument();
});
