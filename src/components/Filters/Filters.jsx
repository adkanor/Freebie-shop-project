import React from "react";
import { useMemo } from "react";
import styles from "./Filters.module.css";
import filters from "../../assets/icons/Filter/Edit.svg";
import MultiRangeSlider from "multi-range-slider-react";
import { useFormik } from "formik";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import closeIcon from "../../assets/icons/Filter/Close.svg";

const Filters = ({
    productByStyle,
    filteredProducts,
    setFilteredProducts,
    setFiltresVisible,
    filtersAreVisible,
}) => {
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
    // let filteredByCategories = useMemo(
    //     () => [...filteredProducts],
    //     [filteredProducts]
    // );

    let productsNotFiltered = useMemo(
        () => [...productByStyle],
        [productByStyle]
    );

    const formik = useFormik({
        initialValues: {
            category: "",
            minPrice: MIN_PRICE,
            maxPrice: MAX_PRICE,
            size: "",
            sex: "",
        },
    });

    // Function for processing price changes
    const changePriceInput = (e) => {
        formik.setFieldValue("minPrice", e.minValue);
        formik.setFieldValue("maxPrice", e.maxValue);
    };

    // Function for applying filters
    const applyFilters = (e) => {
        e.preventDefault();
        let filteredProductsCopy = [...productsNotFiltered];

        console.log(filteredProductsCopy);
        if (formik.values.category !== "") {
            filteredProductsCopy = filteredProductsCopy.filter(
                (product) => product.category === formik.values.category
            );
        }
        if (formik.values.size !== "") {
            filteredProductsCopy = filteredProductsCopy.filter((product) =>
                product.sizes.some(
                    (sizeObj) => sizeObj.size === formik.values.size
                )
            );
        }
        if (formik.values.sex !== "") {
            filteredProductsCopy = filteredProductsCopy.filter(
                (product) => product.sex === formik.values.sex
            );
        }
        if (formik.values.minPrice && formik.values.maxPrice) {
            filteredProductsCopy = filteredProductsCopy.filter(
                (product) =>
                    product.price >= formik.values.minPrice &&
                    product.price <= formik.values.maxPrice
            );
        }
        if (filteredProductsCopy.length > 0) {
            console.log(filteredProductsCopy);
            setFilteredProducts(filteredProductsCopy);
        } else {
            console.log("Нет отфильтрованных продуктов.");
        }
    };

    // Function to reset filters
    const resetFilters = () => {
        setFilteredProducts(productsNotFiltered);
        formik.resetForm();
    };

    // Function to close filters
    const closeFilters = () => {
        setFiltresVisible(false);
        console.log(filtersAreVisible);
    };

    return (
        <aside
            className={` ${
                filtersAreVisible
                    ? styles.filterSection
                    : styles.hiddenfilterSection
            }`}
        >
            <div className={styles.filterHeader}>
                <h2 className={styles.filtersName}>Filters</h2>
                <img
                    className={styles.filterIcon}
                    src={filters}
                    alt="Filter icons"
                />
                <img
                    className={styles.filterToClose}
                    src={closeIcon}
                    alt="Filter icons"
                    onClick={closeFilters}
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
                    onClick={closeFilters}
                />
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
            </form>
        </aside>
    );
};

Filters.propTypes = {
    productByStyle: PropTypes.array.isRequired,
    filteredProducts: PropTypes.array.isRequired,
    setFilteredProducts: PropTypes.func.isRequired,
    setFiltresVisible: PropTypes.func.isRequired,
    filtersAreVisible: PropTypes.bool.isRequired,
};

export default Filters;
