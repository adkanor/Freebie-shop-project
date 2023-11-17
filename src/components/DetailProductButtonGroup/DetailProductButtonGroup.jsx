import styles from "../../pages/DetailProduct/DetailProduct.module.css";
import React, { useState } from "react";
import PropTypes from "prop-types";
import BlackButton from "../Button/Button";

const DetailProductButtonGroup = ({ sizes, values }) => {
    const [activeButton, setActiveButton] = useState(values.size);

    const style = {
        backgroundColor: "var(--gray-primary)",
        color: "black",
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
    };

    const disabledStyle = {
        ...style,
        pointerEvents: "none",
        color: "white",
        backgroundColor: "var(--separator-line)",
        boxShadow: "none"
    };

    const buttonClick = (size) => {
        values.size = size;
        setActiveButton(size);
    };

    return (
        <>
            <p className={styles.filterSize}>Select Size</p>
            <div className={styles.size}>
                {sizes.map((sizeObj, index) => (
                    <BlackButton
                        key={index}
                        text={sizeObj.size}
                        type={"button"}
                        style={
                            sizeObj.count === 0
                                ? {
                                    ...disabledStyle,
                                }
                                : {
                                    ...style,
                                    backgroundColor:
                                        sizeObj.size === activeButton
                                            ? "var(--black--background)"
                                            : "var(--gray-primary)",
                                    color:
                                        sizeObj.size === activeButton
                                            ? "var(--white-text)"
                                            : "var(--black-text)",
                                }
                        }
                        onClick={() => buttonClick(sizeObj.size)}
                    />
                ))}
            </div>
        </>
    );
};

DetailProductButtonGroup.propTypes = {
    sizes: PropTypes.array,
    values: PropTypes.object,
};

export default DetailProductButtonGroup;
