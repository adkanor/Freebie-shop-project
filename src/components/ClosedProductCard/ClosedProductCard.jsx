import React from "react";
import StarRating from "../StarRating/StarRating";
import PropTypes from "prop-types";
import style from "./ClosedProductCard.module.css";

function ClosedProductCard({
    id,
    name,
    price,
    imageURL,
    rating,
    sale,
    salePrice,
}) {
    console.log(rating);
    return (
        <div className={style.cardWrapper}>
            <div className={style.imgWrapper}>
                <img src={imageURL} alt="productImg" />
            </div>
            <h6 className={style.productName}>{name}</h6>
            <div className={style.grade}>
                <StarRating rating={rating} starSize="1.1rem" />
                <span className={style.ratingSpan}>
                    <span>{rating}</span>/5
                </span>
            </div>
            {sale ? (
                <div className={style.salePriceContainer}>
                    <span className={style.defaultPriceSpan}>${price}</span>
                    <span className={style.onSalePriceSpan}>${salePrice}</span>
                    <span className={style.saleValue}>-{sale}%</span>
                </div>
            ) : (
                <span className={style.defaultPriceSpan}>${price}</span>
            )}
        </div>
    );
}

ClosedProductCard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageURL: PropTypes.string.isRequired,
    rating: PropTypes.number,
    sale: PropTypes.number,
    salePrice: PropTypes.number,
};

ClosedProductCard.defaultValues = {
    sale: 0,
    salePrice: 0,
};

export default ClosedProductCard;
