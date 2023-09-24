import React from "react";
import { Link } from "react-router-dom";
import Separator from "../../components/Separator/Separator.jsx";
import styles from "./CartPage.module.css";
import arrowLeft from "../../assets/icons/Cart/Arrow-right-nav.svg";
import BlackButton from "../../components/BlackButton/BlackButton.jsx";
const CartPage = () => {
    return (
        <>
            <Separator />
            <div className="section">
                <nav className={styles.sectionNav}>
                    <ul className={styles.breadcrumbsList}>
                        <li className="breadcrumb-item">
                            <Link
                                to="/"
                                className={styles.breadcrumbsLinkToHome}
                            >
                                Home
                            </Link>
                        </li>
                        <img
                            className={styles.breadcrumbsArrow}
                            src={arrowLeft}
                            alt="arrowLeft"
                        />
                        <li className="breadcrumb-item">
                            <Link
                                to="/cart"
                                className={styles.breadcrumbsLinkToCart}
                            >
                                Cart
                            </Link>
                        </li>
                    </ul>
                </nav>
                <h1 className={styles.cartPageTitle}>Your cart</h1>
                <div className={styles.cartContainer}>
                    <div className={styles.cartContent}></div>
                    <div className={styles.cartSummary}>
                        <h3 className={styles.cartSummaryTitle}>
                            OrderSummary
                        </h3>
                        <div className={styles.cartSummaryInfo}>
                            <div className={styles.cartSummaryContent}>
                                <h5 className={styles.cartSummaryText}>
                                    Subtotal
                                </h5>
                                <p className={styles.cartSummaryPrice}>$565</p>
                            </div>
                            <div className={styles.cartSummaryContent}>
                                <h5 className={styles.cartSummaryText}>
                                    Discount
                                </h5>

                                <p className={styles.cartSummaryDiscount}>
                                    $113
                                </p>
                            </div>
                            <div className={styles.cartSummaryContent}>
                                <h5 className={styles.cartSummaryText}>
                                    Delivery Fee
                                </h5>
                                <p className={styles.cartSummaryPrice}>$15</p>
                            </div>

                            <div className={styles.cartTotal}>
                                <h5 className={styles.cartTotalName}>Total</h5>
                                <p className={styles.cartTotalAmount}>$467</p>
                            </div>
                            <div className={styles.cartSummaryContent}>
                                <input
                                    type="text"
                                    placeholder="Add promo code"
                                />
                                <BlackButton text="dcg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartPage;
