// ImageMagnifier.js
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function ImageMagnifier({
    src,
    width,
    height,
    magnifierHeight = 150,
    magnifierWidth = 150,
    zoomLevel = 1.2,
}) {
    const [[x, y], setXY] = useState([0, 0]);
    const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
    const [showMagnifier, setShowMagnifier] = useState(false);

    useEffect(() => {
        const handleMouseEnter = (e) => {
            const elem = e.currentTarget;
            const { width, height } = elem.getBoundingClientRect();
            setSize([width, height]);
            setShowMagnifier(true);
        };

        const handleMouseMove = (e) => {
            const elem = e.currentTarget;
            const { top, left } = elem.getBoundingClientRect();

            const x = e.pageX - left - window.pageXOffset;
            const y = e.pageY - top - window.pageYOffset;
            setXY([x, y]);
        };

        const handleMouseLeave = () => {
            setShowMagnifier(false);
        };

        const imgElement = document.querySelector(".image-zoom-img");

        if (imgElement) {
            imgElement.addEventListener("mouseenter", handleMouseEnter);
            imgElement.addEventListener("mousemove", handleMouseMove);
            imgElement.addEventListener("mouseleave", handleMouseLeave);
        }

        return () => {
            if (imgElement) {
                imgElement.removeEventListener("mouseenter", handleMouseEnter);
                imgElement.removeEventListener("mousemove", handleMouseMove);
                imgElement.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, []);

    return (
        <div
            style={{
                position: "relative",
                height: height,
                width: width,
            }}
        >
            <>
                <img
                    className="image-zoom-img"
                    src={src}
                    style={{ height: height, width: width }}
                    alt={"img"}
                />
                <div
                    style={{
                        display: showMagnifier ? "" : "none",
                        position: "absolute",
                        pointerEvents: "none",
                        height: `${magnifierHeight}px`,
                        width: `${magnifierWidth}px`,
                        top: `${y - magnifierHeight / 2}px`,
                        left: `${x - magnifierWidth / 2}px`,
                        opacity: "1",
                        border: "1px solid lightgray",
                        backgroundColor: "white",
                        backgroundImage: `url('${src}')`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: `${imgWidth * zoomLevel}px ${
                            imgHeight * zoomLevel
                        }px`,
                        backgroundPositionX: `${
                            -x * zoomLevel + magnifierWidth / 2
                        }px`,
                        backgroundPositionY: `${
                            -y * zoomLevel + magnifierHeight / 2
                        }px`,
                    }}
                ></div>
            </>
        </div>
    );
}
ImageMagnifier.propTypes = {
    src: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    magnifierHeight: PropTypes.number,
    magnifierWidth: PropTypes.number,
    zoomLevel: PropTypes.number,
};
export default ImageMagnifier;
