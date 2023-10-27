import React from "react";
import styles from "./EmptyFavouritesPage.module.css";
import { Link } from "react-router-dom";
import arrow from "../../../assets/icons/Cart/arrow-right-bold.svg";
import heart from "../../../assets/icons/Header/Heart.svg";
import { scrollToTop } from "../../../utils/scrollToTop";

function EmptyFavoritePage() {
    return (
        <div className={styles.emptyFavSection}>
            <p className={styles.emptyFavTitle}>Oops...</p>
            <h1 className={styles.emptyFavTitle}>
                There is no items added to the favourites!
            </h1>
            <img
                className={styles.emptyFavIcon}
                src={heart}
                alt="No favourites added"
                width="100px"
                height="100px"
            />
            <Link
                onClick={() => {
                    scrollToTop();
                }}
                className={styles.emptyFavLink}
                to="/"
                data-testid="empty-fav-link"
            >
                <p>Back to home page</p>
                <img
                    src={arrow}
                    alt="Arrow link to main page"
                    width="25px"
                    height="25px"
                />
            </Link>
        </div>
    );
}

export default EmptyFavoritePage;
