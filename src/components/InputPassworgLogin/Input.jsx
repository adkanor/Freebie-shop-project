import React from "react";
import { Field } from "formik";
import style from "./Input.module.css";
import PropTypes from "prop-types";

const Input = ({name,placeholder, isError,errorText , type}) => {
    return (
        <div className={style.container}>
            <Field type={type} className={style.input} name={name} placeholder={placeholder} />
            {isError ? (<p className={style.errorText}>{`*${errorText}`}</p>) : null}
            
        </div>
    );
};

Input.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    isError: PropTypes.bool.isRequired,
    errorText: PropTypes.string,
    type:PropTypes.string
};

export default Input;