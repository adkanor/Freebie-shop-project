import React from "react";
import PropTypes from "prop-types";
import styles from "../Header/Header.module.css";
import { Link } from "react-router-dom";
import { defaultParams } from "../../variables";

const NavigationBar = ({ classList, clickFunc }) => {
    return (
        <ul className={classList}>
            <li className={styles.desktopItem}>
                <Link
                    to={`${defaultParams}sex=female`}
                    onClick={() => clickFunc()}
                >
                    <p className={styles.desktopItemText}>Female</p>
                </Link>
            </li>
            <li className={styles.desktopItem}>
                <Link
                    to={`${defaultParams}sex=male`}
                    onClick={() => clickFunc()}
                >
                    <p className={styles.desktopItemText}>Male</p>
                </Link>
            </li>
            <li className={styles.desktopItem}>
                <Link
                    to={`${defaultParams}hasdiscount=true`}
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
