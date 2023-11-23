import React, { useEffect, useState } from "react";
import styles from "./RecomendationProducts.module.css";
import PropTypes from "prop-types";
import ClosedProductCard from "../ClosedProductCard/ClosedProductCard";
import axios from "axios";
import { URL } from "../../variables";

const RecommendationProducts = ({ title, children, urlParams }) => {
    const [littleArr, setLittleArr] = useState([]);
    const link = `${URL}productOther/?${urlParams}`;
    useEffect(() => {
        axios.get(link).then((responce) => {
            setLittleArr(responce.data.products);
        });
    }, [link]);

    return (
        <div className={styles.recommendationProducts}>
            <h2>{title}</h2>
            <ul className={styles.productslist}>
                {littleArr.map((product) => (
                    <ClosedProductCard
                        key={product._id}
                        info={product}
                    />
                ))}
            </ul>
            {children}
        </div>
    );
};
RecommendationProducts.propTypes = {
    title: PropTypes.string.isRequired,
    urlParams: PropTypes.string.isRequired,
    children: PropTypes.node,
};
export default RecommendationProducts;
