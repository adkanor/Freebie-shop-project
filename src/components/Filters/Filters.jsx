import React from "react";
import styles from "./Filters.module.css";
import filters from "../../assets/icons/Filter/Edit.svg";
import { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";

const Filters = () => {
    const MIN_PRICE = 100;
    const MAX_PRICE = 20000;
    const [minValue, setMinValue] = useState(MIN_PRICE);
    const [maxValue, setMaxValue] = useState(MAX_PRICE);
    const handleInput = (e) => {
        setMinValue(e.minValue);
        setMaxValue(e.maxValue);
    };
    return (
        <aside className={styles.filterSection}>
            <div className={styles.filterHeader}>
                <h2 className={styles.filterTitle}>Filters</h2>
                <img
                    className={styles.filterIcon}
                    src={filters}
                    alt="Filter icons"
                />
            </div>
            <div className={styles.filterCategory}></div>
            <div className={styles.filterPrice}>
                <MultiRangeSlider
                    style={{
                        border: "none",
                        boxShadow: "none",
                        padding: "15px 10px",
                    }}
                    min={0}
                    max={50000}
                    minValue={MIN_PRICE}
                    maxValue={MAX_PRICE}
                    step={1000}
                    barInnerColor="black"
                    onInput={(e) => {
                        handleInput(e);
                    }}
                    label={false}
                    ruler={false}
                    thumbLeftColor="black"
                    thumbRightColor="black"
                    barLeftColor="white"
                    barRightColor="white"
                />
            </div>
            <p>
                Min value: {minValue} and max {maxValue}
            </p>
            <div className={styles.filterColors}></div>
            <div className={styles.filterSize}></div>
            <div className={styles.filterDressStyle}></div>
        </aside>
    );
};

export default Filters;
