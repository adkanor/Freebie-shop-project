import React, { useState, useEffect } from "react";
import styles from "./Footer.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";


import FaceBookIcon from "../../assets/icons/Social/Facebook.svg";
import GitHubIcon from "../../assets/icons/Social/GitHub.svg";
import InstagramIcon from "../../assets/icons/Social/Instagram.svg";
import TwitterIcon from "../../assets/icons/Social/Twitter.svg";

import ApplePayIcon from "../../assets/icons/Payment/ApplePay.svg";
import GooglePayIcon from "../../assets/icons/Payment/GooglePay.svg";
import MastercardIcon from "../../assets/icons/Payment/Mastercard.svg";
import PayPalIcon from "../../assets/icons/Payment/PayPal.svg";
import VisaIcon from "../../assets/icons/Payment/Visa.svg";

import BlackButton from "../Button/Button";

function Footer() {

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
    });

    const sections = [
        {
            title: "Company",
            items: ["About", "Features", "Works", "Career"],
        },
        {
            title: "Help",
            items: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy",],
        },
        {
            title: "FAQ",
            items: ["Account", "Manage Deliveries", "Orders", "Payments"],
        },
        {
            title: "Resources",
            items: ["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"],
        },
    ];

    const [isErrorMessageVisible, setIsErrorMessageVisible] = useState(true);

    const showErrorMessageAgain = () => {
        setIsErrorMessageVisible(true);
    };

    useEffect(() => {
        if (isErrorMessageVisible) {
            const timeoutId = setTimeout(() => {
                setIsErrorMessageVisible(false);
            }, 3000);
            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [isErrorMessageVisible]);

    return (
        <footer className={styles.FooterContainer}>
            <div className={styles.FooterSectionWrapper}>
                <section className={styles.EmailContainer}>
                    <h2 className={styles.EmailContainerTitle}>
                        Stay Up to Date About Our Latest Offers
                    </h2>
                    <div className={styles.EmailForm}>
                        <Formik
                            validationSchema={validationSchema}
                            initialValues={{ email: "" }}
                            onSubmit={async (values, actions) => {
                                try {
                                    const apiUrl =
                                        "https://shopcoserver-git-main-chesterfalmen.vercel.app/api/addNewsletter";
                                    await axios.post(apiUrl, values);
                                    const response = await axios.post(
                                        apiUrl,
                                        values
                                    );
                                    if (response.status === 200) {
                                        toast.success("Successful subscription to the newsletter!");
                                    } else if (response.status === 400) {
                                        if (response.data.message === "The user is already subscribed to the store") {
                                            toast.info("User is already subscribed to the store");
                                        } else {
                                            toast.error("Error: " + response.data);
                                        }
                                        setIsErrorMessageVisible(true);
                                    } else {
                                        toast.error("Server error: Server Error");
                                    }
                                    setIsErrorMessageVisible(true);
                                    actions.resetForm();
                                } catch (error) {
                                    console.error("Error sending data", error);
                                    setIsErrorMessageVisible(true);
                                }
                            }}
                        >
                            {({
                                values,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                errors,
                                touched,
                            }) => (
                                <Form
                                    className={styles.MailFormBox}
                                    onSubmit={handleSubmit}
                                >
                                    {isErrorMessageVisible && (
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className={styles.BugEmail}
                                        />
                                    )}
                                    <Field
                                        name="email"
                                        placeholder="Enter your email address"
                                        iserror={errors.email && touched.email}
                                        errortext={errors.email}
                                        type={"email"}
                                        className={styles.Input}
                                    />
                                    <div className={styles.SubscribeBtn}>
                                        <BlackButton
                                            text="Subscribe to newsletter"
                                            type="submit"
                                            style={{
                                                padding: "12px 16px",
                                                color: "black",
                                                backgroundColor:
                                                    "var(--gray-primary)",
                                                width: "100%",
                                            }}
                                            onClick={showErrorMessageAgain}
                                        />
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </section>
                <section className={styles.FooterWrapper}>
                    <div className={styles.LogoContainer}>
                        <div className={styles.LogoInfo}>
                            <span className={styles.Logo}>shop.co</span>
                        </div>
                        <div className={styles.LogoSubtitleBox}>
                            <p className={styles.LogoSubtitle}>
                                We have clothes that suit your style and which
                                you’re proud to wear. From women to men.
                            </p>
                        </div>
                        <div className={styles.IconContainer}>
                            <a href="/" className="SocialMedia">
                                <img src={TwitterIcon} alt="TwitterIcon" />
                            </a>
                            <a href="/" className="SocialMedia">
                                <img src={FaceBookIcon} alt="FaceBookIcon" />
                            </a>
                            <a href="/" className="SocialMedia">
                                <img src={InstagramIcon} alt="InstagramIcon" />
                            </a>
                            <a href="/" className="SocialMedia">
                                <img src={GitHubIcon} alt="GitHubIcon" />
                            </a>
                        </div>
                    </div>
                    {sections.map((section, index) => (
                        <div key={index} className={styles.FooterListBox}>
                            <h3 className={styles.ListBoxTitle}>
                                {section.title}
                            </h3>
                            <ul className={styles.FooterList}>
                                {section.items.map((item, i) => (

                                    <li key={i} className={styles.FooterListItem}>
                                        <Link className={styles.FooterListLink}
                                            to={`/${item.toLowerCase().replace(/ /g, "-")}`}
                                        >
                                            {item === "Terms And Conditions" ? "Terms And Conditions" : item}
                                        </Link>


                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>
                <section className={styles.AuthorBlock}>
                    <div className={styles.AuthorMark}>
                        Shop.co © 2000-2023, All Rights Reserved
                    </div>
                    <div className={styles.Payment}>
                        <img src={VisaIcon} alt="VisaIcon" />
                        <img src={MastercardIcon} alt="MastercardIcon" />
                        <img src={PayPalIcon} alt="PayPalIcon" />
                        <img src={ApplePayIcon} alt="ApplePayIcon" />
                        <img src={GooglePayIcon} alt="GooglePayIcon" />
                    </div>
                </section>
            </div>
        </footer>
    );
}

export default Footer;
