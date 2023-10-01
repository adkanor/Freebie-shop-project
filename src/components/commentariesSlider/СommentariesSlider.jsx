import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import CommentariesCard from "../commentariesCard/CommentariesCard";
import CustomButtonGroup from "../ButtonGroupSlider/ButtonGroupSlider";
import style from "./CommentariesBlock.module.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1200 },
        items: 3,
        slidesToSlide: 3,
        centerMode: "true",
    },
    tablet: {
        breakpoint: { max: 1199, min: 780 },
        items: 2,
        slidesToSlide: 2,
        centerMode: "true",
    },
    mobile: {
        breakpoint: { max: 779, min: 0 },
        items: 1,
        slidesToSlide: 1,
        partialVisibilityGutter: 0,
        centerMode: "false",
    },
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

    const commentariesBlock = commentaries.map((item, index) => (
        <CommentariesCard
            key={index}
            name={item.name}
            commentaries={item.respond}
            rating={item.rating}
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
                    // centerMode={false}
                    customTransition="transform 500ms ease-in-out"
                    infinite={true}
                    keyBoardControl={false}
                    transitionDuration={500}
                    slidesToSlide={1}
                    containerClass="carousel-container"
                    itemClass="carousel-item"
                >
                    {commentariesBlock}
                </Carousel>
            </div>
        </>
    );
};

export default CommentariesSlider;

// import React, {useEffect, useState} from "react";
// import axios from "axios";
// import CommentariesCard from "../commentariesCard/CommentariesCard";
// import { Carousel } from "react-responsive-carousel";
// // import "react-responsive-carousel/lib/styles/carousel.min.css";
// // import CommentariesCard from "../commentariesCard/CommentariesCard";
// // import axios from "axios";
//
//
//
// const CommentariesSlider = () => {
//     const [commentaries, setCommentaries] = useState([]);
//
//
//
//     useEffect(() => {
//         axios
//             .get("/reviews.json")
//             .then((res) => {
//                 setCommentaries(res.data);
//             })
//             .catch((error) => {
//                 console.error("Помилка при отриманні даних:", error);
//             });
//     }, []);
//
//     const commentariesBlock = commentaries.map((item, index)=>(
//         <CommentariesCard key={index} name={item.name} commentaries={item.respond} rating={item.rating}/>
//     ));
//
//
//
//     return (
//
//         <Carousel
//             autoPlay={true}
//             infiniteLoop={true}
//             showStatus={true}
//             showIndicators={true}
//         >
//
//             {commentariesBlock}
//         </Carousel>
//
//     );
// };
//
// export default CommentariesSlider;

// import React, {useEffect, useState} from "react";
// // import { Carousel } from "react-responsive-carousel";
// // import "react-responsive-carousel/lib/styles/carousel.min.css";
// import CommentariesCard from "../commentariesCard/CommentariesCard";
// import axios from "axios";
//
//
// const CommentariesSlider = () => {
//     const [commentaries, setCommentaries] = useState([]);
//
//
//
//     useEffect(() => {
//         axios
//             .get("/reviews.json")
//             .then((res) => {
//                 setCommentaries(res.data);
//             })
//             .catch((error) => {
//                 console.error("Помилка при отриманні даних:", error);
//             });
//     }, []);
//
//     const commentariesBlock = commentaries.map((item, index)=>(
//         <CommentariesCard key={index} name={item.name} commentaries={item.respond} rating={item.rating}/>
//     ));
//
//     return (
//         <div>{commentariesBlock}</div>
//         // <Carousel>
//         //     {commentaries.map((comment, index) => (
//         //         <div key={index}>
//         //             <CommentariesCard
//         //                 name={comment.name}
//         //                 commentaries={comment.commentaries}
//         //                 rating={comment.rating}
//         //             />
//         //         </div>
//         //     ))}
//         // </Carousel>
//     );
// };
//
// export default CommentariesSlider;
