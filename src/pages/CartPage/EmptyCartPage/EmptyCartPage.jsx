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
            />
            <Link className={styles.emptyCartLink} to="/">
                <p>Back to home page</p>
                <img src={arrow} alt="Arrow link to main page" />
            </Link>
        </div>
    );
};

export default EmptyCartPage;
