import React from "react";
import { Field } from "formik";
import stylesForm from "../../pages/CheckOut/CheckOut.module.css";
import PropTypes from "prop-types";
import InputMask from "react-input-mask";

const InputCheckout = ({ name, text, type, isError, errorText, children }) => {
    const token = localStorage.getItem("token");

    const isEmailField = name === "email";
    const inputStyle = isEmailField
        ? { color: "var( --gray-text-primary)" }
        : {};
    return (
        <div className={stylesForm.formItem}>
            <label className={stylesForm.formLabel} htmlFor={name}>
                {text}
            </label>
            {type !== "phone" ? (
                <>
                    <Field
                        type={type}
                        id={name}
                        name={name}
                        className={stylesForm.formInput}
                        readOnly={token ? isEmailField : false}
                        style={inputStyle}
                    />
                    {children}
                </>
            ) : (
                <Field name={name}>
                    {({ field }) => (
                        <InputMask
                            {...field}
                            className={stylesForm.formInput}
                            mask="+38 (999) 999-99-99"
                        />
                    )}
                </Field>
            )}

            {isError ? (
                <p className={stylesForm.errorMessage}>{`*${errorText}`}</p>
            ) : null}
        </div>
    );
};

InputCheckout.propTypes = {
    children: PropTypes.node,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isError: PropTypes.bool,
    errorText: PropTypes.string,
    type: PropTypes.string,
};

export default InputCheckout;
