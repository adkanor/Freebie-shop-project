import React, { useState } from "react";
import { Formik } from "formik";
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

    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    let obj = {
        token: "",
        email: "",
        personalInfo: [],
        goods: [],
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
                            companyName: "",
                            streetAddress: "",
                            apartmentInfo: "",
                            city: "",
                            phoneNumber: "",
                        }}
                        validationSchema={validationSchemaCheckout}
                        onSubmit={(values) => {
                            if (values.payment === "Bank") {
                                toggleModal();
                            } else {
                                obj.personalInfo = values;
                                obj.goods = cartProducts;
                                obj.token = token;
                                obj.user = user;
                                console.log(obj);
                                dispatch(clearCart());
                                navigate("/");
                                scrollToTop();
                            }
                        }}
                    >
                        {({ errors, touched }) => (
                            <>
                                <ProfileForm
                                    isCheckOut={true}
                                    errors={errors}
                                    touched={touched}
                                ></ProfileForm>
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
