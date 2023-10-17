import React from "react";
import styles from "./FormContent.module.css";
import { Field } from "formik";
import BlackButton from "../../../components/Button/Button";
import svgBank from "../../../assets/icons/Payment/PaymentsBank.svg";

const FormContent = () => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    let totalAmount = JSON.parse(localStorage.getItem("cartTotalAmount"));

    // const [paymentType, setPaymentType] = useState("Place Order");

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
                                ${data.final_price}
                            </p>
                        </div>
                    ))}
            </div>
            <div className={styles.subtotalContainer}>
                <p className={styles.title}>Subtotal</p>
                <p className={styles.price}>${totalAmount}</p>
            </div>
            <div className={styles.shippingContainer}>
                <p className={styles.title}>Shipping</p>
                <p className={styles.price}>$15</p>
            </div>
            <div className={styles.totalContainer}>
                <p className={styles.title}>Total</p>
                <p className={styles.price}>${totalAmount}</p>
            </div>

            <div className={styles.payment}>
                <div className={styles.paymentBank}>
                    <div className={styles.bankInput}>
                        <Field
                            type="radio"
                            className={styles.radioInput}
                            name="payment"
                            value="Bank"
                            // onClick={() => setPaymentType("Pay to Card")}
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
                        // onClick={() => setPaymentType("Place Order")}
                    />
                    <p className={styles.paymentTitle}>Cash on delivery</p>
                </div>
            </div>

            <div className={styles.couponContainer}>
                <input type="text" placeholder="Coupon Code" />
                <BlackButton
                    type={"text"}
                    text={"Apply Coupon"}
                    style={{
                        width: "100%",
                        backgroundColor: "var(--black-text)",
                        padding: "7px 0",
                        height: "45px",
                        borderRadius: "4px",
                    }}
                />
            </div>

            <BlackButton
                type={"submit"}
                text={"Place Order"}
                style={{
                    width: "100%",
                    backgroundColor: "var(--black-text)",
                    padding: "7px 0",
                    height: "45px",
                    borderRadius: "4px",
                }}
            />
        </div>
    );
};

export default FormContent;
