import React from "react";
import styles from "./CartItem.module.css";
import deleteIcon from "../../assets/icons/Cart/Delete.svg";
import Counter from "../Counter/Counter";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../stores/cartProducts/action";
import { incrementItemQuantity } from "../../stores/cartProducts/action";
import { decrementItemQuantity } from "../../stores/cartProducts/action";
const CartItem = ({
    id,
    name,
    imageURL,
    final_price,
    selectedSize,
    selectedAmount,
}) => {
    const dispatch = useDispatch();

    const deleteItem = (id, selectedSize) => {
        dispatch(removeFromCart(id, selectedSize));
    };

    const handleDecrease = () => {
        dispatch(decrementItemQuantity(id, selectedSize));
    };

    const handleIncrease = () => {
        dispatch(incrementItemQuantity(id, selectedSize));
    };
    return (
        <li className={styles.cartItem}>
            <img
                src={imageURL}
                className={styles.cartImg}
                alt="Cart product"
            ></img>

            <div className={styles.cartItemContent}>
                <div className={styles.cartItemInfo}>
                    <Link
                        className={styles.cartItemLink}
                        to={`/products/${id}`}
                    >
                        <h5 className={styles.cartItemTitle}>{name}</h5>{" "}
                    </Link>
                    <img
                        className={styles.cartItemDeleteIcon}
                        src={deleteIcon}
                        alt="Delete icon"
                        onClick={() => deleteItem(id, selectedSize)}
                    />
                </div>
                <div className={styles.cartItemSize}>
                    <p>Size:</p>
                    <span>{selectedSize}</span>
                </div>
                <div className={styles.cartItemTotal}>
                    <p>${final_price}</p>
                    <div className={styles.cartQuantity}>
                        <Counter
                            onDecrease={handleDecrease}
                            quantity={selectedAmount}
                            onIncrease={handleIncrease}
                        />
                    </div>
                </div>
            </div>
        </li>
    );
};

CartItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    final_price: PropTypes.number.isRequired,
    selectedSize: PropTypes.string.isRequired,
    selectedAmount: PropTypes.number.isRequired,
};
export default CartItem;
