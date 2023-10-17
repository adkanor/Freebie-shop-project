import React, { useState } from "react";
import { Formik } from "formik";
import InputCheckout from "../../components/InputCheckout/InputCheckout";
import FormContent from "../../pages/CheckOut/formContent/FormContent";

import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import styles from "./CheckOut.module.css";
import stylesCart from "../CartPage/CartPage.module.css";
import EmptyCartPage from "../CartPage/EmptyCartPage/EmptyCartPage";
import validationSchemaCheckout from "./validationSchemaCheckout";
import PaymentForm from "../../components/PaymentForm/PaymentForm";
import { scrollToTop } from "../../utils/scrollToTop";
import AdaptiveNav from "../../components/AdaptiveNav/AdaptiveNav";
import { clearCart } from "../../stores/cartProducts/action";
import { useDispatch } from "react-redux";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
const CheckOut = () => {
    const [modal, setModal] = useState(false);
    const cartProducts = useSelector((state) => state.cartReducer.cartItems);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const toggleModal = () => {
        setModal(!modal);
    };
    return (
        <>
            {cartProducts.length > 0 ? (
                <div className="section">
                    <PaymentForm toggle={modal} toggleFunc={toggleModal} />
                    <nav className={stylesCart.sectionNav}>
                        <AdaptiveNav
                            linksObj={{
                                home: "/",
                                cart: "/cart",
                                checkout: "/checkout",
                            }}
                        />
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
                        onSubmit={(values) => {
                            if (values.payment === "Bank") {
                                toggleModal();
                            } else {
                                dispatch(clearCart());
                                navigate("/");
                                scrollToTop();
                            }
                        }}
                    >
                        {({ errors, touched }) => (
                            <>
                                <ProfileForm>
                                    <div className={styles.formSection}>
                                        <InputCheckout
                                            name="firstName"
                                            text="First Name"
                                            isError={
                                                errors.firstName &&
                                                touched.firstName
                                            }
                                            errorText={errors.firstName}
                                        />
                                        <InputCheckout
                                            name="companyName"
                                            text="Company Name"
                                            isError={
                                                errors.companyName &&
                                                touched.companyName
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
                                            isError={
                                                errors.city && touched.city
                                            }
                                            errorText={errors.city}
                                        />
                                        <InputCheckout
                                            name="phoneNumber"
                                            type="phone"
                                            text="Phone Number"
                                            isError={
                                                errors.phoneNumber &&
                                                touched.phoneNumber
                                            }
                                            errorText={errors.phoneNumber}
                                        />
                                        <InputCheckout
                                            name="email"
                                            type="email"
                                            text="Email Address"
                                            isError={
                                                errors.email && touched.email
                                            }
                                            errorText={errors.email}
                                        />
                                    </div>

                                    <div className={styles.formContentSection}>
                                        <FormContent />
                                    </div>
                                </ProfileForm>
                            </>
                        )}
                    </Formik>
                </div>
            ) : (
                <EmptyCartPage />
            )}
        </>
    );
};

export default CheckOut;
