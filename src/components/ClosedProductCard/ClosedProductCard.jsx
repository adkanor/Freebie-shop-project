import React from "react";
import StarRating from "../StarRating/StarRating";
import PropTypes from "prop-types";
import style from "./ClosedProductCard.module.css";

function ClosedProductCard({name, price, imageURL, SKU, rating}) {
    return (
        <div className={style.cardWrapper}>
            <div className={style.imgWrapper}>
                <img src={imageURL} alt="productImg" />
            </div>
            <h6 className={style.productName}>{name}</h6>
            <div className={style.grade}>
                <StarRating rating={rating} starSize="1.1rem"/>
                <span className={style.ratingSpan}>
                    <span>{rating}</span>/5
                </span>
            </div>
            <span className={style.priceSpan}>${price}</span>
        </div>
    );
}

ClosedProductCard.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageURL: PropTypes.string.isRequired,
    SKU: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
};

export default ClosedProductCard;
