import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BrandBox from "./BrandsRow";

test("BrandBox renders without errors", () => {
  const { container } = render(<BrandBox />);
  expect(container).toBeInTheDocument();
});

test("BrandBox displays the correct number of brands", () => {
  const { getAllByAltText } = render(<BrandBox />);
  const brandLogos = getAllByAltText(/.* SVG/);
  expect(brandLogos).toHaveLength(5);
});

test("Brands have the correct alt texts", () => {
  const { getAllByAltText } = render(<BrandBox />);
  const brandImages = getAllByAltText(/.* SVG/);

  const expectedAltTexts = [
    "Versace SVG",
    "Zara SVG",
    "Gucci SVG",
    "Prada SVG",
    "Calvin Klein SVG",
  ];

  for (let i = 0; i < brandImages.length; i++) {
    expect(brandImages[i]).toHaveAttribute("alt", expectedAltTexts[i]);
  }
});
