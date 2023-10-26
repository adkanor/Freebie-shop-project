import React, { useEffect } from "react";
import styles from "./TermsAndConditions.module.css";
import AdaptiveNav from "../../components/AdaptiveNav/AdaptiveNav";


const TermsAndConditions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="section">
            <AdaptiveNav
                linksObj={{
                    home: "/",
                    "terms and conditions": "//terms-and-conditions",
                }}
            />
            <h1 className={styles.pageTitle}>Terms & Conditions</h1>
            <p className={styles.sectionText}>
                The terms and conditions of use of the site determine the rules for using the website of the online store. By using the website of the online store, you accept and agree to the circumstances provided for in these Terms and Conditions of Use.
            </p>
            <h2 className={styles.sectionText}>1. Terms and definitions:</h2>
            <p className={styles.pageText}>
                1.1. A contract concluded at a distance is a contract concluded by the Seller with the Buyer (client) using means of remote communication.
            </p>
            <p className={styles.pageText}>
                1.2. Online store - an online store located on the site owned by the Seller, which presents the Goods offered for sale, terms of payment, delivery, return of these Goods.
            </p>
            <p className={styles.pageText}>
                1.3. An order is a duly executed and placed declaration of will of the Buyer (client), which is aimed at concluding a contract for the retail sale of Goods offered by the Seller for retail sale through the online store.
            </p>
            <p className={styles.pageText}>
                1.4. The buyer (client) is a natural person who purchases, orders, uses or intends to purchase or order products for personal needs not directly related to business activities. Such a natural person must possess the required amount of legal capacity and the necessary authority to enter into contracts for the purchase and order of Goods.
            </p>
            <p className={styles.pageText}>
                1.5. The seller is a business entity that, in accordance with the contract, sells the Goods to the consumer or offers them for sale.
            </p>
            <p className={styles.pageText}>
                1.6. The site is the Sellers website located on the Internet.
            </p>
            <p className={styles.pageText}>
                1.7. Goods (products) – clothes, shoes, accessories and other groups of goods in the assortment presented in the online store, the remote sale of which is not prohibited in the online store. The Seller gives the Buyer the opportunity to view images (photographs) of the Goods, which are accompanied by information about the main characteristics of the products (name, country of origin, conditions of use, etc.) and the price of the products (Goods).
            </p>
            <p className={styles.pageText}>
                1.8. Delivery Service - third parties that provide services for the delivery of Orders to the Buyer.
            </p>
            <h2 className={styles.sectionText}>2. Sellers name, contact information.</h2>
            <p className={styles.pageText}>
                2.1. The Client can contact the Seller who manages the online store in the following ways.
            </p>
            <ul className={styles.pageList}>
                <li className={styles.pageSubtext}>According to the actual address of the online store SHOP.CO.</li>
                <li className={styles.pageSubtext}>Call the hotline for landline and mobile phones.</li>
                <li className={styles.pageSubtext}>By e-mail</li>
                <li className={styles.pageSubtext}>Through the contact form on the website of the online store.</li>
            </ul>
            <h2 className={styles.sectionText}>3. General rules for using the SHOP.CO online store.</h2>
            <p className={styles.pageText}>
                3.1. By registering on the website of the online store and ordering Goods through the online store, the Buyer certifies his full and unquestionable agreement with all the provisions and rules posted on this website.
            </p>
            <p className={styles.pageText}>
                3.2. Only persons over 18 years of age can use the online store. The buyer must have the necessary legal capacity and the necessary authority to enter into a contract for the sale of Goods through the website. By registering on the Online Store website, you guarantee that you are of legal age and possess the required legal capacity to use the Online Store website.
            </p>
            <p className={styles.pageText}>
                3.3. Any person under the age of 18 may use the online store only with the consent of a parent or guardian.
            </p>
            <p className={styles.pageText}>
                3.4. The buyer agrees to these Rules by performing the following mandatory actions:
            </p>
            <ul className={styles.pageList}>
                <li className={styles.pageSubtext}>Placing an order for the Goods in the manner prescribed by these Rules;</li>
                <li className={styles.pageSubtext}>Acceptance and agreement by the Buyer of the conditions established by these Rules, which is carried out during registration on the Sellers website - creating an account.</li>
            </ul>
            <h2 className={styles.sectionText}>4. Registration on the website</h2>
            <p className={styles.pageText}>
                4.1. To place an order, the Buyer must register on the website. Registration on the site is done by creating an account. After registering on the site, the Buyer can use the Account.
            </p>
            <p className={styles.pageText}>
                4.2. The Buyer bears personal responsibility for the accuracy, correctness and veracity of the information provided by the Buyer during registration on the website.
            </p>
            <p className={styles.pageText}>
                4.3. Everyone who registers and makes purchases on the website in the online store provides his personal data and agrees to their processing by SHOP.CO under the conditions specified in the Privacy Policy.
            </p>
            <p className={styles.pageText}>
                4.4. To confirm the correctness of the data provided during registration in the online store, the Client receives an e-mail with a request to confirm his data.
            </p>
            <p className={styles.pageText}>
                4.5. When registering on the website in the online store - creating an account, the Buyer accepts the terms of the Privacy Policy, Rules and Terms of Use of the site by: - Clicking the Create an account button.
            </p>
            <h2 className={styles.sectionText}>5. Procedure for placing an order and purchasing Goods in the online store.</h2>
            <p className={styles.pageText}>
                5.1. Orders are accepted through the website. The buyer places an order through the Personal account.
            </p>
            <p className={styles.pageText}>
                5.2. When placing an order, the Buyer must specify the following information:
            </p>
            <ul className={styles.pageList}>
                <li className={styles.pageSubtext}>Surname and first name of the Buyer or recipient of the order;</li>
                <li className={styles.pageSubtext}>Order delivery address;</li>
                <li className={styles.pageSubtext}>E-mail address;</li>
                <li className={styles.pageSubtext}>Contacts.</li>
            </ul>
            <p className={styles.pageText}>
                5.3. In the case of the Buyers need to receive an invoice, the Buyer can issue it himself after ordering in the Personal Account by selecting the corresponding option. In this case, the invoice is created in PDF format.
            </p>
            <p className={styles.pageText}>
                5.4. The order is considered received after the Buyer confirms the order.
            </p>
            <h2 className={styles.sectionText}>6. Prices, terms of payment and delivery of Goods</h2>
            <p className={styles.pageText}>
                6.1. Prices for the Goods are indicated on the website.
            </p>
            <p className={styles.pageText}>
                6.2. Prices for the Goods are indicated in the currency you have selected.
            </p>
            <p className={styles.pageText}>
                6.3. Payment for the Goods is made in the manner specified in the Payment section.
            </p>
            <p className={styles.pageText}>
                6.4. Delivery of Orders is carried out in the manner and within the terms specified in the Delivery section.
            </p>
            <p className={styles.pageText}>
                6.5. The delivery of Orders is carried out by the Delivery Service.
            </p>
            <p className={styles.pageText}>
                6.6. The delivery cost of the Orders is indicated on the website at the time of placing the Order.
            </p>
            <h2 className={styles.sectionText}>7. Return of Goods</h2>
            <p className={styles.pageText}>
                7.1. The return of the Goods is carried out in accordance with the Return and Exchange Policy, the conditions of which are specified in the Return section.
            </p>
            <h2 className={styles.sectionText}>8. Responsibility</h2>
            <p className={styles.pageText}>
                8.1. The seller is not responsible for the Orders that were not received by the Buyer due to the provision of incorrect information during the registration on the website or when placing an order.
            </p>
            <p className={styles.pageText}>
                8.2. The seller is not responsible for the difference in the color of the Goods and its image, which arose due to the personal settings of the Buyers monitor.
            </p>
            <p className={styles.pageText}>
                8.3. The seller is not responsible for the improper use of the Goods purchased by the Buyer.
            </p>
            <h2 className={styles.sectionText}>9. Dispute Resolution</h2>
            <p className={styles.pageText}>
                9.1. In the event of disputes and disagreements, the Parties will make every effort to resolve them through negotiations. If it is impossible to resolve the dispute through negotiations, it will be resolved in the manner prescribed by the current legislation of the country where the online store is located.
            </p>
            <p className={styles.pageText}>
                9.2. The current legislation of the country where the online store is located is the main regulator of the relations between the Parties.
            </p>
            <h2 className={styles.sectionText}>10. Other Conditions</h2>
            <p className={styles.pageText}>
                10.1. These Terms and Conditions may be amended by the Seller unilaterally at any time. The text of the current version of the Rules is always located on the website.
            </p>
            <p className={styles.pageText}>
                10.2. The buyer is solely responsible for the timely familiarization with the current version of the Rules.
            </p>
            <p className={styles.pageText}>
                10.3. In matters not regulated by these Rules, the Parties are guided by the current legislation of the country where the online store is located.
            </p>
            <p className={styles.pageText}>
                10.4. Non-food products of appropriate quality, the list of which is approved by Resolution of the Cabinet of Ministers of Ukraine No. 172 dated 03/19/1994, are not subject to return.
            </p>
            <p className={styles.pageText}>
                10.5. The return of the Goods of proper quality is carried out at the expense of the Buyer.
            </p>
            <p className={styles.pageText}>
                10.6. If the sales contract is terminated and the Goods are returned to the Buyer, the Seller shall return the cost of the Goods to the Buyer. The term for the return of the value of the Goods by the Seller does not exceed 14 days from the date of receipt by the Seller of a notification from the Buyer about the exercise of his right to terminate the sales contract, but in any case no later than within 14 days from the date of receipt of the Goods by the Seller. This term can be extended by the Seller.
            </p>
            <p className={styles.pageText}>
                10.7. The refund of the value of the Goods is made using the same payment method that the Buyer used for the initial transaction unless the Buyer expressly agreed to another solution proposed by the Seller. In any case, the Buyer will not be charged a fee related to the refund.
            </p>
            <p className={styles.pageText}>
                10.8. In any case, the Seller may not refund the price of the Product until it receives the Product back or until the Buyer provides confirmation of the return of the Product, whichever occurs first.
            </p>
            <p className={styles.pageText}>
                10.9. The buyer is responsible for the decrease in the value of the Goods as a result of its use in a way other than what is necessary to determine the condition, properties, and performance of the Goods.
            </p>
            <h2 className={styles.sectionText}>11. Warranty periods and submission of claims</h2>
            <p className={styles.pageText}>
                11.1. The warranty period for the Goods is set at 2 years. During this period, the Seller guarantees the proper quality of the Goods and the suitability of the Goods for operation.
            </p>
            <p className={styles.pageText}>
                11.2. Complaints (claims) about the defects of the Goods can be submitted within two years from the moment of purchase of the Goods. A complaint can be filed only if the defect is discovered within the warranty period and the defect causes the non-compliance of the Goods with the terms of the contract (set forth on this website). The difference in design elements or design from those stated in the description on the Website is not a sign of poor quality of the Product.
            </p>
            <p className={styles.pageText}>
                11.3. After signing the accompanying documents, claims regarding external defects of the Product, its quantity, completeness are not accepted. That is, from the moment of delivery of the Goods to the moment of signing the accompanying documents, the Buyer must inspect the appearance of the Goods, check the quantity and completeness of the Goods in accordance with the placed order.
            </p>
            <p className={styles.pageText}>
                11.4. The Buyer must comply with the conditions (rules) of the use of the Goods, which are indicated by the manufacturer on the corresponding internal labels placed on the Goods.
            </p>
            <p className={styles.pageText}>
                11.5. In the event that significant defects are discovered during the established warranty period, confirmed, if necessary, by the conclusion of the examination, the Buyer has the right during the warranty period to demand termination of the contract and return of the money paid for the Goods.
            </p>
            <p className={styles.pageText}>
                11.6. The Seller may provide complaining customers with the opportunity to return defective Goods by courier service at the Sellers expense. For this, the Buyer must fill out an electronic complaint form (available on the Buyers panel), where the address at which the courier can pick up the Goods that are the subject of the complaint is indicated.
            </p>
            <p className={styles.pageText}>
                11.7. The Seller considers the complaint within 14 days from the moment of its receipt, and the Buyer is notified of the result.
            </p>
            <p className={styles.pageText}>
                11.8. If the submitted complaint is satisfied, the cost of the Goods is returned, and the confirmed costs of returning Goods of inadequate quality to the Seller are reimbursed.
            </p>
            <p className={styles.pageText}>
                11.9. If the complaint is rejected, the Buyer receives a message explaining that the complaint was found to be unfounded and the reasons for finding the complaint unfounded.
            </p>
            <p className={styles.pageText}>
                11.10. Detailed conditions regarding warranty periods and the procedure for submitting claims are indicated in the Claims section on the website of the online store.
            </p>
            <h2 className={styles.sectionText}>12. Confidentiality, protection, and processing of personal data</h2>
            <p className={styles.pageText}>
                12.1. When registering on the Sellers website, when placing an Order for Goods, the Buyer consents to the collection and processing of his personal data (collection, registration, accumulation, storage, adaptation, change, renewal, use, distribution, depersonalization, destruction).
            </p>
            <p className={styles.pageText}>
                12.2. The Buyers consent to the processing of his personal data by SHOP.CO is voluntary, but without consent to the processing of personal data, it is impossible to complete registration and purchase on the website in the online store. All information on the processing of personal data is available in the section Privacy Policy on the website of the online store.
            </p>
            <p className={styles.pageText}>
                12.3. The Seller undertakes to maintain confidentiality regarding the personal data of the Buyer, as well as other information of the Buyers, which became known to the Seller in connection with the implementation of the provisions of these Rules, except for cases when such information:
            </p>
            <ul className={styles.pageList}>
                <li className={styles.pageSubtext}>is publicly available;</li>
                <li className={styles.pageSubtext}>requires disclosure in cases established by law, and/or upon receipt of requests from authorized state authorities.</li>
                <li className={styles.pageSubtext}>disclosed with the Buyers permission;</li>
            </ul>
            <p className={styles.pageText}>
                12.4. The seller has the right to use cookies technology. Cookies do not contain confidential information and are not transferred to third parties.
            </p>
            <p className={styles.pageText}>
                12.5. Processing of personal data for marketing purposes
            </p>
            <p className={styles.pageText}>
                12.6. The client can agree to the processing of his personal data and their transfer to a third party to receive commercial information from, for example, about special offers.
            </p>
            <h2 className={styles.sectionText}>13. Intellectual property right</h2>
            <p className={styles.pageText}>
                13.1. All information contained on the website of the Internet store, any computer code that contains the Website, elements of the Website belong to the Seller by intellectual property rights. You may not copy, reproduce, transmit, publish, or otherwise distribute the web pages or materials of the Website, or the computer code or elements of the Website, except for personal use, without the prior written consent of the Seller.
            </p>
            <h2 className={styles.sectionText}>14. Amendments to these Rules</h2>
            <p className={styles.pageText}>
                14.1. The seller reserves the right to make changes to these Rules. Such changes enter into force from the moment the new version of the Rules is posted on the website unless another effective date is provided by the Rules themselves.
            </p>
        </div>
    );
};

export default TermsAndConditions;
