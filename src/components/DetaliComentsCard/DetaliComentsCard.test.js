import React from "react";
import {
    render,
    screen,
    fireEvent,
    waitFor,
    act,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DetaliComentsCard from "./DetaliComentsCard.jsx";

describe("DetaiLComentsCard", () => {
    const sampleDetails = "Color: Red && Size: Small";
    const sampleFAQ = "Frequently Asked Questions";

    it("renders product details tab when tabNum is 0", () => {
        render(
            <DetaliComentsCard
                details={sampleDetails}
                idGoods="1"
                FAQ={sampleFAQ}
            />
        );

        const productDetailsTab = screen.getByText("Product Details");
        expect(productDetailsTab).toBeInTheDocument();

        const detailsText = screen.getByText("Color:");
        expect(detailsText).toBeInTheDocument();
    });

    it("renders the comments tab when tabNum is 1 and no comments on get", () => {
        render(
            <DetaliComentsCard
                details={sampleDetails}
                idGoods="1"
                FAQ={sampleFAQ}
            />
        );
        const commentsTab = screen.getByText("Rating & Reviews");

        fireEvent.click(commentsTab);

        const noCommentsMessage = screen.getByText("No comments yet");
        expect(noCommentsMessage).toBeInTheDocument();

        const writeReviewButton = screen.getByText("Write a Review");
        expect(writeReviewButton).toBeInTheDocument();
    });

    it("renders the comments tab when tabNum is 1 with comments", async () => {
        await act(() =>
            render(
                <DetaliComentsCard
                    details={sampleDetails}
                    idGoods="6522ffea3ecd0de1f47512dc"
                    FAQ={sampleFAQ}
                />
            )
        );
        await waitFor(() => {
            const commentsTab = screen.getByText("Rating & Reviews");

            fireEvent.click(commentsTab);

            const filterSelect = screen.getByTestId("commentsFilter");
            expect(filterSelect).toBeInTheDocument();

            const writeReviewButton = screen.getByText("Write a Review");
            expect(writeReviewButton).toBeInTheDocument();
        });
    });

    it("renders the about page when tabNum is 2", async () => {
      await act(() =>
          render(
              <DetaliComentsCard
                  details={sampleDetails}
                  idGoods="6522ffea3ecd0de1f47512dc"
                  FAQ={sampleFAQ}
              />
          )
      );
      await waitFor(() => {
          const aboutTab = screen.getByText("FAQs");

          fireEvent.click(aboutTab);

          const about = screen.getByTestId("description");
          expect(about).toBeInTheDocument();
      });
  });
});
