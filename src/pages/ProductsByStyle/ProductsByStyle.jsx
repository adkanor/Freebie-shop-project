import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import ClosedProductCard from "../../components/ClosedProductCard/ClosedProductCard";
import axios from "axios";
import arrow from "../../assets/icons/Cart/arrow-right-bold.svg";
import styles from "./ProductsByStyle.module.css";
import { Link } from "react-router-dom";
import Filters from "../../components/Filters/Filters";
import Pagination from "../../components/Pagination/Pagination";
import Sorting from "../../components/SortingBlock/Sorting";
import filters from "../../assets/icons/Filter/Edit.svg";
import Button from "../../components/Button/Button";
let PageSize = 9; // тут можно менять количество отображаемих на странице карточек (по дефолту 9)

const ProductsByStyle = () => {
    const [productByStyle, setProductByStyle] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filtersAreVisible, setFiltresVisible] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const { style } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://shopcoserver-git-main-chesterfalmen.vercel.app/api/styles/${style}`,
                    {
                        params: {
                            style: `${style}`,
                        },
                    }
                );
                setProductByStyle(response.data);
                setFilteredProducts(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [style]);

    // Function to setCurrentPage
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Function to calculate currentTableData
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return filteredProducts.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, filteredProducts]);

    // Function to toogle Filters
    const toogleFilters = () => {
        setFiltresVisible(true);
    };

    return (
        <section className="section">
            {/* Navigation above page */}
            <nav className={styles.sectionNav}>
                <ul className={styles.breadcrumbsList}>
                    <li>
                        <Link to="/" className={styles.breadcrumbsLinkToHome}>
                            Home
                        </Link>
                    </li>
                    <img
                        className={styles.breadcrumbsArrow}
                        src={arrow}
                        alt="arrow to left in navigation"
                        width="14"
                        height="14"
                    />
                    <li>
                        <Link
                            to={`/${style}`}
                            className={styles.breadcrumbsLinkToCart}
                        >
                            {style}
                        </Link>
                    </li>
                </ul>
            </nav>
            {/* Main section */}
            <div className={styles.stylePage}>
                <Filters
                    setFiltresVisible={setFiltresVisible}
                    filtersAreVisible={filtersAreVisible}
                    productByStyle={productByStyle}
                    setFilteredProducts={setFilteredProducts}
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
                            <Sorting
                                filteredProducts={filteredProducts}
                                setFilteredProducts={setFilteredProducts}
                            />
                        </div>
                        <ul className={styles.productslist}>
                            {currentTableData.map((product) => (
                                <ClosedProductCard
                                    key={product._id}
                                    id={product._id}
                                    name={product.name}
                                    price={Number(product.price)}
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
