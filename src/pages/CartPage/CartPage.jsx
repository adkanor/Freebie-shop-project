import React from "react";
import { Link } from "react-router-dom";
import styles from "./CartPage.module.css";
import arrow from "../../assets/icons/Cart/arrow-right-bold.svg";
import Button from "../../components/Button/Button.jsx";
import promo from "../../assets/icons/Cart/Promo.svg";
import CartItem from "../../components/CartItem/CartItem.jsx";
import { Formik, Form, Field } from "formik";
import { useSelector } from "react-redux/es/hooks/useSelector";
import EmptyCartPage from "./EmptyCartPage/EmptyCartPage";

const CartPage = () => {
    const cartProducts = useSelector((state) => state.cartReducer.cartItems);
    const cartTotalAmount = useSelector(
        (state) => state.cartReducer.cartTotalAmount
    );

    const initialValues = {
        subtotal: cartTotalAmount,
        promoCode: "",
        discountPercentage: 0,
        calculatedDiscount: 0,
        deliveryFee: 15,
    };
    const onSubmit = (values) => {
        console.log("Form values", values);
    };

    return (
        <>
            <section className="section">
                <nav className={styles.sectionNav}>
                    <ul className={styles.breadcrumbsList}>
                        <li>
                            <Link
                                to="/"
                                className={styles.breadcrumbsLinkToHome}
                            >
                                Home
                            </Link>
                        </li>
                        <img
                            className={styles.breadcrumbsArrow}
                            src={arrow}
                            alt="arrowLeft"
                            width="14"
                            height="14"
                        />
                        <li>
                            <Link
                                to="/cart"
                                className={styles.breadcrumbsLinkToCart}
                            >
                                Cart
                            </Link>
                        </li>
                    </ul>
                </nav>

                {cartProducts.length > 0 ? (
                    <>
                        <h1 className={styles.cartPageTitle}>Your cart</h1>
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
                                            <div
                                                className={
                                                    styles.cartSummaryContent
                                                }
                                            >
                                                <Field
                                                    className={styles.cartInput}
                                                    type="text"
                                                    placeholder="Enter promo code"
                                                    id="promoCode"
                                                    name="promoCode"
                                                />
                                                <img
                                                    className={
                                                        styles.cartInputLogo
                                                    }
                                                    src={promo}
                                                    alt="Promo Code Logo"
                                                    width="20"
                                                    height="20"
                                                />
                                                <Button
                                                    text="Apply"
                                                    style={{
                                                        padding: "12px 16px",
                                                        backgroundColor:
                                                            "var(--black--background)",
                                                    }}
                                                    type="button"
                                                />
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
