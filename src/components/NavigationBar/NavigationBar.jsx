import React from "react";
import PropTypes from "prop-types";
import styles from "../../pages/Header/Header.module.css";
import { Link } from "react-router-dom";

const NavigationBar = ({ classList, clickFunc }) => {
    return (
        <ul className={classList}>
            <li className={styles.desktopItem}>
                <Link to="test" onClick={() => clickFunc()}>
                    <p className={styles.desktopItemText}>Women</p>
                </Link>
            </li>
            <li className={styles.desktopItem}>
                <Link to="test" onClick={() => clickFunc()}>
                    <p className={styles.desktopItemText}>Men</p>
                </Link>
            </li>
            <li className={styles.desktopItem}>
                <Link to="test" onClick={() => clickFunc()}>
                    <p className={styles.desktopItemText}>Brands</p>
                </Link>
            </li>
            <li className={styles.desktopItem}>
                <Link to="test" onClick={() => clickFunc()}>
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
