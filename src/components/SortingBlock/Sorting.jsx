/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import style from "./Sorting.module.css";

const SortFilter = ({setFilterSortParams}) => {
    const handleSortChange = (event) => {
        const selectedValue = event.target.value;
        console.log(selectedValue);
        setFilterSortParams((prev) => ({
            ...prev,
            sort: selectedValue,
        }));
    };

    return (
        <div className={style.SortContainer}>
            <label className={style.SortContainerLabel} htmlFor="sort-select">
                Sort by:
            </label>
            <select
                className={style.SortSelect}
                id="sort-select"
                name="sortValue"
                onChange={handleSortChange}
            >
                <option value="az">A to Z</option>
                <option value="za">Z to A</option>
                <option value="minprice">Price Ascending</option>
                <option value="maxprice">Price Descending</option>
            </select>
        </div>
    );
};

SortFilter.propTypes = {
    setFilterSortParams: PropTypes.func.isRequired,
};
export default SortFilter;
