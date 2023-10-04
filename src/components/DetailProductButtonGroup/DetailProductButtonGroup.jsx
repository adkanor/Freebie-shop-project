import styles from "../../pages/DetailProduct/DetailProduct.module.css";
import React from "react";
import PropTypes from "prop-types";
import BlackButton from "../Button/Button";

const DetailProductButtonGroup = ({ sizes, values }) => {
    const style = {
        backgroundColor: "var(--gray-primary)",
        color: "black",
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
    };
    const buttonClick = (buttonValue) => {
        values.size = buttonValue;
    };

    return (
        <>
            <p className={styles.filterSize}>Select Size</p>
            <div className={styles.size}>
                {sizes.map((size, index) => (
                    <BlackButton
                        key={index}
                        type={"button"}
                        text={size}
                        style={style}
                        onClick={() => buttonClick(size)}
                    />
                ))}
            </div>
        </>
    );
};

DetailProductButtonGroup.propTypes = {
    sizes: PropTypes.array.isRequired,
    values: PropTypes.object,
};

export default DetailProductButtonGroup;
