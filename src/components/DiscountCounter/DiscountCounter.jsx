import React from "react";
import styles from "./DiscountCounter.module.css";
import PropTypes from "prop-types";
/*eslint-disable*/
const DiscountCounter = ({ discountMessage, discount }) => {
    return (
        <div className={styles.discountSection}>
            {discountMessage && (
                <p className={styles.discountMessage}> {discountMessage}</p>
            )}
            <div className={styles.discountScale}>
                <div
                    data-testid={`discount-scale-fill-${discount}`}
                    className={`${styles.discountScaleFill} ${
                        discount === 12
                            ? styles.discountScaleFill12
                            : discount === 20
                            ? styles.discountScaleFill20
                            : discount === 25
                            ? styles.discountScaleFill25
                            : null
                    }`}
                />
            </div>
        </div>
    );
};
DiscountCounter.propTypes = {
    discountMessage: PropTypes.string.isRequired,
    discount: PropTypes.number.isRequired,
};
export default DiscountCounter;
