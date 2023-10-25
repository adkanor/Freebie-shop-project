import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./ErrorModal.module.css";
import { useNavigate } from "react-router-dom";

const ErrorModal = ({ toggle, toggleFunc }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!toggle) {
            document.body.style.overflow = "visible";
        } else {
            document.body.style.overflow = "hidden";
        }
    }, [toggle]);

    return (
        <>
            {toggle && (
                <div className={styles.modal}>
                    <div
                        className={styles.overlay}
                        onClick={() => {
                            toggleFunc();
                            navigate("/cart");
                            document.body.style.overflow = "visible";
                        }}
                        data-testid="overlay"
                    ></div>
                    <div className={styles.modalContent}>
                        <h1>The product is out of stock!!!</h1>
                        <span
                            onClick={() => {
                                toggleFunc();
                                navigate("/cart");
                                document.body.style.overflow = "visible";
                            }}
                        >
                            X
                        </span>
                    </div>
                </div>
            )}
        </>
    );
};

ErrorModal.propTypes = {
    toggle: PropTypes.bool,
    toggleFunc: PropTypes.func,
};

export default ErrorModal;
