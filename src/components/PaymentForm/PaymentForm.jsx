import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./PaymentForm.module.css";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import BlackButton from "../Button/Button";
import { scrollToTop } from "../../utils/scrollToTop";
import { clearCart } from "../../stores/cartProducts/action";
import { useDispatch } from "react-redux";

const PaymentForm = ({ toggle, toggleFunc }) => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
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
                        }}
                    ></div>
                    <div className={styles.modalContent}>
                        <form
                            className={styles.modalForm}
                            onSubmit={() => {
                                document.body.style.overflow = "visible";
                                dispatch(clearCart());
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
