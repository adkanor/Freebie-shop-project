import React, { useEffect, useState } from "react";
import styles from "./Filters.module.css";
import filters from "../../assets/icons/Filter/Edit.svg";
import { useFormik } from "formik";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import closeIcon from "../../assets/icons/Filter/Close.svg";
import PriceSlider from "../PriceSlider/PriceSlider";
import { scrollToTop } from "../../utils/scrollToTop";
const Filters = ({
    setFiltresVisible,
    filtersAreVisible,
    changeFilter,
    filterSortParams,
    resetFilter,
}) => {
    const [priceFilter, setPriceFilter] = useState({});

    useEffect(() => {
        setPriceFilter({ ...filterSortParams });
        //eslint-disable-next-line
    }, [filterSortParams]);

    const sizes = ["xs", "s", "m", "l", "xl"];
    const style = ["casual", "formal", "party", "gym"];
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
        initialValues: priceFilter,
        enableReinitialize: true,
    });

    let priseState = {};

    const valuePriseHandler = (obj) => {
        priseState = { ...priseState, ...obj };
    };

    const applyFilters = (e) => {
        e.preventDefault();
        const newSerchObj = { ...formik.values, ...priseState };
        setPriceFilter({ ...newSerchObj, page: 1 });
        changeFilter({ ...newSerchObj, page: 1 });
        formik.setValues(newSerchObj);
        closeFilters();
        scrollToTop();
    };
    // Function to reset filters
    const resetFiltersForm = () => {
        const resetObj = { page: 1, limit: 9, minprice: 0, maxprice: 1000 };
        resetFilter(resetObj);
        setPriceFilter({});
        setPriceFilter({});
        formik.setValues({});
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
            <form onSubmit={applyFilters} className={styles.formFilters}>
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

                <div className={styles.filterStyle}>
                    <h3 className={styles.filterTitle}>Style</h3>
                    {style.map((style) => (
                        <label className={styles.filterLabel} key={style}>
                            <input
                                className={styles.radioInput}
                                type="radio"
                                name="style"
                                value={style}
                                onChange={formik.handleChange}
                                checked={formik.values.style === style}
                            />
                            {style}
                        </label>
                    ))}
                </div>

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
                <PriceSlider
                    filterState={priceFilter}
                    valuePriseHandler={valuePriseHandler}
                />

                <div className={styles.filterSize}>
                    <h3 className={styles.filterTitle}>Sizes</h3>
                    {sizes.map((size) => (
                        <label key={size} className={styles.filterLabelSizes}>
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
    changeFilter: PropTypes.func.isRequired,
    resetFilter: PropTypes.func.isRequired,
    filterSortParams: PropTypes.object,
    nedRefreshParams: PropTypes.bool,
};

export default Filters;
