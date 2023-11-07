import React from "react";
import PropTypes from "prop-types";
import styles from "./PaginationNew.module.css";
import LeftArrow from "../../assets/icons/ArrowsSlider/arrowLeft.svg";
import RightArrow from "../../assets/icons/ArrowsSlider/arrowRight.svg";
import Button from "../../components/Button/Button";

const PaginationNew = ({ page, isAble }) => {
    const onPrevClick = () => {
        if (page > 1) {
            console.log("click previous");
        }
    };
    const onNextClick = () => {
        if (isAble) {
            console.log("click next");
        }
    };
    const commonButtonStyle = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "8px",
        padding: "5px 10px",
        border: "1px solid var(--separator-line)",
        borderRadius: "8px",
        fontFamily: "Satoshi",
        fontWeight: "400",
        fontSize: "10px",
        userSelect: "none",
        color: "black",
        cursor: "pointer",
        backgroundColor: "var(--gray-primary)",
    };
    return (
        <div className={styles.paginationContainer}>
            <Button
                text={"Previous"}
                type="button"
                onClick={onPrevClick}
                disabled={page === 1}
                style={{
                    ...commonButtonStyle,
                    color: page === 1 ? "gray" : "black",
                    boxShadow: page === 1 ? "none" : null,
                }}
            >
                <img src={LeftArrow} alt="LeftArrow" className={styles.arrow} />
            </Button>

            <div className={styles.page}>{page}</div>

            <Button
                text={"Next"}
                type="button"
                onClick={onNextClick}
                disabled={!isAble}
                style={{
                    ...commonButtonStyle,
                    color: !isAble ? "gray" : "black",
                    boxShadow: !isAble ? "none" : null,
                }}
            >
                <img
                    src={RightArrow}
                    alt="RightArrow"
                    className={styles.arrow}
                />
            </Button>
        </div>
    );
};

PaginationNew.propTypes = {
    page: PropTypes.number.isRequired,
    isAble: PropTypes.bool.isRequired,
};

export default PaginationNew;