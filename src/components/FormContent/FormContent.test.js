import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormContent from "./FormContent";
import { Provider } from "react-redux";
import { Formik, Form } from 'formik'; 
import store from "../../stores/store";

test("FormContent renders correctly",async () => {
    const initialValues = {
      };
  render(
    
    <Formik initialValues={initialValues} onSubmit={() => {}}>
    <Form>
    <Provider store={store}>
        <FormContent />
      </Provider>
    </Form>
  </Formik>
  );

  const subtotalTitle = screen.getByText("Subtotal");
  expect(subtotalTitle).toBeTruthy();

  const placeOrderButton = screen.getByText("Place Order");
  expect(placeOrderButton).toBeTruthy();

});

test("Payment type changes when radio buttons are clicked", () => {
    const initialValues = {
      };
  render(
    <Formik initialValues={initialValues} onSubmit={() => {}}>
    <Form>
    <Provider store={store}>
        <FormContent />
      </Provider>
    </Form>
  </Formik>
  );

  const cashRadioButton = screen.getByText("Cash on delivery");
  expect(cashRadioButton).toBeTruthy();

  const bankRadioButton = screen.getByText("Bank");
  userEvent.click(bankRadioButton);

  const paymentTypeText = screen.getByText("Place Order");
  expect(paymentTypeText).toBeTruthy();
});

