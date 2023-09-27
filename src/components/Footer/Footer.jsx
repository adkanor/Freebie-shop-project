import React from "react";
import styles from "./Footer.module.css";
import FaceBookIcon from "../../assets/icons/Social/FaceBookIcon";
import GitHubIcon from "../../assets/icons/Social/GitHubIcon";
import InstagramIcon from "../../assets/icons/Social/InstagramIcon";
import TwitterIcon from "../../assets/icons/Social/TwitterIcon";
import ApplePayIcon from "../../assets/icons/Payment/ApplePayIcon";
import GooglePayIcon from "../../assets/icons/Payment/GooglePayIcon";
import MastercardIcon from "../../assets/icons/Payment/MastercardIcon";
import PayPalIcon from "../../assets/icons/Payment/PayPalIcon";
import VisaIcon from "../../assets/icons/Payment/VisaIcon";

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
                        <input
                            className={styles.EmailFormArea}
                            type="text"
                            placeholder="Enter your email address"
                        />
                        <button className={styles.EmailSendBtn} type="submit">
                            Subscribe to Newsletter
                        </button>
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
                            <TwitterIcon fill="black" />
                            <FaceBookIcon />
                            <InstagramIcon fill="black" />
                            <GitHubIcon />
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
                        <VisaIcon width="46px" height="30px" />
                        <MastercardIcon width="46px" height="30px" />
                        <PayPalIcon width="46px" height="30px" />
                        <ApplePayIcon width="46px" height="30px" />
                        <GooglePayIcon width="46px" height="30px" />
                    </div>
                </section>
            </div>
        </footer>
    );
};

export default Footer;