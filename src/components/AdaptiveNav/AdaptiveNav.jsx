import React from "react";
import PropTypes from "prop-types";
import styles from "./AdaptiveNav.module.css";
import { Link } from "react-router-dom";
import arrow from "../../assets/icons/Cart/arrow-right-bold.svg";

const AdaptiveNav = ({ linksObj }) => {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.breadcrumbsList}>
                {Object.entries(linksObj).map(([key, value]) => (
                    <li key={key} className={styles.breadcrumbsLinkContainer}>
                        <Link to={value} className={styles.breadcrumbsLink}>
                            {key}
                        </Link>
                        <img
                            className={styles.breadcrumbsArrow}
                            src={arrow}
                            alt="arrowRight"
                        />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

AdaptiveNav.propTypes = {
    linksObj: PropTypes.object.isRequired,
};

export default AdaptiveNav;
