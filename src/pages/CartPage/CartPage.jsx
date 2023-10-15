import React from "react";
import styles from "./CartPage.module.css";
import Button from "../../components/Button/Button.jsx";
import CartItem from "../../components/CartItem/CartItem.jsx";
import { Formik, Form } from "formik";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useState, useEffect } from "react";
import EmptyCartPage from "./EmptyCartPage/EmptyCartPage";
import AdaptiveNav from "../../components/AdaptiveNav/AdaptiveNav";

const CartPage = () => {
    const [discountMessage, setDiscountMessage] = useState("");
    const [discount, setDiscount] = useState(0);
    const cartProducts = useSelector((state) => state.cartReducer.cartItems);
    const cartTotalAmount = useSelector(
        (state) => state.cartReducer.cartTotalAmount
    );
    const cartTotalQuantity = useSelector(
        (state) => state.cartReducer.cartQuantity
    );
 
    useEffect(() => {
        if (cartTotalQuantity === 1) {
            setDiscountMessage("Add 1 more to unlock 12% off");
            setDiscount(0);
        } else if (cartTotalQuantity === 2) {
            setDiscountMessage("🎉 Congratulations! You've unlocked 12% off! Add 1 more to unlock 20% off");
            setDiscount(12);
        } else if (cartTotalQuantity === 3) {
            setDiscountMessage("🎉 Congratulations! You've unlocked 20% off! Add more 1 to unlock 25% off");
            setDiscount(20);
        } else if (cartTotalQuantity >= 4) {
            setDiscountMessage("🎉 Congratulations! You've unlocked 25% off!");
            setDiscount(25);
        } else {
            setDiscountMessage("");
            setDiscount(0);
        }
    }, [cartTotalQuantity]);
    const initialValues = {
        subtotal: cartTotalAmount,
        deliveryFee: 15,
    };
    const onSubmit = (values) => {
        const updatedValues = { ...values, subtotal: cartTotalAmount };
        console.log("Form values", updatedValues);
    };

    return (
        <>
            <section className="section">
                <AdaptiveNav
                    linksObj={{
                        home: "/",
                        cart: "/cart",
                    }}
                />

                {cartProducts.length > 0 ? (
                    <>
                        <h1 className={styles.cartPageTitle}>Your cart</h1>
                        <div className={styles.discountSection}>
                            {discountMessage && <p className={styles.discountMessage}> {discountMessage}</p>}
                            <div className={styles.discountScale}>
                                <div
                                    className={`${styles.discountScaleFill} ${
                                        discount === 12 ? styles.discountScaleFill12 :
                                            discount === 20 ? styles.discountScaleFill20 :
                                                discount === 25 ? styles.discountScaleFill25 :
                                                    null
                                    }`}
                                />
                            </div>
                        </div>
                        <div className={styles.cartContainer}>
                            <ul className={styles.cartContent}>
                                {cartProducts.map((product) => (
                                    <CartItem
                                        id={product._id}
                                        key={`${product._id}-${product.selectedSize}`}
                                        name={product.name}
                                        final_price={Number(
                                            product.final_price
                                        )}
                                        selectedSize={product.selectedSize}
                                        selectedAmount={Number(
                                            product.selectedAmount
                                        )}
                                        imageURL={product.url_image[0]}
                                    />
                                ))}
                            </ul>
                            <div className={styles.cartSummary}>
                                <Formik
                                    initialValues={initialValues}
                                    onSubmit={onSubmit}
                                >
                                    <Form>
                                        <h3 className={styles.cartSummaryTitle}>
                                            Order Summary
                                        </h3>
                                        <div className={styles.cartSummaryInfo}>
                                            <div
                                                className={
                                                    styles.cartSummaryContent
                                                }
                                            >
                                                <h5
                                                    className={
                                                        styles.cartSummaryText
                                                    }
                                                >
                                                    Subtotal
                                                </h5>
                                                <p
                                                    className={
                                                        styles.cartSummaryPrice
                                                    }
                                                >
                                                    $
                                                    {initialValues.subtotal.toFixed(
                                                        2
                                                    )}
                                                </p>
                                            </div>
                                            <div
                                                className={
                                                    styles.cartSummaryContent
                                                }
                                            >
                                                <h5
                                                    className={
                                                        styles.cartSummaryText
                                                    }
                                                >
                                                    Discount
                                                </h5>
                                                <p
                                                    className={
                                                        styles.cartSummaryDiscount
                                                    }
                                                >
                                                    0
                                                </p>
                                            </div>
                                            <div
                                                className={
                                                    styles.cartSummaryContent
                                                }
                                            >
                                                <h5
                                                    className={
                                                        styles.cartSummaryText
                                                    }
                                                >
                                                    Delivery Fee
                                                </h5>
                                                <p
                                                    className={
                                                        styles.cartSummaryPrice
                                                    }
                                                >
                                                    ${initialValues.deliveryFee}
                                                </p>
                                            </div>
                                            <div className={styles.cartTotal}>
                                                <h5
                                                    className={
                                                        styles.cartTotalName
                                                    }
                                                >
                                                    Total
                                                </h5>
                                                <p
                                                    className={
                                                        styles.cartTotalAmount
                                                    }
                                                >
                                                    $
                                                    {(
                                                        initialValues.subtotal +
                                                        initialValues.deliveryFee
                                                    ).toFixed(2)}
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
                                                backgroundColor:
                                                    "var(--black--background)",
                                            }}
                                        />
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                    </>
                ) : (
                    <EmptyCartPage />
                )}
            </section>
        </>
    );
};

export default CartPage;
/* eslint-disable */
