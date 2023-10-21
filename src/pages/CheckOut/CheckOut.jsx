import React, { useState } from "react";
import { Formik } from "formik";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import styles from "./CheckOut.module.css";
import stylesCart from "../CartPage/CartPage.module.css";
import EmptyCartPage from "../CartPage/EmptyCartPage/EmptyCartPage";
import validationSchemaCheckout from "./validationSchemaCheckout";
import { scrollToTop } from "../../utils/scrollToTop";
import AdaptiveNav from "../../components/AdaptiveNav/AdaptiveNav";
import { clearCart } from "../../stores/cartProducts/action";
import { useDispatch } from "react-redux";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
const CheckOut = () => {
    const cartProducts = useSelector((state) => state.cartReducer.cartItems);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const token = localStorage.getItem("token");

    let obj = {
        token: "",
        payment: "",
        email: "",
        personalInfo: [],
        goods: [],
    };

    const [data, setData] = useState(obj);
    return (
        <>
            {cartProducts.length > 0 ? (
                <div className="section">
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
                            userName: "",
                            companyName: "",
                            streetAddress: "",
                            apartmentInfo: "",
                            city: "",
                            phoneNumber: "",
                            email: "",
                        }}
                        validationSchema={validationSchemaCheckout}
                        onSubmit={(values) => {
                            setData({
                                personalInfo: values,
                                goods: cartProducts,
                                token: token,
                                email: values.email,
                                payment: values.payment,
                            });
                            console.log(data);
                            dispatch(clearCart());
                            navigate("/");
                            scrollToTop();
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
