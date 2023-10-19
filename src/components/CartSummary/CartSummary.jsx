import React, { useEffect } from "react";
import styles from "./CartSummary.module.css";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import PropTypes from "prop-types";
import { checkAuthorization } from "../../stores/authorization/actions";
import { Link } from "react-router-dom";

const CartSummary = ({
    discount,
    cartSubtotal,
    deliveryFee,
    amountOfDiscount,
    total,
}) => {
    const dispatch = useDispatch();
    let authData = useSelector((state) => state.authorizationReducer);

    const initialValues = {
        subtotal: cartSubtotal,
        discount,
        amountOfDiscount,
        deliveryFee,
        total,
    };
    const onSubmit = () => {
        const updateValues = {
            cartSubtotal,
            discount,
            amountOfDiscount,
            deliveryFee,
            total,
        };
        console.log("Form values", updateValues);
    };
    const token = localStorage.getItem("token");

    useEffect(() => {
        dispatch(checkAuthorization(token));
    }, [dispatch, token]);

    return (
        <div className={styles.cartSummary}>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form>
                    <h3 className={styles.cartSummaryTitle}>Order Summary</h3>
                    <div className={styles.cartSummaryInfo}>
                        <div className={styles.cartSummaryContent}>
                            <h5 className={styles.cartSummaryText}>Subtotal</h5>
                            <p className={styles.cartSummaryPrice}>
                                ${initialValues.subtotal.toFixed(2)}
                            </p>
                        </div>
                        <div className={styles.cartSummaryContent}>
                            <h5 className={styles.cartSummaryText}>Discount</h5>
                            <p className={styles.cartSummaryDiscountPresentage}>
                                {discount ? `${initialValues.discount}%` : null}
                            </p>
                            <p className={styles.cartSummaryDiscount}>
                                -$
                                {initialValues.amountOfDiscount.toFixed(2)}
                            </p>
                        </div>
                        <div className={styles.cartSummaryContent}>
                            <h5 className={styles.cartSummaryText}>
                                Delivery Fee
                            </h5>
                            <p className={styles.cartSummaryPrice}>
                                ${initialValues.deliveryFee}
                            </p>
                        </div>
                        <div className={styles.cartTotal}>
                            <h5 className={styles.cartTotalName}>Total</h5>
                            <p className={styles.cartSummaryPrice}>
                                ${initialValues.total.toFixed(2)}
                            </p>
                        </div>
                    </div>

                    <Link to={authData.status === 200 ? "checkout" : "/login"}>
                        <Button
                            type="submit"
                            text="Go to Checkout"
                            style={{
                                width: "100%",
                                padding: "16px 0",
                                margin: "0 auto",
                                backgroundColor: "var(--black--background)",
                            }}
                        />
                    </Link>
                </Form>
            </Formik>
        </div>
    );
};

CartSummary.propTypes = {
    cartSubtotal: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    deliveryFee: PropTypes.number.isRequired,
    amountOfDiscount: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
};
export default CartSummary;
