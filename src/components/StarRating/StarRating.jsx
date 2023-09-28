import React from "react";
import PropTypes from "prop-types";

const StarRating = ({ rating, starSize }) => {
    const roundedRating = Math.floor(rating);
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= roundedRating) {
            stars.push(
                <span
                    style={{color: "var(--yellow-star)" }}
                    key={i}
                >
                    {"\u2605"}
                </span>
            );
        } else if (i >= roundedRating && i - 1 < rating) {
            stars.push(
                <span
                    style={{
                        position: "relative",
                        display: "inline-block",
                        zIndex: "-1",
                        color: "var(--gray-primary)",
                    }}
                >
                    <span
                        style={{
                            color: "var(--yellow-star)",
                            position: "absolute",
                            width: `${(rating - roundedRating) * 100}%`,
                            overflow: "hidden",
                        }}
                    >
                        {"\u2605"}
                    </span>
                    {"\u2606"}
                </span>
            );
        } else {
            stars.push(
                <span
                    style={{color: "var(--gray-primary)" }}
                    key={i}
                >
                    {"\u2606"}
                </span>
            );
        }
    }

    return <div style={{fontSize: `${starSize}`}}>{stars}</div>;
};

StarRating.propTypes = {
    rating: PropTypes.number.isRequired,
    starSize: PropTypes.string.isRequired,
};

export default StarRating;