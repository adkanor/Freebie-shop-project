import React from "react";
import BlackButton from "../Button/Button";
import leftArrow from "../../assets/icons/ArrowsSlider/arrowLeft.svg";
import rightArrow from "../../assets/icons/ArrowsSlider/arrowRight.svg";
import PropTypes from "prop-types";

const CustomButtonGroup = ({next, previous}) => {
    return (
        <div className="carousel-button-group ">
            <BlackButton onClick={() => previous()}>
                <img src={leftArrow} alt={"leftArrow"} />
            </BlackButton>
            <BlackButton onClick={() => next()}>
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