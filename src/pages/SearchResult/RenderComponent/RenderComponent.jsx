import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import stylesSearch from "../SearchResult.module.css";
import styles from "../../FavouritesPage/FavouritesPage.module.css";
import ClosedProductCard from "../../../components/ClosedProductCard/ClosedProductCard";
import Pagination from "../../../components/Pagination/Pagination";
import { useMediaQuery } from "@react-hook/media-query";

const RenderComponent = ({ type }) => {
    const isMobile = useMediaQuery("(max-width: 1298px)");

    const PageSize = isMobile ? 6 : 9;
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return type.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, type, PageSize]);

    return (
        <>
            <h1 className={stylesSearch.searchAmount}>{type.length} Results</h1>
            {Number(type.length) > 0 && (
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
                totalCount={type.length}
                pageSize={PageSize}
                onPageChange={handlePageChange}
            />
        </>
    );
};

RenderComponent.propTypes = {
    type: PropTypes.any,
};

export default RenderComponent;
