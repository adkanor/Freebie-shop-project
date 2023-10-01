import React from "react";
import BlackButton from "../Button/Button";
import leftArrow from "../../assets/icons/ArrowsSlider/arrowLeft.svg";
import rightArrow from "../../assets/icons/ArrowsSlider/arrowRight.svg";
import PropTypes from "prop-types";
import style from "./ButtonGroupSlider.module.css";

const CustomButtonGroup = ({next, previous}) => {
    return (
        <div className={style.carouselButtonGroup}>
            <BlackButton  onClick={() => previous()} style={{
                margin:"2px",
                backgroundColor: "transparent",
                color: "transparent",
                boxShadow:"none",
            }}>
                <img src={leftArrow} alt={"leftArrow"} />
            </BlackButton>
            <BlackButton onClick={() => next()} style={{
                margin:"2px",
                backgroundColor: "transparent",
                color: "transparent",
                boxShadow:"none",
            }}>
                <img src={rightArrow} alt={"rightArrow"} />
            </BlackButton>
        </div>
    );
};

CustomButtonGroup.propTypes = {
    next:PropTypes.func,
    previous:PropTypes.func,
};

export default CustomButtonGroup;