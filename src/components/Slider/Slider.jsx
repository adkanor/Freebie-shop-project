import React, {useEffect, useState} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from "./Slider.module.css";
import axios from "axios";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 492 },
        items: 1,
        slidesToSlide: 1
    }

};



const Slider = () => {
    const [banner, setBanners] = useState([]);

    useEffect(() => {
        axios
            .get("/Banners.json")
            .then((res) => {
                setBanners(res.data);
            })
            .catch((error) => {
                console.error("Помилка при отриманні даних:", error);
            });
    }, []);

    const pictures = banner.map((item,index) =>(
        <div className={style.sliderItemWrapper} key={item}><img className={style.sliderItem} src={item} alt={`banner ${index}`}/></div>

    ));
    return (
        <div>
            <div className={style.sliderWrapper} >
                <Carousel
                    swipeable={false}
                    draggable={false}
                    pauseOnHover={false}
                    showDots={true}
                    responsive={responsive}
                    autoPlay={true}
                    customTransition="transform 1000ms ease-in-out"
                    infinite={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={false}
                    transitionDuration={1500}
                    containerClass="carousel-container"
                >
                    {pictures}

                </Carousel>
            </div>
            <div className={style.bannerStatic}><img src={banner[0]} alt={"bannerStatic"}/></div>
        </div>
    );
};


export default Slider;