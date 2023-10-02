import React, { useState, useEffect } from "react";
import styles from "../DetailProduct.module.css";
import axios from "axios";

const DetailProductSlider = () => {
    const [banner, setBanners] = useState([]);
    const [largeImage, setLargeImage] = useState(
        "https://static.vecteezy.com/system/resources/thumbnails/012/628/220/small_2x/plain-black-t-shirt-on-transparent-background-free-png.png"
    );

    const handleImageClick = (image) => {
        setLargeImage(image);
    };

    useEffect(() => {
        axios
            .get("/detailproduct.json")
            .then((res) => {
                setBanners(res.data);
            })
            .catch((error) => {
                console.error("Помилка при отриманні даних:", error);
            });
    }, []);
    return (
        <div className={styles.productSlider}>
            <div className={styles.bigSquareContainer}>
                <div className={styles.bigSquare}>
                    <img src={largeImage} alt="Большой квадрат" />
                </div>
            </div>
            <div className={styles.smallSquareContainer}>
                <div className={styles.smallSquare}>
                    <img
                        src={banner[0]}
                        alt="Большой квадрат"
                        onClick={() => handleImageClick(banner[0])}
                    />
                </div>
                <div className={styles.smallSquare}>
                    <img
                        src={banner[1]}
                        alt="Большой квадрат"
                        onClick={() => handleImageClick(banner[1])}
                    />
                </div>
                <div className={styles.smallSquare}>
                    <img
                        src={banner[2]}
                        alt="Большой квадрат"
                        onClick={() => handleImageClick(banner[2])}
                    />
                </div>
            </div>
        </div>
    );
};

export default DetailProductSlider;
