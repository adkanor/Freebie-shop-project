import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";
const BlackButton = ({
    text,
    style,
    type,
    onClick,
    children,
    disabledStatus,
}) => {
    const buttonStyles = {
        ...style,
    };
    return (
        <button
            onClick={onClick}
            type={type}
            style={buttonStyles}
            className={styles.blackButton}
            disabled={disabledStatus}
        >
            {children}
            {text}
        </button>
    );
};
BlackButton.propTypes = {
    text: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node,
    disabledStatus: PropTypes.bool,
};
export default BlackButton;
