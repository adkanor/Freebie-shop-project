import React from "react";
import PropTypes from "prop-types";
import styles from "./BlackButton.module.css";
const BlackButton = ({ text }) => {
    return <button className={styles.blackButton}>{text}</button>;
};
BlackButton.propTypes = {
    text: PropTypes.string.isRequired, // Ожидается строка (и она обязательна)
};
export default BlackButton;
