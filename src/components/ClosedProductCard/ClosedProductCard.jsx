import React, { useState } from "react";
import StarRating from "../StarRating/StarRating";
import PropTypes from "prop-types";
import style from "./ClosedProductCard.module.css";
import { Link } from "react-router-dom";
import FavoriteIcon from "../../components/FavouriteIcon/FavouriteIcon";
import Preloader from "../../components/Preloader/Preloader";
import { useSelector } from "react-redux";

function ClosedProductCard({
    id,
    name,
    imageURL,
    rating,
    sale,
    price,
    final_price,
}) {
    const [imageLoading, setImageLoading] = useState(false);
    const thisCard = { id, name, imageURL, rating, sale, price, final_price };

    const handleImageLoad = () => {
        setImageLoading(true);
    };
    const isPersonAutorised = useSelector(
        (state) => state.authorizationReducer.isAuth
    );

    return (
        <li key={id}>
            <Link className={style.cardWrapper} to={`/products/${id}`}>
                <div className={style.imgWrapper}>
                    {isPersonAutorised ? (
                        <FavoriteIcon thisCard={thisCard} />
                    ) : null}

                    {imageLoading ? null : <Preloader />}
                    <img
                        src={imageURL}
                        alt="productImg"
                        style={{ display: imageLoading ? "block" : "none" }}
                        onLoad={handleImageLoad}
                    />
                </div>
                <h6 className={style.productName}>{name}</h6>
                <div className={style.grade}>
                    <StarRating rating={Number(rating)} starSize="1.1rem" />
                    <span className={style.ratingSpan}>
                        <span>{rating}</span>/5
                    </span>
                </div>
                {sale ? (
                    <div className={style.salePriceContainer}>
                        <span className={style.defaultPriceSpan}>
                            ${final_price}
                        </span>
                        <span className={style.onSalePriceSpan}>${price}</span>
                        <span className={style.saleValue}>-{sale}%</span>
                    </div>
                ) : (
                    <span className={style.defaultPriceSpan}>
                        ${final_price}
                    </span>
                )}
            </Link>
        </li>
    );
}

ClosedProductCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    final_price: PropTypes.number.isRequired,
    imageURL: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    sale: PropTypes.number,
};

ClosedProductCard.defaultValues = {
    sale: 0,
    salePrice: 0,
};

export default ClosedProductCard;
