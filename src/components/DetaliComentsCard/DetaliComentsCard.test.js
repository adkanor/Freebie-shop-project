import React from "react";
import {render, waitFor} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import DetaiLComentsCard from "./DetaliComentsCard";
import MockAdapter from "axios-mock-adapter";

jest.mock("axios");

describe("DetaiLComentsCard", () => {
    it("Axios get test", async () => {
        const mockComments = [
            {
                _id: 1,
                firstName: "John",
                lastName: "Doe",
                text: "First comment",
                rating: 5,
            },
            {
                _id: 2,
                firstName: "Jane",
                lastName: "Doe",
                text: "Second comment",
                rating: 4,
            },
        ];
        const setComments = jest.fn();

        jest.spyOn(React, "useState").mockReturnValue([mockComments, setComments]);

        const idGoods = 123;
        const mock = new MockAdapter(axios);
        mock
            .onGet(
                "https://shopcoserver-git-main-chesterfalmen.vercel.app/api/comments/"
            )
            .reply(200, mockComments);

        axios.get(
            "https://shopcoserver-git-main-chesterfalmen.vercel.app/api/comments"
        ).then(function (response) {
            console.log(response.data);
        });

        render(<DetaiLComentsCard idGoods={idGoods}/>);

        await waitFor(() => {
            expect(setComments).toHaveBeenCalledWith(mockComments);
        });
    });
});