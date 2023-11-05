import React from "react";
import styles from "./Filters.module.css";
import filters from "../../assets/icons/Filter/Edit.svg";
import MultiRangeSlider from "multi-range-slider-react";
import { useFormik } from "formik";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import closeIcon from "../../assets/icons/Filter/Close.svg";
// import { toast } from "react-toastify";

const Filters = ({
    setFiltresVisible,
    filtersAreVisible,
    style,
    setFilterSortParams,
    filterSortParams,
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
        "shorts",
        "dresses",
        "joggers",
    ];

    const formik = useFormik({
        initialValues: {
            category: "",
            minprice: MIN_PRICE,
            maxprice: MAX_PRICE,
            size: "",
            sex: "",
        },
    });

    // Function for processing price changes
    const changePriceInput = (e) => {
        formik.setFieldValue("minprice", e.minValue);
        formik.setFieldValue("maxprice", e.maxValue);
    };

    // Function for applying filters
    const applyFilters = (e) => {
        const choosenValues = formik.values;
        e.preventDefault();
        const updatedValues = {
            ...filterSortParams,
            ...choosenValues,
        };
        setFilterSortParams(updatedValues);
        closeFilters();
    };

    // Function to reset filters
    const resetFiltersForm = () => {
        formik.resetForm();
        setFiltresVisible(false);
    };

    // Function to close filters
    const closeFilters = () => {
        formik.resetForm();
        setFiltresVisible(false);
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
                {style !== "female" && style !== "male" ? (
                    <div className={styles.filterSex}>
                        <h3 className={styles.filterTitle}>Gender</h3>
                        <label className={styles.filterLabel}>
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
                        <label className={styles.filterLabel}>
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
                ) : null}

                <div className={styles.filterCategory}>
                    <h3 className={styles.filterTitle}>Categories</h3>
                    {categories.map((category) => (
                        <label className={styles.filterLabel} key={category}>
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
                        {formik.values.minprice}
                        <span>To: $</span>
                        {formik.values.maxprice}
                    </p>
                </div>
                <div className={styles.filterSize}>
                    <h3 className={styles.filterTitle}>Sizes</h3>
                    {sizes.map((size) => (
                        <label key={size} className={styles.filterLabel}>
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
                <Button
                    type={"text"}
                    text={"Reset"}
                    style={{
                        color: "var(--black-text)",
                        width: "100%",
                        padding: "7px 0",
                    }}
                    onClick={resetFiltersForm}
                />
            </form>
        </aside>
    );
};

Filters.propTypes = {
    setFiltresVisible: PropTypes.func.isRequired,
    filtersAreVisible: PropTypes.bool.isRequired,
    style: PropTypes.string,
    setFilterSortParams: PropTypes.func.isRequired,
    filterSortParams: PropTypes.object.isRequired,
};

export default Filters;
