import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import CommentariesCard from "../commentariesCard/CommentariesCard";
import CustomButtonGroup from "../ButtonGroupSlider/ButtonGroupSlider";
import style from "./commentariesBlock.module.css";



const responsive = {
    desktop: {
        breakpoint: { max: 1450, min: 492 },
        items: 3,
        slidesToSlide: 3,
        partialVisibilityGutter : 40
    }

};

const CommentariesSlider = () => {
    const [commentaries, setCommentaries] = useState([]);
    const carouselRef = useRef(null);

    useEffect(() => {
        axios
            .get("/reviews.json")
            .then((res) => {
                setCommentaries(res.data);
            })
            .catch((error) => {
                console.error("Помилка при отриманні даних:", error);
            });
    }, []);


    const commentariesBlock = commentaries.map((item, index)=>(
        <CommentariesCard key={index} name={item.name} commentaries={item.respond} rating={item.rating}/>
    ));


    const handlePrevClick = () => {
        carouselRef.current.previous();
    };

    const handleNextClick = () => {
        carouselRef.current.next();
    };



    return (
        <div>
            <div className={style.buttonGroup}>
                <CustomButtonGroup next={handleNextClick} previous={handlePrevClick}/>
            </div>
            <div >
                <Carousel
                    swipeable={false}
                    draggable={false}
                    pauseOnHover={false}
                    responsive={responsive}
                    ref={carouselRef}
                    arrows={false}
                    renderButtonGroupOutside={true}
                    centerMode={true}
                    customTransition="transform 1000ms ease-in-out"
                    infinite={true}
                    keyBoardControl={false}
                    transitionDuration={1500}
                    containerClass="carousel-container"
                >
                    {commentariesBlock}

                </Carousel>
            </div>

        </div>
    );
};

export default CommentariesSlider;