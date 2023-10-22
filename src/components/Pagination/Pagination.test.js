import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Pagination from "./Pagination";

describe("Pagination Component", () => {
    
  it("renders page numbers correctly", () => {
    const { getByText } = render(
      <Pagination
        onPageChange={() => {}}
        totalCount={10}
        currentPage={1}
        pageSize={5}
      />
    );

    expect(getByText("1")).toBeInTheDocument();
    expect(getByText("2")).toBeInTheDocument();
  });

  it("applies the 'selected' class to the current page", () => {
    const { getByText } = render(
      <Pagination
        onPageChange={() => {}}
        totalCount={10}
        currentPage={2}
        pageSize={5}
      />
    );
    expect(getByText("2")).toHaveClass("selected");
  });
  
});
