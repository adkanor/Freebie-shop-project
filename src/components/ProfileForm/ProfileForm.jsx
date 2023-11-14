import React from "react";
import styles from "../../pages/CheckOut/CheckOut.module.css";
import { Form } from "formik";
import PropTypes from "prop-types";
import InputCheckout from "../../components/InputCheckout/InputCheckout";
import FormContent from "../FormContent/FormContent";

const ProfileForm = ({ children, isCheckOut, errors, touched }) => {
    return (
        <Form className={styles.form}>
            <div className={styles.formSection}>
                <InputCheckout
                    name="userName"
                    text="First Name"
                    isError={errors.userName && touched.userName}
                    errorText={errors.userName}
                />
                <InputCheckout
                    name="companyName"
                    text="Company Name"
                    isError={errors.companyName && touched.companyName}
                    errorText={errors.companyName}
                />
                <InputCheckout
                    name="streetAddress"
                    text="Street Address"
                    isError={errors.streetAddress && touched.streetAddress}
                    errorText={errors.streetAddress}
                />
                <InputCheckout
                    name="apartmentInfo"
                    text="Apartment, floor, etc. (optional)"
                    isError={errors.apartmentInfo && touched.apartmentInfo}
                    errorText={errors.apartmentInfo}
                />
                <InputCheckout
                    name="city"
                    text="Town/City"
                    isError={errors.city && touched.city}
                    errorText={errors.city}
                />
                <InputCheckout
                    name="phoneNumber"
                    type="phone"
                    text="Phone Number"
                    isError={errors.phoneNumber && touched.phoneNumber}
                    errorText={errors.phoneNumber}
                />
                <InputCheckout
                    name="email"
                    type="email"
                    text="Email Address"
                    isError={errors.email && touched.email}
                    errorText={errors.email}
                />
                {children}
            </div>
            {isCheckOut && (
                <div className={styles.formContentSection}>
                    <FormContent />
                </div>
            )}
        </Form>
    );
};

ProfileForm.propTypes = {
    children: PropTypes.node,
    isCheckOut: PropTypes.bool,
    errors: PropTypes.object,
    touched: PropTypes.object,
};

ProfileForm.defaultProps = {
    isCheckOut: false,
};

export default ProfileForm;
