import React from "react";
import { render, screen } from "@testing-library/react";
import TitleOtherPage from "./TitleOtherPage";
import "@testing-library/jest-dom/extend-expect";

test("renders TitleOtherPage component with `New approval`title", () => {
    const paramsObj = { sort: "new" };

    render(<TitleOtherPage paramsObj={paramsObj} />);

    expect(screen.queryByText("New approval")).toBeInTheDocument();
});

test("renders TitleOtherPage component with `topselling` title", () => {
    const paramsObj = { sort: "topselling" };

    render(<TitleOtherPage paramsObj={paramsObj} />);

    expect(screen.queryByText("topselling")).toBeInTheDocument();
});
