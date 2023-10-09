import React, { useState } from "react";
import styles from "../../pages/DetailProduct/DetailProduct.module.css";
import PropTypes from "prop-types";

const DetailProductSlider = ({ imageArr }) => {
    const [largeImage, setLargeImage] = useState(imageArr[0]);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleImageClick = (e, index) => {
        setLargeImage(e.target.src);
        setSelectedImageIndex(index);
    };

    return (
        <div className={styles.productSlider}>
            <div className={styles.bigSquareContainer}>
                <div className={styles.bigSquare}>
                    <img src={largeImage} alt="Big square" />
                </div>
            </div>
            <div className={styles.smallSquareContainer}>
                {imageArr.map((bannerImg, index) => (
                    <div
                        key={index}
                        className={`${styles.smallSquare} ${
                            selectedImageIndex === index ? styles.choosenSquare : ""
                        }`}
                    >
                        <img
                            src={bannerImg}
                            alt="Small square"
                            onClick={(e) => handleImageClick(e, index)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

DetailProductSlider.propTypes = {
    imageArr: PropTypes.array.isRequired,
};

export default DetailProductSlider;
