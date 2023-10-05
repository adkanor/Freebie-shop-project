import React, { useState, useEffect, useMemo } from "react";
// import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ClosedProductCard from "../../components/ClosedProductCard/ClosedProductCard";
import axios from "axios";
import arrow from "../../assets/icons/Cart/arrow-right-bold.svg";
import styles from "./ProductsByStyle.module.css";
import { Link } from "react-router-dom";
import Filters from "../../components/Filters/Filters";
import Pagination from "../../components/Pagination/Pagination";

let PageSize = 2; // тут можно менять количество отображаемих на странице карточек (по дефолту 9)

const ProductsByStyle = () => {
    const [productByStyle, setProductByStyle] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { style } = useParams();
    const [currentPage, setCurrentPage] = useState(1); 
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

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return filteredProducts.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, filteredProducts]);

    return (
        <section className="section">
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
                        alt="arrowLeft"
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

            <div className={styles.stylePage}>
                <Filters
                    productByStyle={productByStyle}
                    filteredProducts={filteredProducts}
                    setFilteredProducts={setFilteredProducts}
                />
                <div className={styles.styleContent}>
                    <div>
                        <h2 className={styles.styleTitle}>{style}</h2>
                        <p>dsfsdf</p>
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
            </div>
        </section>
    );
};

export default ProductsByStyle;
