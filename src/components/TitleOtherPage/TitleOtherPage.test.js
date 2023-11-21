import React from "react";
import { render, screen } from "@testing-library/react";
import TitleOtherPage from "./TitleOtherPage";
import "@testing-library/jest-dom";

describe("TitleOtherPage Component", () => {
    it("renders with 'New Arrivals' title when sort is 'new'", () => {
        const paramsObj = { sort: "new" };
        render(<TitleOtherPage paramsObj={paramsObj} />);

        const titleElement = screen.getByText("New Arrivals");
        expect(titleElement).toBeInTheDocument();
    });

    it("renders with 'Top Selling' title when sort is 'topsales'", () => {
        const paramsObj = { sort: "topsales" };
        render(<TitleOtherPage paramsObj={paramsObj} />);

        const titleElement = screen.getByText("Top Selling");
        expect(titleElement).toBeInTheDocument();
    });


});