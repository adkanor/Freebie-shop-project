import React from "react";
import PropTypes from "prop-types";
import styles from "../Header/Header.module.css";
import { Link } from "react-router-dom";

const NavigationBar = ({ classList, clickFunc }) => {
    return (
        <ul className={classList}>
            <li className={styles.desktopItem}>
                <Link
                    to={
                        "/allproducts?page=1&limit=9&sex=female&minprice=0&maxprice=1000"
                    }
                    onClick={() => clickFunc()}
                >
                    <p className={styles.desktopItemText}>Female</p>
                </Link>
            </li>
            <li className={styles.desktopItem}>
                <Link
                    to={
                        "/allproducts?page=1&limit=9&sex=male&minprice=0&maxprice=1000"
                    }
                    onClick={() => clickFunc()}
                >
                    <p className={styles.desktopItemText}>Male</p>
                </Link>
            </li>
            <li className={styles.desktopItem}>
                <Link
                    to={
                        "/allproducts?page=1&limit=9&hasdiscount=true&minprice=0&maxprice=1000"
                    }
                    onClick={() => clickFunc()}
                >
                    <p className={styles.desktopItemText}>On Sale</p>
                </Link>
            </li>
        </ul>
    );
};

NavigationBar.propTypes = {
    classList: PropTypes.string.isRequired,
    clickFunc: PropTypes.func.isRequired,
};

export default NavigationBar;
