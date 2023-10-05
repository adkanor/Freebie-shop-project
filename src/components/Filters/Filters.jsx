import React from "react";
import styles from "./Filters.module.css";
import filters from "../../assets/icons/Filter/Edit.svg";
import MultiRangeSlider from "multi-range-slider-react";
import { useFormik } from "formik";
import Button from "../Button/Button";
import PropTypes from "prop-types";

const Filters = ({ productByStyle, filteredProducts, setFilteredProducts }) => {
    const MIN_PRICE = 10;
    const MAX_PRICE = 1000;
    const sizes = ["XS", "S", "M", "L", "XL"];
    const categories = [
        "jackets",
        "coats",
        "sweatshirts",
        "t-shirts",
        "jeans",
        "skirts",
        "shorts and Dresses",
    ];

    const formik = useFormik({
        initialValues: {
            category: "",
            minPrice: MIN_PRICE,
            maxPrice: MAX_PRICE,
            size: "",
            sex: "",
        },
    });

    const changePriceInput = (e) => {
        formik.setFieldValue("minPrice", e.minValue);
        formik.setFieldValue("maxPrice", e.maxValue);
    };

    const applyFilters = (e) => {
        e.preventDefault();
        console.log(formik.values.category);
        let filteredByCategories = filteredProducts;
        console.log(filteredByCategories);

        if (formik.values.category !== "") {
            filteredByCategories = filteredByCategories.filter(
                (product) => product.category === formik.values.category
            );
            console.log(filteredByCategories);
        }
        if (formik.values.size !== "") {
            filteredByCategories = filteredByCategories.filter((product) =>
                product.sizes.some(
                    (sizeObj) => sizeObj.size === formik.values.size
                )
            );
        }
        if (formik.values.sex !== "") {
            filteredByCategories = filteredByCategories.filter(
                (product) => product.sex === formik.values.sex
            );
        }
        if (formik.values.minPrice && formik.values.maxPrice) {
            filteredByCategories = filteredByCategories.filter(
                (product) =>
                    product.price >= formik.values.minPrice &&
                    product.price <= formik.values.maxPrice
            );
        }
        if (filteredByCategories.length > 0) {
            console.log(filteredByCategories);
            setFilteredProducts(filteredByCategories);
        } else {
            console.log("Нет отфильтрованных продуктов.");
        }
    };
    const resetFilters = () => {
        setFilteredProducts(productByStyle);
        formik.resetForm();
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
            <form onSubmit={applyFilters}>
                <div className={styles.filterSex}>
                    <h3 className={styles.filterTitle}>Gender</h3>

                    <label>
                        <input
                            className={styles.radioInput}
                            type="radio"
                            name="sex"
                            value="male"
                            onChange={formik.handleChange}
                            checked={formik.values.sex === "male"}
                        />
                        male
                    </label>
                    <label>
                        <input
                            className={styles.radioInput}
                            type="radio"
                            name="sex"
                            value="female"
                            onChange={formik.handleChange}
                            checked={formik.values.sex === "female"}
                        />
                        female
                    </label>
                </div>
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
            <Button
                type={"text"}
                text={"Reset"}
                style={{
                    color: "var(--black-text)",
                    width: "100%",
                    padding: "7px 0",
                }}
                onClick={resetFilters}
            />
        </aside>
    );
};
Filters.propTypes = {
    productByStyle: PropTypes.array.isRequired,
    filteredProducts: PropTypes.array.isRequired,
    setFilteredProducts: PropTypes.func.isRequired,
};

export default Filters;
