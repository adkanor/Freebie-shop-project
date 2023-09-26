import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";
const BlackButton = ({ text, style, type, onClick}) => {
    const buttonStyles = {
        ...style, //передавайте сюда доп стили( падинг марджин  и бек цвет)
    };
    return (
        <button onClick={onClick} type={type} style={buttonStyles} className={styles.blackButton}>
            {text}
        </button>
    );
};
BlackButton.propTypes = {
    text: PropTypes.string.isRequired,
    style: PropTypes.object,
    type: PropTypes.string,
    onClick: PropTypes.func,
};
export default BlackButton;
