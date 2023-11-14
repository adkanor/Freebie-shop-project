import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import styles from "./SearchBar.module.css";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";
import { URL } from "../../variables";
const SearchBar = ({ classList, onChangeFunc, onKeyUpFunc, closeTabsFunc }) => {
    const [term, setTerm] = useState("");
    const [options, setOptions] = useState([]);

    const isDesktop = useMediaQuery("(min-width: 991px)");
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        onChangeFunc(e);
        const { value } = e.target;

        setTerm(value);
        if (value.length === 0) return setOptions([]);

        const currentValue = value;

        search(currentValue);
    };

    const handleKeyUp = (e) => {
        if (e.key === "Enter") {
            onKeyUpFunc(e);
            setTerm("");
            setOptions([]);
        }
    };

    const search = (value) => {
        axios
            .get(`${URL}product?page=1&limit=4&search=${value}`)
            .then((res) => {
                if (res.status === 200) {
                    return res.data;
                } else {
                    throw new Error("Error occur");
                }
            })
            .then((data) => {
                setOptions(data.products);
            })
            .catch((error) => {
                console.error("Error occur:", error);
            });
    };
    return (
        <>
            <label className={classList}>
                <input
                    type="text"
                    placeholder={"Search for products..."}
                    value={term}
                    onChange={handleInputChange}
                    onKeyUp={handleKeyUp}
                />
                {term.length !== 0 && options.length !== 0 && (
                    <ul className={styles.liveSearchList}>
                        {options.map((options) => (
                            <li
                                key={options._id}
                                onClick={() => {
                                    navigate(`/products/${options._id}`);
                                    if (!isDesktop) {
                                        closeTabsFunc();
                                    }
                                    setOptions([]);
                                    setTerm("");
                                }}
                                className={styles.liveSearchItem}
                            >
                                <div className={styles.liveSearchImage}>
                                    <img
                                        src={options.url_image[0]}
                                        alt="Product detail"
                                    />
                                </div>
                                <p className={styles.liveSearchTitle}>
                                    {options.name
                                        .split(" ")
                                        .slice(-2)
                                        .map((word) =>
                                            word
                                                .replace(/&/g, "")
                                                .replace(/;/g, "")
                                        )
                                        .join(" ")}
                                </p>
                            </li>
                        ))}
                    </ul>
                )}
            </label>
        </>
    );
};

SearchBar.propTypes = {
    classList: PropTypes.string.isRequired,
    onChangeFunc: PropTypes.func.isRequired,
    onKeyUpFunc: PropTypes.func.isRequired,
    closeTabsFunc: PropTypes.func,
};

export default SearchBar;
