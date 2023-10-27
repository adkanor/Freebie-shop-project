import React from "react";
import {render} from "@testing-library/react";
import Input from "./Input";
import {Formik} from "formik";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom/extend-expect";


describe("Input component", () => {
    it("renders input with provided props", () => {
        const props = {
            name: "testName",
            placeholder: "Enter text here",
            isError: false,
            errorText: "Error message",
            errorMessageOther: "Other error message",
            isErrorMessageServer: false,
            type: "text",
        };


        const {getByPlaceholderText, queryByText} = render(
            <Formik>
                <Input {...props} />
            </Formik>,
        );

        const inputElement = getByPlaceholderText("Enter text here");
        expect(inputElement).toBeInTheDocument();

        expect(queryByText(`*${props.errorText}`)).toBeNull();
        expect(queryByText(`*${props.errorMessageOther}`)).toBeNull();
    });

    it("renders error message if isError is true", () => {
        const props = {
            name: "testName",
            placeholder: "Enter text here",
            isError: true,
            errorText: "Error message",
            errorMessageOther: "Other error message",
            isErrorMessageServer: false,
            type: "text",
        };


        const {getByText} = render(
            <Formik>
                <Input {...props} />
            </Formik>,
        );

        expect(getByText(`*${props.errorText}`)).toBeInTheDocument();
    });

    it("renders server error message if isErrorMessageServer is true", () => {
        const props = {
            name: "testName",
            placeholder: "Enter text here",
            isError: false,
            errorText: "Error message",
            errorMessageOther: "Other error message",
            isErrorMessageServer: true,
            type: "text",
        };


        const {getByText} = render(
            <Formik>
                <Input {...props} />
            </Formik>,
        );

        expect(getByText(`*${props.errorMessageOther}`)).toBeInTheDocument();
    });
});