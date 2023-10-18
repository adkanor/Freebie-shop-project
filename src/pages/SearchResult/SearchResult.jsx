import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getAllProducts,
    getFilteredProducts,
} from "../../stores/searchProducts/actions";
import stylesSearch from "./SearchResult.module.css";
import { useParams } from "react-router-dom";
import styles from "../FavouritesPage/FavouritesPage.module.css";
import ClosedProductCard from "../../components/ClosedProductCard/ClosedProductCard";
import Pagination from "../../components/Pagination/Pagination";
import { useMediaQuery } from "@react-hook/media-query";

const SearchResult = () => {
    const dispatch = useDispatch();
    const allProducts = useSelector(
        (state) => state.searchProductsReducer.filteredData
    );
    const isMobile = useMediaQuery("(max-width: 1298px)");
    const PageSize = isMobile ? 6 : 9;

    const { value } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (page) => {
        setCurrentPage(page);
        console.log(value);
    };

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return allProducts.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, allProducts, PageSize]);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);
    useEffect(() => {
        dispatch(getFilteredProducts(value));
    }, [value, dispatch]);

    return (
        <div className="section">
            <h1 className={stylesSearch.searchAmount}>
                {allProducts.length} Results
            </h1>
            {Number(allProducts.length) > 0 && (
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
                totalCount={allProducts.length}
                pageSize={PageSize}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default SearchResult;
