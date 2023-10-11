import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import CommentsCard from "../CommentsCard/CommentsCard";
import CustomButtonGroup from "../ButtonGroupSlider/ButtonGroupSlider";
import style from "./CommentsBlock.module.css";

const responsive = {
    desktop: {
        breakpoint: {max: 3000, min: 1200},
        items: 3,
        slidesToSlide: 3,
        centerMode: "true",
    },
    tablet: {
        breakpoint: {max: 1199, min: 780},
        items: 2,
        slidesToSlide: 2,
        centerMode: "true",
    },
    mobile: {
        breakpoint: {max: 779, min: 0},
        items: 1,
        slidesToSlide: 1,
        partialVisibilityGutter: 0,
        centerMode: "false",
    },
};

const CommentsSlider = () => {
    const [comments, setComments] = useState([]);
    const carouselRef = useRef(null);

    useEffect(() => {
        axios
            .get("https://shopcoserver-git-main-chesterfalmen.vercel.app/api/getCountComments/10")
            .then((res) => {
                setComments(res.data);
            })
            .catch((error) => {
                console.error("404", error);
            });
    }, []);

    const commentsBlock = comments.map((item, index) => (
        <CommentsCard
            key={index}
            firstName={item.firstName}
            lastName={item.lastName}
            commentaries={item.text}
            rating={item.rating}
            style={{
                width: "350px",
                height: "200px",
                margin: "0 auto 10px",

            }}

        />
    ));

    const handlePrevClick = () => {
        carouselRef.current.previous();
    };

    const handleNextClick = () => {
        carouselRef.current.next();
    };

    return (
        <>
            <div className={style.buttonGroup}>
                <h2 className={style.buttonGroupTitle}>Our happy customers</h2>
                <CustomButtonGroup
                    next={handleNextClick}
                    previous={handlePrevClick}
                />
            </div>
            <div className={style.carousel}>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    pauseOnHover={false}
                    responsive={responsive}
                    ref={carouselRef}
                    arrows={false}
                    renderButtonGroupOutside={true}
                    customTransition="transform 500ms ease-in-out"
                    infinite={true}
                    keyBoardControl={false}
                    transitionDuration={500}
                    slidesToSlide={1}
                    containerClass="carousel-container"
                    itemClass="carousel-item"
                >
                    {commentsBlock}
                </Carousel>
            </div>
        </>
    );
};

export default CommentsSlider;


