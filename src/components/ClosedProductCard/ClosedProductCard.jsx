import React, { useState } from "react";
import StarRating from "../StarRating/StarRating";
import PropTypes from "prop-types";
import style from "./ClosedProductCard.module.css";
import { Link } from "react-router-dom";
import FavoriteIcon from "../../components/FavouriteIcon/FavouriteIcon";
import Preloader from "../../components/Preloader/Preloader";
import { useSelector } from "react-redux";

function ClosedProductCard({ info }) {
    const [imageLoading, setImageLoading] = useState(false);
    const [areSizesOpened, setAreSizesOpened] = useState(false);
    const handleImageLoad = () => {
        setImageLoading(true);
    };
    const isPersonAutorised = useSelector(
        (state) => state.authorizationReducer.isAuth
    );
    function handleAdding(size) {
        const selectedSizeObj = info.sizes.find((item) => item.size === size);
        if (selectedSizeObj && selectedSizeObj.count >= 1) {
            const tryToCart = {
                ...info,
                selectedAmount: 1,
                selectedSize: size,
            };
            dispatch(addToCart(tryToCart));
        } else {
            console.warn("No item is available.Choose less amount");
            toast.error("This quantity is not available");
        }
    }

    return (
        <li key={info._id}>
            <div className={style.absoluteContainer}>
                <Link
                    className={style.cardWrapper}
                    to={`/products/${info._id}`}
                >
                    <div className={style.imgWrapper}>
                        {isPersonAutorised ? (
                            <FavoriteIcon
                                thisCard={{
                                    ...info,
                                    id: info._id,
                                }}
                            />
                        ) : null}

                        {imageLoading ? null : <Preloader />}
                        <img
                            src={info.url_image[0]}
                            alt="productImg"
                            style={{ display: imageLoading ? "block" : "none" }}
                            onLoad={handleImageLoad}
                        />
                    </div>
                    <h6 className={style.productName}>{info.name}</h6>
                    <div className={style.grade}>
                        <StarRating
                            rating={Number(info.rating)}
                            starSize="1.1rem"
                        />
                        <span className={style.ratingSpan}>
                            <span>{info.rating}</span>/5
                        </span>
                    </div>
                    {info.discount ? (
                        <div className={style.salePriceContainer}>
                            <span className={style.defaultPriceSpan}>
                                ${info.final_price}
                            </span>
                            <span className={style.onSalePriceSpan}>
                                ${info.price}
                            </span>
                            <span className={style.saleValue}>
                                -{info.discount}%
                            </span>
                        </div>
                    ) : (
                        <span className={style.defaultPriceSpan}>
                            ${info.final_price}
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
                            {info.sizes.map((sizeElement) => (
                                <li
                                    className={style.sizeLi}
                                    onClick={() => {
                                        handleAdding(sizeElement.size);
                                    }}
                                    key={sizeElement.size}
                                    style={
                                        sizeElement.count <= 0
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
    info: PropTypes.object.isRequired,
};

ClosedProductCard.defaultValues = {
    sale: 0,
    salePrice: 0,
};

export default ClosedProductCard;
