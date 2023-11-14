import React, { useEffect, useState } from "react";
import styles from "../Filters/Filters.module.css";

import MultiRangeSlider from "multi-range-slider-react";
import PropTypes from "prop-types";

const PriceSlider = ({ filterState, valuePriseHandler }) => {
    const [priceTitle, setPriceTitle] = useState({});

    useEffect(() => {
        valuePriseHandler(priceTitle);
        //eslint-disable-next-line
    }, [priceTitle]);

    useEffect(() => {
        const { minprice, maxprice } = filterState;
        setPriceTitle({ ...priceTitle, minprice, maxprice });
        //eslint-disable-next-line
    }, [filterState]);

    const MemoizedMultiRangeSlider = React.memo(MultiRangeSlider);

    return (
        <div className={styles.filterPrice} data-testid="multi-range-slider">
            <h3 className={styles.filterTitle}>Price</h3>
            <MemoizedMultiRangeSlider
                onWheel={(e) => {
                    e.preventDefault();
                }}
                style={{
                    border: "none",
                    boxShadow: "none",
                    padding: "15px 10px",
                }}
                min={10}
                max={1000}
                minValue={priceTitle.minprice}
                maxValue={priceTitle.maxprice}
                step={10}
                barInnerColor="black"
                onChange={(e) => {
                    setPriceTitle({
                        minprice: e.minValue,
                        maxprice: e.maxValue,
                    });
                }}
                label={false}
                ruler={false}
                thumbLeftColor="black"
                thumbRightColor="black"
                barLeftColor="white"
                barRightColor="white"
            />
            <p className={styles.filterPriceInfo}>
                <span>From: $</span>
                {priceTitle.minprice}
                <span>To: $</span>
                {priceTitle.maxprice}
            </p>
        </div>
    );
};

PriceSlider.propTypes = {
    valuePriseHandler: PropTypes.func,
    filterState: PropTypes.object,
};

export default PriceSlider;
