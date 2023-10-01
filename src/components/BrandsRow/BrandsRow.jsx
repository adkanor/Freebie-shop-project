import styles from "./BrandsRow.module.css";
import React from "react";

import VercaceImg from "../../assets/icons/Brands/Versace.svg";
import ZaraImg from "../../assets/icons/Brands/Zara.svg";
import GucciImg from "../../assets/icons/Brands/Gucci.svg";
import PradaImg from "../../assets/icons/Brands/Prada.svg";
import CCImg from "../../assets/icons/Brands/Calvin-Klein.svg";

const brandImages = [
    { src: VercaceImg, alt: "Versace SVG" },
    { src: ZaraImg, alt: "Zara SVG" },
    { src: GucciImg, alt: "Gucci SVG" },
    { src: PradaImg, alt: "Prada SVG" },
    { src: CCImg, alt: "Calvin Klein SVG" },
];

function BrandBox() {
    return (
        <div className={styles.BrandWrapper}>
            <div className={styles.BrandsContainer}>
                {brandImages.map((brand, index) => (
                    <img
                        key={index}
                        className={styles.BrandsLogo}
                        src={brand.src}
                        alt={brand.alt}
                    />
                ))}
            </div>
        </div>
    );
}

export default BrandBox;
