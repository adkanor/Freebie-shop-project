import { render, screen } from "@testing-library/react";
import ContactUs from "./ContactUs";

test("renders ContactUs component", () => {
    render(<ContactUs />);
    const textareaElement = screen.getByPlaceholderText(
        "Contact us and wait for responce via mail..."
    );
    const sendButtonElement = screen.getByRole("button", { name: /send/i });

    expect(textareaElement).toBeTruthy();
    expect(sendButtonElement).toBeTruthy();
});
