import React from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import styles from "./CheckOut.module.css";
import stylesCart from "../CartPage/CartPage.module.css";
import arrow from "../../assets/icons/Cart/arrow-right-bold.svg";
import FormContent from "./formContent/FormContent";
import InputCheckout from "../../components/InputCheckout/InputCheckout";
import validationSchemaCheckout from "./validationSchemaCheckout";
const CheckOut = () => {
    return (
        <div className="section">
            <nav className={stylesCart.sectionNav}>
                <ul className={stylesCart.breadcrumbsList}>
                    <li>
                        <Link
                            to="/"
                            className={stylesCart.breadcrumbsLinkToHome}
                        >
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
                    <img
                        className={stylesCart.breadcrumbsArrow}
                        src={arrow}
                        alt="arrowLeft"
                        width="14"
                        height="14"
                    />
                    <li>
                        <Link
                            to="/checkout"
                            className={stylesCart.breadcrumbsLinkToCart}
                        >
                            Checkout
                        </Link>
                    </li>
                </ul>
            </nav>
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
                validationSchema={validationSchemaCheckout}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ errors, touched }) => (
                    <Form className={styles.form}>
                        <div className={styles.formSection}>
                            <InputCheckout
                                name="firstName"
                                text="First Name"
                                isError={errors.firstName && touched.firstName}
                                errorText={errors.firstName}
                            />
                            <InputCheckout
                                name="companyName"
                                text="Company Name"
                                isError={
                                    errors.companyName && touched.companyName
                                }
                                errorText={errors.companyName}
                            />
                            <InputCheckout
                                name="streetAddress"
                                text="Street Address"
                                isError={
                                    errors.streetAddress &&
                                    touched.streetAddress
                                }
                                errorText={errors.streetAddress}
                            />
                            <InputCheckout
                                name="apartmentInfo"
                                text="Apartment, floor, etc. (optional)"
                                isError={
                                    errors.apartmentInfo &&
                                    touched.apartmentInfo
                                }
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
                                isError={
                                    errors.phoneNumber && touched.phoneNumber
                                }
                                errorText={errors.phoneNumber}
                            />
                            <InputCheckout
                                name="email"
                                type="email"
                                text="Email Address"
                                isError={errors.email && touched.email}
                                errorText={errors.email}
                            />
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
