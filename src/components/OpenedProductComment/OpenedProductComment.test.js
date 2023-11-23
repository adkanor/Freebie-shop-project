import React from "react";
import { render, screen } from "@testing-library/react";
import OpenedProductComment from "./OpenedProductComment";
import "@testing-library/jest-dom/extend-expect";
import { formatDate } from "../../utils/dateformatting";

describe("OpenedProductComment Component", () => {
    const commentData = {
        mark: 4,
        username: "JohnDoe",
        text: "Great product!",
        date: "2023-11-22T12:30:00Z",
    };

    it("renders comment data properly", () => {
        render(
            <OpenedProductComment
                mark={commentData.mark}
                username={commentData.username}
                text={commentData.text}
                date={commentData.date}
            />
        );

        const usernameElement = screen.getByText(commentData.username);
        expect(usernameElement).toBeInTheDocument();

        const textElement = screen.getByText(commentData.text);
        expect(textElement).toBeInTheDocument();

        const dateElement = screen.getByText("Posted on");
        expect(dateElement).toBeInTheDocument();
        expect(dateElement).toHaveTextContent(formatDate(commentData.date));
    });

    it("renders comment without date properly", () => {
        const commentDataWithoutDate = {
            mark: 3,
            username: "JaneDoe",
            text: "Nice product!",
        };

        render(
            <OpenedProductComment
                mark={commentDataWithoutDate.mark}
                username={commentDataWithoutDate.username}
                text={commentDataWithoutDate.text}
            />
        );

        const usernameElement = screen.getByText(
            commentDataWithoutDate.username
        );
        expect(usernameElement).toBeInTheDocument();

        const textElement = screen.getByText(commentDataWithoutDate.text);
        expect(textElement).toBeInTheDocument();

        const dateElement = screen.queryByText("Posted on");
        expect(dateElement).toBeNull();
    });
});
