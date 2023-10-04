import styles from "../../pages/DetailProduct/DetailProduct.module.css";
import React, { useState } from "react";
import PropTypes from "prop-types";
import BlackButton from "../Button/Button";

const DetailProductButtonGroup = ({ sizes, values }) => {
    const [activeButton, setActiveButton] = useState(null);

    const style = {
        backgroundColor: "var(--gray-primary)",
        color: "black",
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
    };

    const buttonClick = (size) => {
        values.size = size;
        setActiveButton(size);
    };

    return (
        <>
            <p className={styles.filterSize}>Select Size</p>
            <div className={styles.size}>
                {sizes.map((size, index) => (
                    <BlackButton
                        key={index}
                        text={size}
                        type={"button"}
                        style={{
                            ...style,
                            backgroundColor:
                                size === activeButton
                                    ? "black"
                                    : "var(--gray-primary)",
                            color: size === activeButton ? "white" : "black",
                        }}
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
