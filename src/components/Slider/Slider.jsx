import React, {useEffect, useState} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from "./Slider.module.css";
import PropTypes from "prop-types";
import axios from "axios";

const responsive = {
    desktop: {
        breakpoint: { max: 1450, min: 492 },
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
        <div className={style.sliderWrapper}>
            <div >
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
                    {/*<div className={style.sliderItemWrapper} ><img className={style.sliderItem} src={"https://static.espreso.tv/uploads/article/2442937/images/im-dodge_challenger_srt_demon_8.jpeg"}/></div>*/}
                    {/*<div className={style.sliderItemWrapper} ><img className={style.sliderItem} src={"https://mc.today/wp-content/uploads/2022/02/image5-1.png"}/></div>*/}
                    {/*<div className={style.sliderItemWrapper} ><img className={style.sliderItem} src={"https://autoselect.ua/wp-content/uploads/2021/12/1-1.jpg"}/></div>*/}

                </Carousel>
            </div>
        </div>
    );
};
Slider.propTypes={
    urls:PropTypes.string.isRequired
};

export default Slider;