import React from "react";
import {Field} from "formik";
import style from "./Input.module.css";
import PropTypes from "prop-types";

const Input = ({name, placeholder, isError, errorText, type, errorMessageOther, isErrorMessageServer}) => {
    return (
        <div className={style.container}>
            <Field type={type} className={style.input} name={name} placeholder={placeholder}/>
            {isError ? (<p className={style.errorText}>{`*${errorText}`}</p>) : null}
            {isErrorMessageServer ? (<p className={style.errorText}>{`*${errorMessageOther}`}</p>) : null}

        </div>
    );
};

Input.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    isError: PropTypes.bool,
    errorText: PropTypes.string,
    errorMessageOther: PropTypes.string,
    isErrorMessageServer: PropTypes.bool,
    type: PropTypes.string
};

export default Input;