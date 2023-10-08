import React from "react";
import styles from "./FormContent.module.css";
import { Field } from "formik";
import BlackButton from "../../../components/Button/Button";
import svgBank from "../../../assets/icons/Payment/PaymentsBank.svg";
const products = [
    {
        title: "LCD Monitor",
        img: "https://impress.biz.ua/wp-content/uploads/2022/02/wide-desktop4-optimized.jpg",
        price: 700,
    },
    {
        title: "Gaming PC",
        img: "https://robbreport.com/wp-content/uploads/2022/08/AS_GettyImages-1241614702.jpg",
        price: 350,
    },
    {
        title: "Gaming PC",
        img: "https://robbreport.com/wp-content/uploads/2022/08/AS_GettyImages-1241614702.jpg",
        price: 350,
    },
];

const TotalPrice = () => {
    let totalPrice = 0;

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        if (product.price && typeof product.price === "number") {
            totalPrice += product.price;
        }
    }

    return totalPrice;
};

const FormContent = () => {
    return (
        <div className={styles.formContent}>
            <div className={styles.productsWrapper}>
                {products.map((data, index) => (
                    <div key={index} className={styles.productContainer}>
                        <div className={styles.productDetails}>
                            <img
                                src={data.img}
                                alt="Product Img"
                                className={styles.productImg}
                            />
                            <p className={styles.productTitle}>{data.title}</p>
                        </div>
                        <p className={styles.productPrice}>${data.price}</p>
                    </div>
                ))}
            </div>
            <div className={styles.subtotalContainer}>
                <p className={styles.title}>Subtotal</p>
                <p className={styles.price}>${TotalPrice()}</p>
            </div>
            <div className={styles.shippingContainer}>
                <p className={styles.title}>Shipping</p>
                <p className={styles.price}>FREE</p>
            </div>
            <div className={styles.totalContainer}>
                <p className={styles.title}>Total</p>
                <p className={styles.price}>${TotalPrice()}</p>
            </div>

            <div className={styles.payment}>
                <div className={styles.paymentBank}>
                    <div className={styles.bankInput}>
                        <Field
                            type="radio"
                            className={styles.radioInput}
                            name="payment"
                            value="Bank"
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
