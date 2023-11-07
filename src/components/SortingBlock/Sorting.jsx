/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import style from "./Sorting.module.css";

const SortFilter = ({changeFilter, filterSortParams}) => {
    const handleSortChange = (event) => {
        const selectedValue = event.target.value;
        const objSort = {sort: selectedValue};
        changeFilter(objSort);
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
                defaultValue={filterSortParams.sort}
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
    changeFilter: PropTypes.func.isRequired,
};
export default SortFilter;
