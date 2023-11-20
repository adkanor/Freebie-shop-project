import React, { useState } from "react";
import StarRating from "../StarRating/StarRating";
import PropTypes from "prop-types";
import style from "./ClosedProductCard.module.css";
import { Link } from "react-router-dom";
import FavoriteIcon from "../../components/FavouriteIcon/FavouriteIcon";
import Preloader from "../../components/Preloader/Preloader";
import { useSelector } from "react-redux";
import { addToCart } from "../../stores/cartProducts/action";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function ClosedProductCard({
    id,
    name,
    imageURL,
    rating,
    sale,
    price,
    productSizes,
    final_price,
}) {
    const [imageLoading, setImageLoading] = useState(false);
    const [areSizesOpened, setAreSizesOpened] = useState(false);
    const thisCard = { id, name, imageURL, rating, sale, price, final_price };
    const dispatch = useDispatch();
    const sizes = [
        {
            size: "XL",
            count: 0,
        },
        {
            size: "L",
            count: 3,
        },
        {
            size: "M",
            count: 0,
        },
        {
            size: "S",
            count: 1,
        },
        {
            size: "XS",
            count: 4,
        },
    ];

    const handleImageLoad = () => {
        setImageLoading(true);
    };
    const isPersonAutorised = useSelector(
        (state) => state.authorizationReducer.isAuth
    );

    function handleAdding(size) {
        const selectedSizeObj = sizes.find((item) => item.size === size);
        if (selectedSizeObj && selectedSizeObj.count >= 1) {
            const tryToCart = {
                _id: id,
                name: name,
                final_price: final_price,
                url_image: [imageURL],
                selectedAmount: 1,
                selectedSize: size,
            };
            dispatch(addToCart(tryToCart));
        } else {
            console.warn("No item is available.Choose less amount");
            toast.error("This quantity is  not available");
        }
    }

    return (
        <li key={id}>
            <div className={style.absoluteContainer}>
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
                            <span className={style.onSalePriceSpan}>
                                ${price}
                            </span>
                            <span className={style.saleValue}>-{sale}%</span>
                        </div>
                    ) : (
                        <span className={style.defaultPriceSpan}>
                            ${final_price}
                        </span>
                    )}
                </Link>
                <div
                    style={areSizesOpened ? { backgroundColor: "white" } : {}}
                    className={style.sizesContainer}
                >
                    <button
                        onClick={() => setAreSizesOpened((prev) => !prev)}
                        className={style.openSizes}
                        title="quick choice"
                    >
                        {areSizesOpened ? "˅" : "˄"}
                    </button>
                    {areSizesOpened && (
                        <ul className={style.sizesUl}>
                            {sizes.map((sizeElement) => (
                                <li
                                    onClick={() => {
                                        handleAdding(sizeElement.size);
                                    }}
                                    key={sizeElement.size}
                                    style={
                                        !sizeElement.count
                                            ? {
                                                boxShadow: "none",
                                                backgroundColor:
                                                    "var(--separator-line)",
                                                color: "white",
                                                pointerEvents: "none",
                                            }
                                            : {}
                                    }
                                >
                                    {sizeElement.size}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
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
    productSizes: PropTypes.array,
};

ClosedProductCard.defaultValues = {
    sale: 0,
    salePrice: 0,
};

export default ClosedProductCard;
