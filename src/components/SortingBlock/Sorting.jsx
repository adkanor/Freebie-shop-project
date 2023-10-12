/* eslint-disable */
import React from "react";
import style from "./Sorting.module.css";
import PropTypes from "prop-types";
const SortFilter = ({ filteredProducts, setFilteredProducts }) => {
    const handleSortChange = (event) => {
        const selectedValue = event.target.value;
        let productsToSort = [...filteredProducts];
        switch (selectedValue) {
            case "az":
                productsToSort.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "za":
                productsToSort.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case "price-asc":
                productsToSort.sort((a, b) => a.final_price - b.final_price);
                break;
            case "price-desc":
                productsToSort.sort((a, b) => b.final_price - a.final_price);
                break;
            default:
                break;
        }
        setFilteredProducts(productsToSort);
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
SortFilter.propTypes = {
    filteredProducts: PropTypes.array.isRequired,
    setFilteredProducts: PropTypes.func.isRequired,
};
export default SortFilter;
