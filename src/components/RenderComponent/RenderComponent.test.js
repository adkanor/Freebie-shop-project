import React from "react";
import { render } from "@testing-library/react";
import RenderComponent from "./RenderComponent";

describe("RenderComponent", () => {
  it("renders without errors", () => {
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: true,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));
    
    const type = [];
    render(<RenderComponent type={type} />);
  });
});
