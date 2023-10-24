import React from "react";
import styles from "./About.module.css";
import AdaptiveNav from "../../components/AdaptiveNav/AdaptiveNav";

const About = () => {
    window.scrollTo(0, 0);

    return (
        <div className="section">
            <AdaptiveNav
                linksObj={{
                    home: "/",
                    about: "/about",
                }}
            />
            <h1 className={styles.pageTitle}>About Us</h1>
            <p className={styles.sectionText}>
                SHOP.CO is the fruit of our passion for beauty and fashion. Especially for you, we have prepared a wide range of the best premium clothing brands, inspired by the trends and needs of our customers. Specially selected assortment, easy shopping, safe payment methods, fast delivery and 100 days for returning the goods - shopping at SHOP.CO is a pure pleasure. See for yourself!
            </p>
            <h2 className={styles.sectionTitle}>Premium quality</h2>
            <p className={styles.sectionText}>
                To meet your expectations, our specialists have prepared offers for you based on the latest trends and a wide portfolio of premium brands that are constantly growing! We are an official distributor, we cooperate only with reliable partners. We guarantee the high quality and originality of the products sold. At SHOP.CO, you can always be sure that you are buying the best.
            </p>
            <h2 className={styles.sectionTitle}>Proven payment methods</h2>
            <p className={styles.sectionText}>
                We use only proven and, above all, safe forms of payment. PayU or cash on delivery - you can use the most popular payment methods on the market. Not convinced about paying online? No problem - place an order and pay for it upon delivery. Simply!
            </p>
            <h2 className={styles.sectionTitle}>SSL - guarantee of safe purchases</h2>
            <p className={styles.sectionText}>
                We use SSL encryption, which ensures the confidentiality and integrity of data transmission, as well as server authentication. Thanks to this, all your personal data is encrypted and protected from access by third parties.
            </p>
            <h2 className={styles.sectionTitle}>Your data is safe with us</h2>
            <p className={styles.sectionText}>
                We attach special importance to the protection of your personal data. Entities from the SHOP.CO group guarantee the security of your data processing. The information you provide (for example, login, password, home address, or bank account number) is appropriately protected and used only for the purposes for which it was collected.
            </p>
            <h2 className={styles.sectionTitle}>We guarantee you successful and safe purchases! See for yourself!</h2>
        </div>
    );
};

export default About;
