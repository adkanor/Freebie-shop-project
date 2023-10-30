import React, { useEffect, useRef, useState } from "react";
import styles from "../../pages/DetailProduct/DetailProduct.module.css";
import PropTypes from "prop-types";
import FavoriteIcon from "../FavouriteIcon/FavouriteIcon";

const DetailProductSlider = ({ info }) => {
    const imageArr = info.url_image;
    const [largeImage, setLargeImage] = useState(imageArr[0]);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const smallContainer = useRef(null);

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

    return (
        <div className={styles.productSlider}>
            <div className={styles.bigSquareContainer}>
                <div className={styles.bigSquare}>
                    <img
                        className={styles.bigSquareimg}
                        src={largeImage}
                        alt="Big square"
                    />
                </div>
                <FavoriteIcon
                    thisCard={{ ...info, url_image: imageArr[0], id: info._id }}
                />
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
