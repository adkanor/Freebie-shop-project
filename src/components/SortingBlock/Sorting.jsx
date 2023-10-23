/* eslint-disable */
import React from "react";
import style from "./Sorting.module.css";
import { useDispatch } from "react-redux";
import { sortProducts } from "../../stores/pageWithFiltersProducts/action";
const SortFilter = ({ setCurrentPage }) => {
    const dispatch = useDispatch();
    const handleSortChange = (event) => {
        const selectedValue = event.target.value;
        dispatch(sortProducts(selectedValue));
        setCurrentPage(1);
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
                <option value="price-asc">Price Ascending</option>
                <option value="price-desc">Price Descending</option>
            </select>
        </div>
    );
};

export default SortFilter;
