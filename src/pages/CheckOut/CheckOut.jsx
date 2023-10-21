import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import axios from "axios";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import styles from "./CheckOut.module.css";
import stylesCart from "../CartPage/CartPage.module.css";
import EmptyCartPage from "../CartPage/EmptyCartPage/EmptyCartPage";
import stylesInfo from "../../components/PersonalInfo/PersonalInfo.module.css";
import validationSchemaCheckout from "./validationSchemaCheckout";
import Preloader from "../../components/Preloader/Preloader";
import { scrollToTop } from "../../utils/scrollToTop";
import AdaptiveNav from "../../components/AdaptiveNav/AdaptiveNav";
import { clearCart } from "../../stores/cartProducts/action";
import { useDispatch } from "react-redux";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import { fetchUserData } from "../../stores/personalInfo/action";
const CheckOut = () => {
    const cartProducts = useSelector((state) => state.cartReducer);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const token = localStorage.getItem("token");
    const [isLoading, setIsLoading] = useState(true);
    const userData = useSelector((state) => state.personalInfoReducer.userData);
    const errorMessage = useSelector(
        (state) => state.personalInfoReducer.error
    );
    useEffect(() => {
        if (token) {
            dispatch(fetchUserData(token))
                .then(() => setIsLoading(false))
                .catch(() => setIsLoading(false));
        }
    }, [dispatch, token]);

    const [data, setData] = useState({
        token: "",
        orderDate: "",
        payment: "",
        email: "",
        personalInfo: [],
        goods: [],
        totalValue: 0,
    });
    useEffect(() => {
        axios
            .post(
                "https://shopcoserver-git-main-chesterfalmen.vercel.app/api/orders/add",
                data,
                {
                    headers: {
                        Authorization: token,
                    },
                }
            )
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [data, token]);

    if (isLoading) {
        return <Preloader />;
    } else if (errorMessage) {
        return (
            <div className={stylesInfo.errorMessage}>
                Error: {errorMessage}. Please try later
            </div>
        );
    }

    return (
        <>
            {cartProducts.cartItems.length > 0 ? (
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
                            userName: userData ? userData.userName : "",
                            companyName: userData ? userData.companyName : "",
                            streetAddress: userData
                                ? userData.streetAddress
                                : "",
                            apartmentInfo: userData
                                ? userData.apartmentInfo
                                : "",
                            city: userData ? userData.city : "",
                            phoneNumber: userData ? userData.phoneNumber : "",
                            email: userData ? userData.email : "",
                        }}
                        validationSchema={validationSchemaCheckout}
                        onSubmit={async (values) => {
                            await setData({
                                personalInfo: values,
                                goods: cartProducts.cartItems,
                                token: token,
                                email: values.email,
                                payment: values.payment,
                                orderDate:
                                    new Date().toLocaleDateString() +
                                    " " +
                                    new Date().toLocaleTimeString(),
                                totalValue: cartProducts.final_total,
                            });
                            await dispatch(clearCart());
                            await navigate("/");
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
