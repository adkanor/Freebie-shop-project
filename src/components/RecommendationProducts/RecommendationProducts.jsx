import React from "react";
import styles from "./RecomendationProducts.module.css";
import PropTypes from "prop-types";

import ClosedProductCard from "../ClosedProductCard/ClosedProductCard";
const RecommendationProducts = ({ title, arrayofProducts, children }) => {
    const littleArr = arrayofProducts.length ? arrayofProducts.slice(0, 4) : [];
    return (
        <div className={styles.recommendationProducts}>
            <h2>{title}</h2>
            <ul className={styles.productslist}>
                {littleArr.map((product) => (
                    <ClosedProductCard
                        key={product._id}
                        id={product._id}
                        name={product.name}
                        final_price={Number(product.final_price)}
                        price={Number(product.price)}
                        imageURL={product.url_image[0]}
                        rating={Number(product.rating)}
                        sale={Number(product.discount)}
                    />
                ))}
            </ul>
            {children}
        </div>
    );
};
RecommendationProducts.propTypes = {
    title: PropTypes.string.isRequired,
    arrayofProducts: PropTypes.array.isRequired,
    children: PropTypes.node,
};
export default RecommendationProducts;
