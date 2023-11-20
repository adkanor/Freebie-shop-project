import React, { useEffect, useRef, useState } from "react";
import styles from "../../pages/DetailProduct/DetailProduct.module.css";
import PropTypes from "prop-types";
import FavoriteIcon from "../FavouriteIcon/FavouriteIcon";
import ImageMagnifier from "./ImageMagnifier";
import { useSelector } from "react-redux";

const DetailProductSlider = ({ info }) => {
    const imageArr = info.url_image;
    const [largeImage, setLargeImage] = useState(imageArr[0]);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const smallContainer = useRef(null);
    const thisCard = {
        id: info._id,
        name: info.name,
        imageURL: info.url_image[0],
        rating: info.rating,
        sale: info.sale,
        price: info.price,
        final_price: info.final_price,
    };
    useEffect(() => {
        setLargeImage(imageArr[0]);
        setSelectedImageIndex(0);
        if (smallContainer.current) {
            smallContainer.current.scrollTo({
                top: 0,
            });
        }
    }, [imageArr]);

    const handleImageClick = (e, index) => {
        setLargeImage(e.target.src);
        setSelectedImageIndex(index);
    };

    const isPersonAutorised = useSelector(
        (state) => state.authorizationReducer.isAuth
    );

    return (
        <div className={styles.productSlider}>
            <div className={styles.bigSquareContainer}>
                <div className={styles.bigSquare}>
                    <ImageMagnifier
                        className={styles.bigSquareimg}
                        width={"400px"}
                        src={largeImage}
                    />
                </div>
                {isPersonAutorised ? (
                    <FavoriteIcon thisCard={thisCard} />
                ) : null}
            </div>
            <div ref={smallContainer} className={styles.smallSquareContainer}>
                {imageArr.map((bannerImg, index) => (
                    <div
                        key={index}
                        className={`${styles.smallSquare} ${
                            selectedImageIndex === index
                                ? styles.choosenSquare
                                : ""
                        }`}
                        onClick={(e) => handleImageClick(e, index)}
                    >
                        <img src={bannerImg} alt="Small square" />
                    </div>
                ))}
            </div>
        </div>
    );
};

DetailProductSlider.propTypes = {
    info: PropTypes.object.isRequired,
};

export default DetailProductSlider;
