import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import styles from "./SearchBar.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";

const SearchBar = ({ classList, onChangeFunc, onKeyUpFunc, closeTabsFunc }) => {
    const [term, setTerm] = useState("");
    const [options, setOptions] = useState([]);
    const isDesktop = useMediaQuery("(min-width: 991px)");

    const navigate = useNavigate();
    const handleInputChange = (e) => {
        onChangeFunc(e);
        const { value } = e.target;

        setTerm(value);
        if (value === "") return setOptions([]);
        search(value);
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
            .post(
                "https://shopcoserver-git-main-chesterfalmen.vercel.app/api/search",
                { word: value }
            )
            .then((res) => {
                if (res.status === 200) {
                    return res.data;
                } else {
                    throw new Error("Ошибка в ответе сервера");
                }
            })
            .then((data) => {
                setOptions(data.resultArray.slice(0, 4));
            })
            .catch((error) => {
                console.error("Произошла ошибка при запросе:", error);
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
                {options.length !== 0 && (
                    <ul className={styles.liveSearchList}>
                        {options.map((options) => (
                            <li
                                key={options.id}
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
                                <Link to={`/products/${options._id}`}>
                                    <p className={styles.liveSearchTitle}>
                                        {options.name
                                            .split(" ")
                                            .slice(0, 2)
                                            .join(" ")}
                                    </p>
                                </Link>
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
