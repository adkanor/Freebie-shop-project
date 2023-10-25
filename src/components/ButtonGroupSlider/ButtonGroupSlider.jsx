import React from "react";
import BlackButton from "../Button/Button";
import leftArrow from "../../assets/icons/ArrowsSlider/arrowLeft.svg";
import rightArrow from "../../assets/icons/ArrowsSlider/arrowRight.svg";
import PropTypes from "prop-types";


const CustomButtonGroup = ({next, previous}) => {
    return (
        <div>
            <BlackButton data-testid="prev-button" onClick={() => previous()} style={{
                margin: "2px 2px 0",
                backgroundColor: "transparent",
                color: "transparent",
                boxShadow: "none",
            }}>
                <img src={leftArrow} alt={"leftArrow"}/>
            </BlackButton>
            <BlackButton data-testid="next-button" onClick={() => next()} style={{
                margin: "2px 2px 0",
                backgroundColor: "transparent",
                color: "transparent",
                boxShadow: "none",
            }}>
                <img src={rightArrow} alt={"rightArrow"}/>
            </BlackButton>
        </div>
    );
};

CustomButtonGroup.propTypes = {
    next: PropTypes.func,
    previous: PropTypes.func,
};

export default CustomButtonGroup;