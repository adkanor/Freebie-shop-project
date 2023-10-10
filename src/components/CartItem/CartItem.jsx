import React from "react";
import styles from "./CartItem.module.css";
import deleteIcon from "../../assets/icons/Cart/Delete.svg";
import Counter from "../Counter/Counter";

const CartItem = () => {
    return (
        <li className={styles.cartItem}>
            <img className={styles.cartImg} alt="Cart product"></img>
            <div className={styles.cartItemContent}>
                <div className={styles.cartItemInfo}>
                    <h5 className={styles.cartItemTitle}>
                        Gradient Graphic T-shirt
                    </h5>
                    <img
                        className={styles.cartItemDeleteIcon}
                        src={deleteIcon}
                        alt="Delete icon"
                    />
                </div>
                <div className={styles.cartItemSize}>
                    <p>Size:</p>
                    <span>Large</span>
                </div>
                <div className={styles.cartItemColor}>
                    <p>Color:</p>
                    <span>White</span>
                </div>
                <div className={styles.cartItemTotal}>
                    <p>$240</p>
                    <div className={styles.cartQuantity}>
                        <Counter />
                    </div>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
