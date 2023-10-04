import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";
const BlackButton = ({ text, style, type, onClick , children}) => {
    const buttonStyles = {
        ...style, //передавайте сюда доп стили( падинг марджин  и бек цвет)
    };
    return (
        <button onClick={onClick} type={type} style={buttonStyles} className={styles.blackButton}>
            {children}
            {text}
        </button>
    );
};
BlackButton.propTypes = {
    key: PropTypes.any,
    text: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.string,
    onClick: PropTypes.func,
    children:PropTypes.node
};
export default BlackButton;
