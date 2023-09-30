import React, {useEffect, useState} from "react";
import axios from "axios";

import Carousel from "react-multi-carousel";
import CommentariesCard from "../commentariesCard/CommentariesCard";
import style from "./commentariesBlock.module.css";

const responsive = {
    desktop: {
        breakpoint: { max: 1450, min: 492 },
        items: 3,
        slidesToSlide: 3
    }

};

const CommentariesSlider = () => {
    const [commentaries, setCommentaries] = useState([]);

    useEffect(() => {
        axios
            .get("/reviews.json")
            .then((res) => {
                console.log(res.data);
                setCommentaries(res.data);
            })
            .catch((error) => {
                console.error("Помилка при отриманні даних:", error);
            });
    }, []);


    const commentariesBlock = commentaries.map((item, index)=>(
        <CommentariesCard key={index} name={item.name} commentaries={item.respond} rating={item.rating}/>
    ));



    return (
        <div>
            <div className={style.commentariesBlockWrapper} >
                <Carousel
                    swipeable={false}
                    draggable={false}
                    pauseOnHover={false}
                    showDots={true}
                    responsive={responsive}
                    // autoPlay={true}
                    customTransition="transform 1000ms ease-in-out"
                    infinite={true}
                    // autoPlaySpeed={3000}
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