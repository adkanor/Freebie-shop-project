import React, { useEffect, useState } from "react";
import styles from "./FormContent.module.css";
import stylesForm from "../../pages/CheckOut/CheckOut.module.css";
import { useSelector } from "react-redux";
import { Field } from "formik";
import { InputMask } from "@react-input/mask";
import BlackButton from "../Button/Button";
import svgBank from "../../assets/icons/Payment/PaymentsBank.svg";
import { cartSummaryCalculate } from "../../stores/cartProducts/utils";
import { useFormContext } from "../../pages/CheckOut/CheckOut";
const FormContent = () => {
    const cartReducer = useSelector((state) => state.cartReducer);
    const cartItems = cartReducer.cartItems;
    const cartData = cartSummaryCalculate(cartItems);

    const [detail, setDetail] = useState({ number: "", cvv: "", expiry: "" });
    const [buttonStyle, ButtonStyle] = useState({
        width: "100%",
        marginBottom: "50px",
        backgroundColor: "var(--black-text)",
        padding: "7px 0",
        height: "45px",
        borderRadius: "4px",
    });

    const [isFormFilled, setIsFormFilled] = useState(false);
    const [paymentType, setPaymentType] = useState("Place Order");

    useEffect(() => {
        const checkFormFilled = () => {
            return (
                detail?.number.isValid &&
                detail?.cvv.isValid &&
                detail?.expiry.isValid
            );
        };
        setIsFormFilled(checkFormFilled());
    }, [detail]);

    useEffect(() => {
        setDetail({ number: "", cvv: "", expiry: "" });
    }, [paymentType]);

    useEffect(() => {
        if (paymentType === "Place Order") {
            ButtonStyle({
                width: "100%",
                marginBottom: "50px",
                backgroundColor: "var(--black-text)",
                padding: "7px 0",
                height: "45px",
                borderRadius: "4px",
            });
        } else {
            if (!isFormFilled) {
                ButtonStyle({
                    width: "100%",
                    marginBottom: "50px",
                    backgroundColor: "gray",
                    padding: "7px 0",
                    height: "45px",
                    borderRadius: "4px",
                    zIndex: "-1",
                });
            } else {
                ButtonStyle({
                    width: "100%",
                    marginBottom: "50px",
                    backgroundColor: "var(--black-text)",
                    padding: "7px 0",
                    height: "45px",
                    borderRadius: "4px",
                });
            }
        }
    }, [paymentType, isFormFilled]);

    const { isSubmitting } = useFormContext();

    return (
        <div className={styles.formContent}>
            <div className={styles.productsWrapper}>
                {cartItems &&
                    cartItems.map((data, index) => (
                        <div key={index} className={styles.productContainer}>
                            <div className={styles.productDetails}>
                                <img
                                    src={data.url_image[0]}
                                    alt="Product Img"
                                    className={styles.productImg}
                                />
                                <p className={styles.productTitle}>
                                    {data.name}
                                </p>
                                {data.name.length > 16 && (
                                    <div className={styles.tooltip}>
                                        {data.name}
                                    </div>
                                )}
                            </div>
                            <p className={styles.productPrice}>
                                ${data.final_price.toFixed(2)}
                            </p>
                        </div>
                    ))}
            </div>
            {paymentType === "Place Order" ? (
                <>
                    <div className={styles.subtotalContainer}>
                        <p className={styles.title}>Subtotal</p>
                        <p className={styles.price}>
                            ${cartData.cartSubtotalAmount.toFixed(2)}
                        </p>
                    </div>
                    <div className={styles.shippingContainer}>
                        <p className={styles.title}>Shipping</p>
                        <p className={styles.price}>
                            ${cartData.deliveryFee.toFixed(2)}
                        </p>
                    </div>
                    <div className={styles.totalContainer}>
                        <p className={styles.title}>Total</p>
                        {cartData.amountOfDiscount > 0 ? (
                            <div className={styles.titleDiscountContainer}>
                                <p className={styles.discount}>
                                    -{cartData.amountOfDiscount.toFixed(2)}
                                </p>
                                <p className={styles.price}>
                                    ${cartData.finalTotal.toFixed(2)}
                                </p>
                            </div>
                        ) : (
                            <p className={styles.price}>
                                ${cartData.finalTotal.toFixed(2)}
                            </p>
                        )}
                    </div>
                </>
            ) : (
                <div className={styles.cardInfoSection}>
                    <div className={styles.cardInputContainer}>
                        <InputMask
                            className={stylesForm.formInput}
                            mask="XXXX XXXX XXXX XXXX"
                            required
                            replacement={{ X: /\d/ }}
                            onMask={(event) => {
                                setDetail((prev) => ({
                                    ...prev,
                                    number: event.detail,
                                }));
                            }}
                            placeholder="Card Number"
                        />
                        {detail?.number.input && !detail.number.isValid && (
                            <span className={styles.errorMessage}>
                                The field is not filled.
                            </span>
                        )}
                    </div>

                    <div className={styles.cardInputContainer}>
                        <InputMask
                            className={stylesForm.formInput}
                            mask="XXXX"
                            required
                            replacement={{ X: /\d/ }}
                            onMask={(event) => {
                                setDetail((prev) => ({
                                    ...prev,
                                    cvv: event.detail,
                                }));
                            }}
                            placeholder="CVV"
                        />
                        {detail?.cvv.input && !detail.cvv.isValid && (
                            <span className={styles.errorMessage}>
                                The field is not filled.
                            </span>
                        )}
                    </div>

                    <div className={styles.cardInputContainer}>
                        <InputMask
                            className={stylesForm.formInput}
                            mask="XX/XX"
                            required
                            replacement={{ X: /\d/ }}
                            onMask={(event) => {
                                setDetail((prev) => ({
                                    ...prev,
                                    expiry: event.detail,
                                }));
                            }}
                            placeholder="MM/YY"
                        />
                        {detail?.expiry.input && !detail.expiry.isValid && (
                            <span className={styles.errorMessage}>
                                The field is not filled.
                            </span>
                        )}
                    </div>
                </div>
            )}

            <div className={styles.payment}>
                <div className={styles.paymentBank}>
                    <div className={styles.bankInput}>
                        <Field
                            type="radio"
                            className={styles.radioInput}
                            name="payment"
                            value="Bank"
                            required
                            onClick={() => setPaymentType("Pay to Card")}
                        />
                        <p className={styles.paymentTitle}>Bank</p>
                    </div>

                    <div className={styles.paymentBankSvgs}>
                        <img src={svgBank} alt="bank payments" />
                    </div>
                </div>

                <div className={styles.paymentCash}>
                    <Field
                        className={styles.radioInput}
                        type="radio"
                        name="payment"
                        value="Cash"
                        required
                        onClick={() => setPaymentType("Place Order")}
                    />
                    <p className={styles.paymentTitle}>Cash on delivery</p>
                </div>
            </div>

            <BlackButton
                type={"submit"}
                text={
                    isSubmitting ? "Payment is being processed..." : paymentType
                }
                disabledStatus={isSubmitting}
                style={buttonStyle}
            />
        </div>
    );
};

export default FormContent;
