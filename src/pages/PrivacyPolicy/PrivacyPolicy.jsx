import React, { useEffect } from "react";
import styles from "./PrivacyPolicy.module.css"; 
import AdaptiveNav from "../../components/AdaptiveNav/AdaptiveNav";


const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="section">
            <AdaptiveNav
                linksObj={{
                    home: "/",
                    "privacy policy": "/privacy-policy",
                }}
            />
            <h1 className={styles.pageTitle}>Privacy Policy</h1>
            <p className={styles.sectionText}>
                Privacy of information (data) is of great importance to our company, and we want to be open and transparent in the processing of your personal data. These Privacy Terms (hereinafter - the Terms) apply to all Internet users (hereinafter - clients, users, you, buyers) of the site.
            </p>

            <p className={styles.sectionText}>
                1. These Terms are a contract of membership, and therefore your use of the site indicates that you have joined this contract in full and confirms your free agreement to the following terms. The use of the website and/or mobile application means the purchase of goods by the client without registration (as a guest), the purchase of goods by the client in one click, the purchase of goods by the client when leaving a request for callback, the registration of the buyer on the website.
            </p>

            <p className={styles.sectionText}>
                2. We never transfer, sell or exchange your data for marketing purposes to third parties. Personal data may be disclosed to third parties only on the basis and in the manner determined by the current legislation of Ukraine.
            </p>

            <p className={styles.sectionText}>
                3. Our company also has the right to transfer personal data, a database of personal data, which includes your personal data in whole or in part, to third parties without prior notification in the following cases: to persons to whose management, possession or ownership the site has been transferred; to persons connected/affiliated with our company.
            </p>

            <p className={styles.sectionText}>
                4. Our company processes personal data of users in any way for the purpose of properly providing services to customers (identification, authorization, password recovery, sending information about promotions, discounts, new products, etc., placing the customers order, as well as for other necessary actions for proper provision of services and sale of goods).
            </p>

            <p className={styles.sectionText}>
                5. When customers use the site, we collect and process their data, namely:
            </p>

            <p className={styles.sectionText}>
                - data provided by you when registering on the website, when making online purchases, when leaving a request for a callback. In this case, we will process and use the following categories of personal data:
            </p>

            <p className={styles.sectionText}>
                - contact information, such as name, surname, date of birth, address of residence (registration), email address and telephone number,
            </p>

            <p className={styles.sectionText}>
                - payment information and payment history,
            </p>

            <p className={styles.sectionText}>
                - information about the order,
            </p>

            <p className={styles.sectionText}>
                6. If you have an account we will also process your personal data provided in relation to the account, for example:
            </p>

            <p className={styles.sectionText}>
                - account identifier;
            </p>

            <p className={styles.sectionText}>
                - purchase history.
            </p>

            <p className={styles.sectionText}>
                - cookie files (if you grant permission in the site window that appears when you enter the site. If cookies are disabled, you may not be able to access important functions or distinctive features of our site and the use of the site may be limited);
            </p>

            <p className={styles.sectionText}>
                - IP addresses;
            </p>

            <p className={styles.sectionText}>
                - settings and settings of Internet browsers.
            </p>

            <p className={styles.sectionText}>
                7. For each specific processing of personal data that we collect from you, we will inform you whether the provision of specific personal data is mandatory or voluntary.
            </p>

            <p className={styles.sectionText}>
                8. The owner includes the users data in the personal data bases of the sites users from the moment the user first starts using the site, as well as continuously throughout the entire period during which the user uses any service of the site. We store your personal data for the period necessary to achieve the goals of collecting and processing personal data, taking into account the norms of the current legislation of Ukraine.
            </p>

            <p className={styles.sectionText}>
                9. We will make every effort to ensure that the information you provide is used for the purposes specified on our website (remains confidential). The Owner uses depersonalized data for targeted provision of advertising and/or informational materials; for statistical research; any other purposes in accordance with the purpose of the Owners activity.
            </p>

            <p className={styles.sectionText}>
                10. Our Internet clients have all the rights regarding the protection of their personal data, which are provided for by the current legislation of Ukraine, in particular, Article 8 of the Law of Ukraine On the Protection of Personal Data.
            </p>

            <p className={styles.sectionText}>
                11. Processing of personal data is carried out in data centers where the equipment that ensures the functioning of the Services is located. The Owner takes all measures required by law to protect the Users personal data, in particular, processing of personal data is carried out on equipment located in protected premises with limited access.
            </p>

            <p className={styles.sectionText}>
                12. The owner has the right to change the terms of this agreement (Confidentiality Terms) unilaterally. In this case, all changes will be published at this address and will be binding for the User 7 days after the date of such publication
            </p>

            <p className={styles.sectionText}>
                13. By using the site, you agree to these Privacy Terms. If you do not agree with the Privacy Terms, please do not use the sites services.
            </p>
        </div>
    );
};

export default PrivacyPolicy;