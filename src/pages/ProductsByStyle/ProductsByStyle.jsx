import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import ClosedProductCard from "../../components/ClosedProductCard/ClosedProductCard";
import { fetchProductsByStyle } from "../../stores/pageWithFiltersProducts/action";
import styles from "./ProductsByStyle.module.css";
import { Link } from "react-router-dom";
import Filters from "../../components/Filters/Filters";
import Pagination from "../../components/Pagination/Pagination";
import Sorting from "../../components/SortingBlock/Sorting";
import filters from "../../assets/icons/Filter/Edit.svg";
import Button from "../../components/Button/Button";
import { useMediaQuery } from "@react-hook/media-query";
import AdaptiveNav from "../../components/AdaptiveNav/AdaptiveNav";
import { useDispatch, useSelector } from "react-redux";
const ProductsByStyle = () => {
    const isMobile = useMediaQuery("(max-width: 1298px)");
    const PageSize = isMobile ? 6 : 9;
    const dispatch = useDispatch();
    const [filtersAreVisible, setFiltresVisible] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const { style } = useParams();
    const filteredProducts = useSelector(
        (state) => state.getAllProductsByStyleReducer.filteredProducts
    );

    useEffect(() => {
        let url;
        if (style === "female" || style === "male") {
            url = `https://shopcoserver-git-main-chesterfalmen.vercel.app/api/sex/${style}`;
        } else if (style === "sale") {
            url =
                "https://shopcoserver-git-main-chesterfalmen.vercel.app/api/getSaleGoods";
        } else {
            url = `https://shopcoserver-git-main-chesterfalmen.vercel.app/api/styles/${style}`;
        }
        dispatch(fetchProductsByStyle(url));
    }, [style, dispatch]);

    // Function to setCurrentPage
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Function to calculate currentTableData
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return filteredProducts.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, filteredProducts, PageSize]);

    // Function to toogle Filters
    const toogleFilters = () => {
        setFiltresVisible(true);
    };

    return (
        <section className="section">
            {/* Navigation above page */}
            <AdaptiveNav
                linksObj={{
                    home: "/",
                    [style]: `/${style}`,
                }}
            />
            {/* Main section */}
            <div className={styles.stylePage}>
                <Filters
                    style={style}
                    setFiltresVisible={setFiltresVisible}
                    filtersAreVisible={filtersAreVisible}
                    setCurrentPage={setCurrentPage}
                />
                {filteredProducts.length > 0 ? (
                    <div className={styles.styleContent}>
                        <div className={styles.styleSorting}>
                            <h2 className={styles.styleTitle}>{style}</h2>
                            <img
                                className={styles.filterIcon}
                                src={filters}
                                alt="filter icon"
                                width="30"
                                height="30"
                                onClick={toogleFilters}
                            />
                            <Sorting />
                        </div>
                        <ul className={styles.productslist}>
                            {currentTableData.map((product) => (
                                <ClosedProductCard
                                    key={product._id}
                                    id={product._id}
                                    name={product.name}
                                    price={Number(product.price)}
                                    final_price={Number(product.final_price)}
                                    imageURL={product.url_image[0]}
                                    rating={Number(product.rating)}
                                    sale={Number(product.discount)}
                                />
                            ))}
                        </ul>
                        <Pagination
                            className="pagination-bar"
                            currentPage={currentPage}
                            totalCount={filteredProducts.length}
                            pageSize={PageSize}
                            onPageChange={handlePageChange}
                        />
                    </div>
                ) : (
                    /* Page visible if there is no products in the array */
                    <div className={styles.noProducts}>
                        <h2 className={styles.noProductsError}>
                            No products found
                        </h2>
                        <p className={styles.noProductsMessage}>
                            Sorry, there are currently no products available.
                        </p>
                        <Link className={styles.goHomeLink} to="/">
                            <Button
                                type={"text"}
                                text={"Go to main page"}
                                style={{
                                    backgroundColor:
                                        "var(--gray-text-secondary)",
                                    color: "var(--white-text)",
                                    width: "100%",
                                    padding: "15px 0",
                                }}
                            />
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductsByStyle;
