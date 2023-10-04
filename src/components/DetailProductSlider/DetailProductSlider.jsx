import React, { useState } from "react";
import styles from "../../pages/DetailProduct/DetailProduct.module.css";
import PropTypes from "prop-types";

const DetailProductSlider = ({ imageArr }) => {
    const [largeImage, setLargeImage] = useState(imageArr[0]);
    // eslint-disable-next-line
    const [banners, _] = useState(imageArr.slice(1));

    const handleImageClick = (image) => {
        setLargeImage(image);
    };

    return (
        <div className={styles.productSlider}>
            <div className={styles.bigSquareContainer}>
                <div className={styles.bigSquare}>
                    <img src={largeImage} alt="Big square" />
                </div>
            </div>
            <div className={styles.smallSquareContainer}>
                {banners.map((bannerImg, index) => (
                    <div key={index} className={styles.smallSquare}>
                        <img
                            src={bannerImg}
                            alt="Small square"
                            onClick={() => handleImageClick(bannerImg)}
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
