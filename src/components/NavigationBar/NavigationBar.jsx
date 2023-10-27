import React from "react";
import PropTypes from "prop-types";
import styles from "../Header/Header.module.css";
import { Link } from "react-router-dom";

const NavigationBar = ({ classList, clickFunc }) => {
    return (
        <ul className={classList}>
            <li className={styles.desktopItem}>
                <Link to="/female" onClick={() => clickFunc()}>
                    <p className={styles.desktopItemText}>Female</p>
                </Link>
            </li>
            <li className={styles.desktopItem}>
                <Link to="/male" onClick={() => clickFunc()}>
                    <p className={styles.desktopItemText}>Male</p>
                </Link>
            </li>
            <li className={styles.desktopItem}>
                <Link to="/brands" onClick={() => clickFunc()}>
                    <p className={styles.desktopItemText}>Brands</p>
                </Link>
            </li>
            <li className={styles.desktopItem}>
                <Link to="/sale" onClick={() => clickFunc()}>
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
