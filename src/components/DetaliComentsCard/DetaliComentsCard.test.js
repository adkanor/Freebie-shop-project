import React from "react";
import {render, waitFor} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import DetaiLComentsCard from "./DetaliComentsCard";

jest.mock("axios");

describe("DetaiLComentsCard", () => {
    it("Axios get test", async () => {
        axios.get.mockRejectedValueOnce(new Error("404 Not Found"));
        console.error = jest.fn();

        render(<DetaiLComentsCard idGoods="someId"/>);
        await waitFor(() => {
            expect(console.error).toHaveBeenCalledWith("404", new Error("404 Not Found"));
        });
    });


});