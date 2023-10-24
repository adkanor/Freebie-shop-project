import React from "react";
import {render, waitFor} from "@testing-library/react";
import axios from "axios";
import CommentsSlider from "./СommentsSlider";
import "@testing-library/jest-dom/extend-expect";


describe("CommentsSlider component", () => {
    it("renders comments with proper data", async () => {
        // Описуємо фейкові дані для тестування
        const mockData = [
            {
                firstName: "John",
                lastName: "Doe",
                text: "Some test comment",
                rating: 5,
            },
            // Додайте інші тестові дані за необхідністю
        ];

        jest.mock("axios", () => ({
            get: jest.fn(() => Promise.resolve({data: mockData})),
        }));

        const {getByText} = render(<CommentsSlider title="Test Title" link="some-link"/>);

        // Очікуємо, що текст буде відображений
        await waitFor(() => {
            expect(getByText(/John D/)).toBeInTheDocument();
            expect(getByText(/Some test comment/)).toBeInTheDocument();
            // Додайте інші перевірки, якщо потрібно
        });
    });
});