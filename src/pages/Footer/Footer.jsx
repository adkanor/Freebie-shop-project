import React from "react";
import styles from "./Footer.module.css";


const Footer = () => {
    return (
        <div className={styles.FooterContainer}>
            <div className={styles.EmailContainer}>
                <p className={styles.EmailContainerTitle}>STAY UPTO DATE ABOUT OUR LATEST OFFERS</p>
                <div className={styles.EmailForm}>
                    <input className={styles.EmailFormArea} type="text" placeholder="Enter your email address" />
                    <button className={styles.EmailSendBtn} type="submit">Subscribe to Newsletter</button>
                </div>
            </div>
            <div className={styles.LogoIconWrapper}>
                <div className={styles.LogoInfo}>
                    <span className={styles.Logo}>shop.co</span>
                </div>
                <div className={styles.LogoSubtitleBox}>
                    <p className={styles.LogoSubtitle}>
                        We have clothes that suits your style and which you’re proud to wear. From women to men.
                    </p>
                </div>
                <div className={styles.IconContainer}>
                    <img className={styles.FooterIcon} src="../../assets/icons/Social/Twitter.svg" alt="" />
                    <img className={styles.FooterIcon} src="../../assets/icons/Social/Facebook.svg" alt="" />
                    <img className={styles.FooterIcon} src="../../assets/icons/Social/Instagram.svg" alt="" />
                    <img className={styles.FooterIcon} src="../../assets/icons/Social/GitHub.svg" alt="" />
                </div>
            </div>
            <div className={styles.ListInfoContaine}></div>
        </div>
    );
};

export default Footer;