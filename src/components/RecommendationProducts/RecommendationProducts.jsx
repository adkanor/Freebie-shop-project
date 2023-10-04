import React from "react";
import styles from "./RecomendationProducts.module.css";
import PropTypes from "prop-types";

import ClosedProductCard from "../ClosedProductCard/ClosedProductCard";
const RecommendationProducts = ({ title, arrayofProducts, children }) => {
    return (
        <div className={styles.recommendationProducts}>
            <h2>{title}</h2>
            <ul className={styles.productslist}>
                {arrayofProducts.map((product) => (
                    <ClosedProductCard
                        key={product.id}
                        // id={product.id}
                        name={product.name}
                        price={product.price}
                        imageURL={product.image_urls[0]}
                        rating={3.6}
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
