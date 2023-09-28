import React from "react";
import PropTypes from "prop-types";

const StarRating = ({ rating, starSizePx }) => {
    const roundedRating = Math.floor(rating);
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= roundedRating) {
            stars.push(
                <span
                    style={{color: "gold" }}
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
                        color: "#dbdbdb",
                    }}
                >
                    <span
                        style={{
                            color: "gold",
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
                    style={{color: "#dbdbdb" }}
                    key={i}
                >
                    {"\u2606"}
                </span>
            );
        }
    }

    return <div style={{fontSize: `${starSizePx}px`}}>{stars}</div>;
};

StarRating.propTypes = {
    rating: PropTypes.number.isRequired,
    starSizePx: PropTypes.number.isRequired,
};

StarRating.propTypes.rating = PropTypes.range(0, 5);

export default StarRating;
