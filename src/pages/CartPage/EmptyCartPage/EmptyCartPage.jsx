import React from "react";
import EmptyCart from "../../../assets/icons/Header/Cart.svg";
import styles from "./EmptyCartPage.module.css";
import { Link } from "react-router-dom";
import arrow from "../../../assets/icons/Cart/arrow-right-bold.svg";

const EmptyCartPage = () => {
    return (
        <div className={styles.emptyCartSection}>
            <p className={styles.emptyCartTitle}>Oops...</p>
            <h1 className={styles.emptyCartTitle}>
                There is no items added to the cart!
            </h1>
            <img
                className={styles.emptyCartIcon}
                src={EmptyCart}
                alt="Empty cart page"
                width="100px"
                height="100px"
            />
            <Link
                className={styles.emptyCartLink}
                to="/"
                data-testid="empty-cart-link"
            >
                <p>Back to home page</p>
                <img
                    src={arrow}
                    alt="Arrow link to main page"
                    width="25px"
                    height="25px"
                />
            </Link>
        </div>
    );
};

export default EmptyCartPage;
