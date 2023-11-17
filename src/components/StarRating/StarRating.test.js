import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import StarRating from "./StarRating";

describe("StarRating", () => {
    it("renders the correct number of full stars", () => {
        const { container } = render(
            <StarRating rating={3.5} starSize="1rem" />
        );

        const fullStars = container.querySelectorAll(
            'span[style="color: var(--yellow-star);"]'
        );
        expect(fullStars.length).toBe(4);
    });

    it("renders the correct number of half stars", () => {
        const { container } = render(
            <StarRating rating={3.5} starSize="1rem" />
        );

        const halfStars = container.querySelectorAll(
            'span[style="color: var(--gray-primary); "]'
        );
        expect(halfStars.length).toBe(3);
    });

    it("renders the correct number of empty stars", () => {
        const { container } = render(
            <StarRating rating={4} starSize="1rem" />
        );

        const emptyStars = container.querySelectorAll(
            'span[style="color: var(--gray-primary);"]'
        );
        expect(emptyStars.length).toBe(1);
    });

    it("renders stars with the specified star size", () => {
        const { container } = render(<StarRating rating={5} starSize="2rem" />);

        const stars = container.querySelectorAll(
            'span[style="font-size: 2rem;"]'
        );
        expect(stars.length).toBe(5);
    });

    it("renders stars with the correct colors", () => {
        const { container } = render(
            <StarRating rating={2.5} starSize="1rem" />
        );

        const starElements = container.querySelectorAll("span");

        starElements.forEach((star, index) => {
            if (index < 2) {
                expect(star).toHaveStyle("color: var(--yellow-star);");
            } else if (index === 2) {
                expect(star).toHaveStyle("color: var(--gray-primary);");
            } else {
                expect(star).toHaveStyle("color: var(--gray-primary);");
            }
        });
    });
});
