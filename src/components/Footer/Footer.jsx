import React from "react";
import styles from "./Footer.module.css";

import FaceBookIcon from "../../assets/icons/Social/Facebook.svg";
import GitHubIcon from "../../assets/icons/Social/GitHub.svg";
import InstagramIcon from "../../assets/icons/Social/Instagram.svg";
import TwitterIcon from "../../assets/icons/Social/Twitter.svg";

import ApplePayIcon from "../../assets/icons/Payment/ApplePay.svg";
import GooglePayIcon from "../../assets/icons/Payment/GooglePay.svg";
import MastercardIcon from "../../assets/icons/Payment/Mastercard.svg";
import PayPalIcon from "../../assets/icons/Payment/PayPal.svg";
import VisaIcon from "../../assets/icons/Payment/Visa.svg";

import MailIcon from "../../assets/icons/Header/Mail.svg";

import BlackButton from "../Button/Button";

const Footer = () => {

    const sections = [
        {
            title: "Company",
            items: ["About", "Features", "Works", "Career"]
        },
        {
            title: "Help",
            items: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"]
        },
        {
            title: "FAQ",
            items: ["About", "Features", "Works", "Career"]
        },
        {
            title: "Resources",
            items: ["Account", "Manage Deliveries", "Orders", "Payments"]
        }
    ];

    return (
        <footer className={styles.FooterContainer}>
            <div className={styles.FooterSectionWrapper}>
                <section className={styles.EmailContainer}>
                    <h2 className={styles.EmailContainerTitle}>Stay Up to Date About Our Latest Offers</h2>
                    <div className={styles.EmailForm}>
                        <div className={styles.MailFormBox}>
                            <img src={MailIcon} alt="MailIcon" />
                            <input
                                className={styles.EmailFormArea}
                                type="text"
                                placeholder="Enter your email address"
                            />
                        </div>
                        <BlackButton
                            text="Subscribe to newsletter"
                            style={{ 
                                padding: "12px 16px",
                                color: "black",
                                backgroundColor: "var(--gray-primary)"
                            }}   
                        />
                    </div>
                </section>
                <section className={styles.FooterWrapper}>
                    <div className={styles.LogoContainer}>
                        <div className={styles.LogoInfo}>
                            <span className={styles.Logo}>shop.co</span>
                        </div>
                        <div className={styles.LogoSubtitleBox}>
                            <p className={styles.LogoSubtitle}>
                                We have clothes that suit your style and which you’re proud to wear. From women to men.
                            </p>
                        </div>
                        <div className={styles.IconContainer}>
                            <a href="/" className="SocialMedia">
                                <img
                                    src={TwitterIcon}
                                    alt="TwitterIcon"
                                />
                            </a>
                            <a href="/" className="SocialMedia">
                                <img
                                    src={FaceBookIcon}
                                    alt="FaceBookIcon"
                                />
                            </a>
                            <a href="/" className="SocialMedia">
                                <img
                                    src={InstagramIcon}
                                    alt="InstagramIcon"
                                />
                            </a>
                            <a href="/" className="SocialMedia">
                                <img
                                    src={GitHubIcon}
                                    alt="GitHubIcon"
                                />
                            </a>
                        </div>
                    </div>
                    {sections.map((section, index) => (
                        <div key={index} className={styles.FooterListBox}>
                            <h3 className={styles.ListBoxTitle}>{section.title}</h3>
                            <ul className={styles.FooterList}>
                                {section.items.map((item, i) => (
                                    <li key={i} className={styles.FooterListItem}>
                                        <a className={styles.FooterListLink} href="/">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>
                <section className={styles.AuthorBlock}>
            
                    <div className={styles.AuthorMark}>Shop.co © 2000-2023, All Rights Reserved</div>
                    <div className={styles.Payment}>
                        <img src={VisaIcon} alt="VisaIcon"/>
                        <img src={MastercardIcon} alt="MastercardIcon"/>
                        <img src={PayPalIcon} alt="PayPalIcon"/>
                        <img src={ApplePayIcon} alt="ApplePayIcon"/>
                        <img src={GooglePayIcon} alt="GooglePayIcon"/>
                    </div>
                </section>
            </div>
        </footer>
    );
};

export default Footer;