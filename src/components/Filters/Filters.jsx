import React from "react";
import styles from "./Filters.module.css";
import filters from "../../assets/icons/Filter/Edit.svg";
import MultiRangeSlider from "multi-range-slider-react";
import { useFormik } from "formik";
import Button from "../Button/Button";

const Filters = () => {
    const MIN_PRICE = 10;
    const MAX_PRICE = 1000;
    const sizes = ["XS", "S", "M", "L", "XL"];
    const categories = [
        "Jackets",
        "Coats",
        "Sweatshirts",
        "T-shirts",
        "Jeans",
        "Skirts",
        "Shorts and Dresses",
    ];

    const formik = useFormik({
        initialValues: {
            category: "",
            minPrice: MIN_PRICE,
            maxPrice: MAX_PRICE,
            size: "",
        },
    });

    const changePriceInput = (e) => {
        formik.setFieldValue("minPrice", e.minValue);
        formik.setFieldValue("maxPrice", e.maxValue);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Selected Category:", formik.values.category);
        console.log("Selected Size:", formik.values.size);
        console.log("Min Price:", formik.values.minPrice);
        console.log("Max Price:", formik.values.maxPrice);
    };

    return (
        <aside className={styles.filterSection}>
            <div className={styles.filterHeader}>
                <h2 className={styles.filtersName}>Filters</h2>
                <img
                    className={styles.filterIcon}
                    src={filters}
                    alt="Filter icons"
                />
            </div>
            <form onSubmit={handleSubmit}>
                <div className={styles.filterCategory}>
                    <h3 className={styles.filterTitle}>Categories</h3>
                    {categories.map((category) => (
                        <label key={category}>
                            <input
                                className={styles.radioInput}
                                type="radio"
                                name="category"
                                value={category}
                                onChange={formik.handleChange}
                                checked={formik.values.category === category}
                            />
                            {category}
                        </label>
                    ))}
                </div>
                <div className={styles.filterPrice}>
                    <h3 className={styles.filterTitle}>Price</h3>
                    <MultiRangeSlider
                        style={{
                            border: "none",
                            boxShadow: "none",
                            padding: "15px 10px",
                        }}
                        min={10}
                        max={1000}
                        minValue={MIN_PRICE}
                        maxValue={MAX_PRICE}
                        step={10}
                        barInnerColor="black"
                        onInput={(e) => {
                            changePriceInput(e);
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
                        {formik.values.minPrice}
                        <span>To: $</span>
                        {formik.values.maxPrice}
                    </p>
                </div>

                <div className={styles.filterSize}>
                    <h3 className={styles.filterTitle}>Sizes</h3>
                    {sizes.map((size) => (
                        <label key={size}>
                            <input
                                className={styles.radioInput}
                                type="radio"
                                name="size"
                                value={size}
                                onChange={formik.handleChange}
                                checked={formik.values.size === size}
                            />
                            {size}
                        </label>
                    ))}
                </div>

                <Button
                    type={"submit"}
                    text={"Apply"}
                    style={{
                        width: "100%",
                        backgroundColor: "var(--black-text)",
                        padding: "7px 0",
                        margin: "20px 0",
                    }}
                />
            </form>
        </aside>
    );
};

export default Filters;
