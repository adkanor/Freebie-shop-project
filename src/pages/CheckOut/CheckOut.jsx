import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import axios from "axios";
import { useSelector } from "react-redux";
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
import ErrorModal from "../../components/ErrorModal/ErrorModal";
import { toast } from "react-toastify";
import { cartSummaryCalculate } from "../../stores/cartProducts/utils";
import { URL } from "../../variables";
const CheckOut = () => {
    const cartProducts = useSelector((state) => state.cartReducer);
    const cartItems = cartProducts.cartItems;
    const cartData = cartSummaryCalculate(cartItems);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = localStorage.getItem("token") || null;
    const [isLoading, setIsLoading] = useState(true);
    const userData = useSelector((state) => state.personalInfoReducer.userData);
    const errorMessage = useSelector(
        (state) => state.personalInfoReducer.error
    );
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };

    useEffect(() => {
        if (token) {
            dispatch(fetchUserData(token))
                .then(() => setIsLoading(false))
                .catch(() => setIsLoading(false));
        } else {
            setIsLoading(false);
        }
    }, [dispatch, token]);

    const sendFormToServer = async (dataForm) => {
        try {
            await axios.put(`${URL}changeUser`, dataForm, {
                headers: {
                    Authorization: token,
                },
            });
        } catch (error) {
            console.error(error);
        }
    };

    const addToOrders = async (data) => {
        try {
            const response = await axios.post(`${URL}orders/add`, data, {
                headers: {
                    Authorization: token,
                },
            });

            if (response.data.status === 200) {
                dispatch(clearCart());
                navigate("/");
                scrollToTop();
                toast.success("The order was placed successfully!");
            } else {
                toggleModal();
            }
        } catch (error) {
            console.error(error);
        }
    };
    const handleSubmit = async (values) => {
        const orderData = {
            personalInfo: values,
            goods: cartProducts.cartItems,
            email: values.email,
            payment: values.payment,
            orderDate:
                new Date().toLocaleDateString() +
                " " +
                new Date().toLocaleTimeString(),
            totalValue: Number(cartData.finalTotal.toFixed(2)),
        };
        await addToOrders(orderData);
        if (token) {
            await sendFormToServer(values);
        }
    };

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
                    <ErrorModal toggle={modal} toggleFunc={toggleModal} />
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
                            firstName:
                                userData.firstName && token
                                    ? userData.userName
                                    : "",
                            companyName:
                                userData.companyName && token
                                    ? userData.companyName
                                    : "",
                            streetAddress:
                                userData.streetAddress && token
                                    ? userData.streetAddress
                                    : "",
                            apartmentInfo:
                                userData.apartmentInfo && token
                                    ? userData.apartmentInfo
                                    : "",
                            city: userData.city && token ? userData.city : "",
                            phoneNumber:
                                userData.phoneNumber && token
                                    ? userData.phoneNumber
                                    : "",
                            email:
                                userData.email && token ? userData.email : "",
                        }}
                        validationSchema={validationSchemaCheckout}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched }) => (
                            <>
                                <ProfileForm
                                    isCheckOut={true}
                                    errors={errors}
                                    touched={touched}
                                />
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
