import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import Button from "../Button/Button";
import findClothes from "../../assets/img/BrowseByStyle/FindClothes.png";
import "react-multi-carousel/lib/styles.css";
import style from "./Slider.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { URL } from "../../variables";
import { defaultParams } from "../../variables";
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 492 },
        items: 1,
        slidesToSlide: 1,
    },
};

const Slider = () => {
    const [banner, setBanners] = useState([]);

    useEffect(() => {
        axios
            .get(`${URL}banners`)
            .then((res) => {
                setBanners(res.data[0].urls);
            })
            .catch((error) => {
                console.error("404:", error);
            });
    }, []);

    const pictures = banner.map((item, index) => (
        <div className={style.sliderItemWrapper} key={index}>
            <img
                className={style.sliderItem}
                src={item}
                alt={`banner ${index}`}
                style={{ objectFit: "cover" }}
            />
        </div>
    ));
    return (
        <div data-testid="sliderWrapper">
            <div className={style.sliderWrapper}>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    pauseOnHover={false}
                    showDots={true}
                    responsive={responsive}
                    autoPlay={true}
                    customTransition="transform 1000ms ease-in-out"
                    infinite={true}
                    autoPlaySpeed={7000}
                    keyBoardControl={false}
                    transitionDuration={1500}
                    containerClass="carousel-container"
                >
                    {pictures}
                </Carousel>
            </div>
            <div className={style.bannerStatic}>
                <h1 className={style.bannerTitle}>
                    Find clothes that matches your style
                </h1>
                <p className={style.bannerContent}>
                    Browse through our diverse range of meticulously crafted
                    garments, designed to bring out your individuality and cater
                    to your sense of style.
                </p>
                <Link
                    className={style.bannerLink}
                    to={`${defaultParams}&hasdiscount=true`}
                >
                    <Button
                        text="Shop Now"
                        style={{
                            margin: "auto",
                            marginBottom: "16px",
                            padding: "16px 100px",
                            backgroundColor: "var(--black--background)",
                        }}
                        type="text"
                    ></Button>
                </Link>
                <div className={style.bannerNumbers}>
                    <div className={style.bannerInfo}>
                        <p>200+</p>
                        <span className={style.bannerInfoText}>
                            International Brands
                        </span>
                    </div>
                    <div className={style.bannerInfo}>
                        <p>2,000+</p>
                        <span>High-Quality Products</span>
                    </div>
                </div>
                <div className={style.bannerInfo}>
                    <p>30,000+</p>
                    <span>Happy Customers</span>
                </div>
            </div>
            <img
                className={style.bannerTitleImg}
                src={findClothes}
                alt="Shop title `Find clothes`"
            />
        </div>
    );
};

export default Slider;
