import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./PaginationNew.module.css";
import LeftArrow from "../../assets/icons/ArrowsSlider/arrowLeft.svg";
import RightArrow from "../../assets/icons/ArrowsSlider/arrowRight.svg";
import Button from "../../components/Button/Button";
import { scrollToTop } from "../../utils/scrollToTop";

const PaginationNew = ({ pageProps = 1, isAble, changeFilter }) => {
    const [page, setPage] = useState(pageProps);

    useEffect(() => {
        const pageNum = parseInt(pageProps);
        setPage(pageNum);
    }, [pageProps]);

    const onPrevClick = () => {
        if (page > 1) {
            const prevPage = page - 1;
            changeFilter({ page: prevPage });
            scrollToTop();
        }
    };
    const onNextClick = () => {
        if (isAble) {
            const nextPage = page + 1;
            changeFilter({ page: nextPage });
            scrollToTop();
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
                    backgroundColor:
                        page === 1 ? "var(--gray-primary)" : "transparent",
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
                    backgroundColor: !isAble
                        ? "var(--gray-primary)"
                        : "transparent",
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
    pageProps: PropTypes.any,
    isAble: PropTypes.bool,
    changeFilter: PropTypes.func,
};

export default PaginationNew;
