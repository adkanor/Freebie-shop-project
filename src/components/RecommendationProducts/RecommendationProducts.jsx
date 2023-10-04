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
                        key={product._id}
                        id={product._id}
                        name={product.name}
                        price={Number(product.price)}
                        imageURL={product.url_image}
                        rating={Number(product.rate)}
                        sale={Number(product.discount)}
                        salePrice={Number(product.price)}
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
