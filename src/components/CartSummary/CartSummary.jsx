import React from "react";
import styles from "./CartSummary.module.css";
import Button from "../Button/Button";
import { Formik, Form } from "formik";
import PropTypes from "prop-types";

const CartSummary = ({ discount, cartTotalAmount }) => {
    const deliveryFee = 15;
    const amountOfDiscount = discount ? (cartTotalAmount * discount) / 100 : 0;
    const total = cartTotalAmount + deliveryFee - amountOfDiscount;

    const initialValues = {
        subtotal: cartTotalAmount,
        discount,
        amountOfDiscount,
        deliveryFee,
        total,
    };
    const onSubmit = () => {
        const updateValues = {
            cartTotalAmount,
            discount,
            amountOfDiscount,
            deliveryFee,
            total,
        };
        console.log("Form values", updateValues);
    };

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
                            <p className={styles.cartTotalAmount}>
                                ${initialValues.total.toFixed(2)}
                            </p>
                        </div>
                    </div>
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
                </Form>
            </Formik>
        </div>
    );
};

CartSummary.propTypes = {
    cartTotalAmount: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
};
export default CartSummary;
