import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ classList, onChangeFunc, onKeyUpFunc }) => {
    const handleInputChange = (e) => {
        onChangeFunc(e);
    };

    const handleKeyUp = (e) => {
        onKeyUpFunc(e);
    };
    return (
        <label className={classList}>
            <input
                type="text"
                placeholder={"Search for products..."}
                onChange={handleInputChange}
                onKeyUp={handleKeyUp}
            />
        </label>
    );
};

SearchBar.propTypes = {
    classList: PropTypes.string.isRequired,
    onChangeFunc: PropTypes.func.isRequired,
    onKeyUpFunc: PropTypes.func.isRequired,
};

export default SearchBar;
