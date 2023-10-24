import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Preloader from "./Preloader";

test("Preloader renders without errors", () => {
<<<<<<< HEAD
  const { container } = render(<Preloader />);
  expect(container).toBeInTheDocument();
=======
    const { container } = render(<Preloader />);
    expect(container).toBeInTheDocument();
>>>>>>> development
});
