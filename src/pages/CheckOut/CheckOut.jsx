import React from "react";
import { Formik, Field, Form } from "formik";
import { Link } from "react-router-dom";
import styles from "./CheckOut.module.css";
import stylesCart from "../CartPage/CartPage.module.css";
import arrow from "../../assets/icons/Cart/arrow-right-bold.svg";
import FormContent from "./formContent/FormContent";
import * as Yup from "yup";
import Input from "../../components/InputPassworgLogin/Input";
const validateSchema = Yup.object().shape({
    firstName: Yup.string().max(40).required("This field is required"),
    email: Yup.string()
        .email("Please enter a valid email")
        .required("This field is required"),
});
const CheckOut = () => {
    return (
        <div className="section">
            <ul className={stylesCart.breadcrumbsList}>
                <li>
                    <Link to="/" className={stylesCart.breadcrumbsLinkToHome}>
                        Home
                    </Link>
                </li>
                <img
                    className={stylesCart.breadcrumbsArrow}
                    src={arrow}
                    alt="arrowLeft"
                    width="14"
                    height="14"
                />
                <li>
                    <Link
                        to="/cart"
                        className={stylesCart.breadcrumbsLinkToCart}
                    >
                        Cart
                    </Link>
                </li>
            </ul>
            <h1 className={styles.formTitle}>Billing Details</h1>
            <Formik
                initialValues={{
                    firstName: "",
                    companyName: "",
                    streetAddress: "",
                    apartmentInfo: "",
                    city: "",
                    phoneNumber: "",
                    email: "",
                }}
                validationSchema={validateSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ errors, touched }) => (
                    <Form className={styles.form}>
                        <div className={styles.formSection}>
                            <div className={styles.formItem}>
                                <label
                                    className={styles.formLabel}
                                    htmlFor="firstName"
                                >
                                    First Name
                                </label>
                                {/* <Field
                                    id="firstName"
                                    name="firstName"
                                    className={styles.formInput}
                                /> */}
                                <Input
                                    name="firstName"
                                    isError={
                                        errors.firstName && touched.firstName
                                    }
                                    errorText={errors.firstName}
                                    type={"text"}
                                />
                            </div>

                            <div className={styles.formItem}>
                                <label
                                    className={styles.formLabel}
                                    htmlFor="lastName"
                                >
                                    Company Name
                                </label>
                                <Field
                                    id="companyName"
                                    name="companyName"
                                    className={styles.formInput}
                                />
                            </div>

                            <div className={styles.formItem}>
                                <label
                                    className={styles.formLabel}
                                    htmlFor="streetAddress"
                                >
                                    Street Address
                                </label>
                                <Field
                                    id="streetAddress"
                                    name="streetAddress"
                                    className={styles.formInput}
                                />
                            </div>

                            <div className={styles.formItem}>
                                <label
                                    className={styles.formLabel}
                                    htmlFor="apartmentInfo"
                                >
                                    Apartment, floor, etc. (optional)
                                </label>
                                <Field
                                    id="apartmentInfo"
                                    name="apartmentInfo"
                                    className={styles.formInput}
                                />
                            </div>

                            <div className={styles.formItem}>
                                <label
                                    className={styles.formLabel}
                                    htmlFor="city"
                                >
                                    Town/City
                                </label>
                                <Field
                                    id="city"
                                    name="city"
                                    className={styles.formInput}
                                />
                            </div>

                            <div className={styles.formItem}>
                                <label
                                    className={styles.formLabel}
                                    htmlFor="phoneNumber"
                                >
                                    Phone Number
                                </label>
                                <Field
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    className={styles.formInput}
                                />
                            </div>

                            <div className={styles.formItem}>
                                <label
                                    className={styles.formLabel}
                                    htmlFor="email"
                                >
                                    Email Address
                                </label>
                                <Field
                                    id="email"
                                    name="email"
                                    type="email"
                                    className={styles.formInput}
                                />
                            </div>
                        </div>
                        <div className={styles.formContentSection}>
                            <FormContent />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CheckOut;
