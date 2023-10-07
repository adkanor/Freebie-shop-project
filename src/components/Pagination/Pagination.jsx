import React from "react";
import PropTypes from "prop-types";
import { usePagination, DOTS } from "./usePagination";
import styles from "./Pagination.module.css";
import LeftArrow from "../../assets/icons/ArrowsSlider/arrowLeft.svg";
import RightArrow from "../../assets/icons/ArrowsSlider/arrowRight.svg";

const Pagination = props => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <ul className={`${styles["PaginationContainer"]} ${className || ""}`}>
            <li
                className={`${styles["PaginationItem"]} ${currentPage === 1 ? styles["disabled"] : ""}`}
                onClick={onPrevious}
            >
                <div
                    className={styles.ArrowBox}
                >
                    <img
                        className={styles.Arrow}
                        src={LeftArrow}
                        alt="LeftArrow"
                    />
                    Previous
                </div>
            </li>
            {paginationRange.map(pageNumber => {
                if (pageNumber === DOTS) {
                    return <li key={pageNumber} className={`${styles["PaginationItem"]} ${styles["dots"]}`}>&#8230;</li>;
                }

                return (
                    <li
                        key={pageNumber}
                        className={`${styles["PaginationItem"]} ${pageNumber === currentPage ? styles["selected"] : ""}`}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            <li
                className={`${styles["PaginationItem"]} ${currentPage === lastPage ? styles["disabled"] : ""}`}
                onClick={onNext}
            >
                <div
                    className={styles.ArrowBox}
                >
                    Next
                    <img
                        className={styles.Arrow}
                        src={RightArrow}
                        alt="RightArrow"
                    />
                </div>
            </li>
        </ul>
    );
};

Pagination.propTypes = {
    onPageChange: PropTypes.func.isRequired,
    totalCount: PropTypes.number.isRequired,
    siblingCount: PropTypes.number,
    currentPage: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    className: PropTypes.string
};

export default Pagination;
