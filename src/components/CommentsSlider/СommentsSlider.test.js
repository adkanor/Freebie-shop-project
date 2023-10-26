import React from "react";
import {render, waitFor, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import CarouselComponent from "./СommentsSlider"; // замініть це на шлях до вашого компонента

jest.mock("axios");

describe("CarouselComponent", () => {
    it("Test api", async () => {
        axios.get.mockRejectedValue(new Error("404 Not Found"));
        console.error = jest.fn();

        render(<CarouselComponent/>);
        await waitFor(() => {
            expect(console.error).toHaveBeenCalledWith("404", new Error("404 Not Found"));
        });
    });
});