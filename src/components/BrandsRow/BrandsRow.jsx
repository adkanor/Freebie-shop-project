import styles from "./BrandsRow.module.css";
import React from "react";

import CheckImg from "../../assets/icons/Brands/check-badge-svgrepo-com.svg";
import PaymentImg from "../../assets/icons/Brands/payment-svgrepo-com.svg";
import StarsImg from "../../assets/icons/Brands/stars-svgrepo-com.svg";

const brandImages = [
    { src: CheckImg, title: "24/7 Customer Support", alt: "Check SVG" },
    { src: PaymentImg, title: "Secure Payment Options", alt: "Payment SVG" },
    { src: StarsImg, title: "Satisfaction Guaranteed", alt: "Stars SVG" },
];

function BrandBox() {
    return (
        <div className={styles.BrandWrapper}>
            <div className={styles.BrandsContainer}>
                {brandImages.map((brand, index) => (
                    <div className={styles.BrandsOption} key={index}>
                        <img
                            className={styles.BrandsLogo}
                            src={brand.src}
                            alt={brand.alt}
                        />
                        <p className={styles.BrandsTitle} key={index}>
                            {brand.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BrandBox;
