import React from "react";
import styles from "./CartItem.module.css";
import deleteIcon from "../../assets/icons/Cart/Delete.svg";

const CartItem = () => {
    return (
        <li className={styles.cartItem}>
            <div className={styles.cartImg}></div>
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
                        <button
                            className={styles.quantityBtnDown}
                            // disabled={amount === переменная}?
                        >
                            -
                        </button>
                        <span className={styles.quantityNumber}>4</span>
                        <button className={styles.quantityBtnUp}>+</button>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
