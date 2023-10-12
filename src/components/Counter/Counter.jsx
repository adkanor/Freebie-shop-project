import React from "react";
import PropTypes from "prop-types";
import styles from "./Counter.module.css";
const Counter = ({ onDecrease, quantity, onIncrease }) => {
    return (
        <>
            <button
                type="button"
                onClick={onDecrease}
                className={styles.quantityBtnDown}
                disabled={quantity <= 1}
            >
                -
            </button>
            <span className={styles.quantityNumber}>
                {quantity ? quantity : 1}
            </span>
            <button
                type="button"
                onClick={onIncrease}
                className={styles.quantityBtnUp}
            >
                +
            </button>
        </>
    );
};
Counter.propTypes = {
    onDecrease: PropTypes.func.isRequired,
    quantity: PropTypes.number.isRequired,
    onIncrease: PropTypes.func.isRequired,
};
export default Counter;
