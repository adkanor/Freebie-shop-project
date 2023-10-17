import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getAllProducts } from "../../stores/allProducts/actions";
import stylesSearch from "./SearchResult.module.css";
import { useParams } from "react-router-dom";
import styles from "../FavouritesPage/FavouritesPage.module.css";
import ClosedProductCard from "../../components/ClosedProductCard/ClosedProductCard";
import Pagination from "../../components/Pagination/Pagination";
import { useMediaQuery } from "@react-hook/media-query";

const SearchResult = () => {
    const dispatch = useDispatch();
    const allProducts = useSelector((state) => state.allProducts);
    const isMobile = useMediaQuery("(max-width: 1298px)");
    const PageSize = isMobile ? 6 : 9;
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const { value } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const url =
        "https://shopcoserver-git-main-chesterfalmen.vercel.app/api/goods";

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return searchResults.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, searchResults, PageSize]);

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                dispatch(getAllProducts(response.data));

                const results = allProducts.filter((item) => {
                    return (
                        item.style
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()) ||
                        item.name
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                    );
                });

                setSearchResults(results);
                setSearchTerm(value);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [url, value, searchTerm]);

    return (
        <div className="section">
            <h1 className={stylesSearch.searchAmount}>
                {searchResults.length} Results
            </h1>
            {Number(searchResults.length) > 0 && (
                <ul className={styles.favList}>
                    {currentTableData.map((fav) => (
                        <ClosedProductCard
                            id={fav._id}
                            key={fav._id}
                            name={fav.name}
                            price={fav.price}
                            rating={fav.rating}
                            imageURL={fav.url_image[0]}
                            sale={fav.sale}
                            final_price={fav.final_price}
                        />
                    ))}
                </ul>
            )}
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={searchResults.length}
                pageSize={PageSize}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default SearchResult;
