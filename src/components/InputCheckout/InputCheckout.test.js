import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Formik } from 'formik';
import InputCheckout from './InputCheckout';

describe('InputCheckout Component', () => {
    it('should render a label and an input field', () => {
        render(
          <Formik initialValues={{ testName: '' }} onSubmit={() => {}}>
            <InputCheckout name="testName" text="Test Label" />
          </Formik>
        );
        const label = screen.getByText('Test Label');
        const input = screen.getByLabelText('Test Label');
        expect(label).toBeInTheDocument();
        expect(input).toBeInTheDocument();
      });

  it('should display an error message when isError is true', () => {
    render(
      <Formik initialValues={{ testName: '' }} onSubmit={() => {}}>
        <InputCheckout name="testName" text="Test Label" isError={true} errorText="This is an error" />
      </Formik>
    );
    const errorMessage = screen.getByText('*This is an error');
    expect(errorMessage).toBeInTheDocument();
  });

  it('should not display an error message when isError is false', () => {
    render(
      <Formik initialValues={{ testName: '' }} onSubmit={() => {}}>
        <InputCheckout name="testName" text="Test Label" isError={false} errorText="This is an error" />
      </Formik>
    );
    const errorMessage = screen.queryByText('*This is an error');
    expect(errorMessage).toBeNull();
  });


  it('should render an input field with a phone mask when type is "phone"', () => {
    render(
      <Formik initialValues={{ testName: '' }} onSubmit={() => {}}>
        <InputCheckout name="testName" text="Test Label" type="phone" />
      </Formik>
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('');
  });

  it('should match snapshot', () => {
    const { asFragment } = render(
      <Formik initialValues={{ testName: '' }} onSubmit={() => {}}>
        <InputCheckout name="testName" text="Test Label" />
      </Formik>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
