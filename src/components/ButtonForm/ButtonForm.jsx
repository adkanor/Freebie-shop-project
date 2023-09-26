import React from "react";
import style from "./ButtonForm.module.css";
import PropTypes from "prop-types";

const ButtonForm = ({type, text}) => {
    return (
        <button className={style.formBtn} type={type}>
            {text}
        </button>
    );
};

ButtonForm.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,


};

export default ButtonForm;

