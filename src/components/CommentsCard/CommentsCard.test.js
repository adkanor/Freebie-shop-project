import React from "react";
import {render} from "@testing-library/react";
import CommentsCard from "./CommentsCard";
import "@testing-library/jest-dom/extend-expect";

describe("CommentsCard component", () => {
    const mockData = {
        firstName: "John",
        commentaries: "This is a great product!",
        rating: 5,
        style: {backgroundColor: "red"},
        className: "testClass",
    };

    it("renders the component with the correct data", () => {
        const {getByText, getByAltText} = render(
            <CommentsCard
                firstName={mockData.firstName}
                commentaries={mockData.commentaries}
                rating={mockData.rating}
                style={mockData.style}
                className={mockData.className}
            />
        );

        expect(getByText(`John`)).toBeInTheDocument();
        expect(getByText(mockData.commentaries)).toBeInTheDocument();
        expect(getByAltText("approvedIcon")).toBeInTheDocument();
    });
});