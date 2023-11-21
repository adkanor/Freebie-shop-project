import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import StarRating from "./StarRating";

describe("StarRating", () => {
    it("renders the correct number of full stars", () => {
        render(<StarRating rating={3} starSize="1rem" />);
        const fullStars = screen.getAllByText("★");
        expect(fullStars.length).toBe(3);
    });

    it("renders the correct number of half stars", () => {
        render(<StarRating rating={4.5} starSize="1rem" />);
        const halfStars = screen.getAllByText("☆");
        expect(halfStars.length).toBe(1);
    });

    it("renders the correct number of empty stars", () => {
        render(<StarRating rating={4} starSize="1rem" />);
        const emptyStars = screen.getAllByText("☆");
        expect(emptyStars.length).toBe(1);
    });
});
