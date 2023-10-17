import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./PaymentForm.module.css";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
// import Cards from "react-credit-cards-2";
// import "react-credit-cards-2/dist/es/styles-compiled.css";
import BlackButton from "../Button/Button";
import { scrollToTop } from "../../utils/scrollToTop";

const PaymentForm = ({ toggle, toggleFunc }) => {
    const navigate = useNavigate();
    const [state, setState] = useState({
        number: "",
        expiry: "",
        cvc: "",
        name: "",
        focus: "",
    });

    useEffect(() => {
        console.log(state);
        if (!toggle) {
            document.body.style.overflow = "visible";
        } else {
            document.body.style.overflow = "hidden";
        }
    }, [toggle]);

    const inputChange = (evt) => {
        const { name, value } = evt.target;

        setState((prev) => ({ ...prev, [name]: value }));
    };

    const inputFocus = (evt) => {
        setState((prev) => ({ ...prev, focus: evt.target.name }));
    };

    return (
        <>
            {toggle && (
                <div className={styles.modal}>
                    <div
                        className={styles.overlay}
                        onClick={() => {
                            toggleFunc();
                            setState({
                                number: "",
                                expiry: "",
                                cvc: "",
                                name: "",
                                focus: "",
                            });
                        }}
                    ></div>
                    <div className={styles.modalContent}>
                        <div className={styles.modalCard}>
                            {/* <Cards
                                number={state.number}
                                expiry={state.expiry}
                                cvc={state.cvc}
                                name={state.name}
                                focused={state.focus}
                            /> */}
                        </div>

                        <form
                            className={styles.modalForm}
                            onSubmit={() => {
                                document.body.style.overflow = "visible";
                                localStorage.removeItem("cartItems");
                                localStorage.removeItem("cartTotalAmount");
                                navigate("/");
                                scrollToTop();
                            }}
                        >
                            <div className={styles.modalInputs}>
                                <div className="form-group">
                                    <InputMask
                                        autoComplete="off"
                                        maskChar={null}
                                        mask="9999 9999 9999 9999"
                                        type="tel"
                                        name="number"
                                        className={styles.formInput}
                                        placeholder="Card Number"
                                        pattern="[\d| ]{16,22}"
                                        required
                                        onChange={inputChange}
                                        onFocus={inputFocus}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        autoComplete="off"
                                        type="text"
                                        name="name"
                                        className={styles.formInput}
                                        placeholder="Name"
                                        required
                                        onChange={inputChange}
                                        onFocus={inputFocus}
                                    />
                                </div>
                                <div className="col-6">
                                    <InputMask
                                        autoComplete="off"
                                        maskChar={null}
                                        mask="99/99"
                                        type="tel"
                                        name="expiry"
                                        className={styles.formInput}
                                        placeholder="Valid Thru"
                                        pattern="\d\d/\d\d"
                                        required
                                        onChange={inputChange}
                                        onFocus={inputFocus}
                                    />
                                </div>
                                <div className="col-6">
                                    <InputMask
                                        autoComplete="off"
                                        maskChar={null}
                                        mask="999"
                                        type="tel"
                                        name="cvc"
                                        className={styles.formInput}
                                        placeholder="CVC"
                                        pattern="\d{3,4}"
                                        required
                                        onChange={inputChange}
                                        onFocus={inputFocus}
                                    />
                                </div>
                                <input type="hidden" name="issuer" />
                                <div className="form-actions">
                                    <BlackButton
                                        type={"submit"}
                                        text={"Pay"}
                                        style={{
                                            width: "100%",
                                            backgroundColor:
                                                "var(--black-text)",
                                            padding: "7px 0",
                                            height: "45px",
                                            borderRadius: "4px",
                                        }}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

PaymentForm.propTypes = {
    toggle: PropTypes.bool,
    toggleFunc: PropTypes.func,
};

export default PaymentForm;
