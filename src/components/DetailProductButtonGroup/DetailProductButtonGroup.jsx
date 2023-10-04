import styles from "../../pages/DetailProduct/DetailProduct.module.css";
import React from "react";
import PropTypes from "prop-types";
import BlackButton from "../Button/Button";

const DetailProductButtonGroup = ({ values }) => {
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
                <BlackButton
                    type={"button"}
                    text={"Small"}
                    style={style}
                    onClick={() => buttonClick("Small")}
                />
                <BlackButton
                    type={"button"}
                    text={"Medium"}
                    style={style}
                    onClick={() => buttonClick("Medium")}
                />
                <BlackButton
                    type={"button"}
                    text={"Large"}
                    style={style}
                    onClick={() => buttonClick("Large")}
                />
                <BlackButton
                    type={"button"}
                    text={"X-Large"}
                    style={style}
                    onClick={() => buttonClick("X-Large")}
                />
            </div>
        </>
    );
};

DetailProductButtonGroup.propTypes = {
    values: PropTypes.object,
};

export default DetailProductButtonGroup;
