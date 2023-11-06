import ClosedProductCard from "../../components/ClosedProductCard/ClosedProductCard";
import AdaptiveNav from "../../components/AdaptiveNav/AdaptiveNav";
import styles from "./ProductsWithFiltersAndSorting.module.css";
import Pagination from "../../components/Pagination/Pagination";
import Sorting from "../../components/SortingBlock/Sorting";
import {useLocation} from "react-router-dom";
import {stringifyParams} from "../../utils/stringifyParams";
import filters from "../../assets/icons/Filter/Edit.svg";
import Filters from "../../components/Filters/Filters";
import {useMediaQuery} from "@react-hook/media-query";
import Button from "../../components/Button/Button";
import React, {useEffect, useState} from "react";
import {URL} from "../../urlVariable";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {areParamsEqual} from "../../utils/areParamsEqual";
import {removeEmptyStringKeys} from "../../utils/removeEmptyStringKeys";
import axios from "axios";
import getQueryParams from "../../utils/getQueryParams";
// import FiltersNew from "../../components/Filters/FiltersNew";
import {useSearchParams} from "react-router-dom";

const ProductsWithFiltersAndSorting = () => {
    const location = useLocation();
    // const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const [searchParams, setSearchParams] = useSearchParams();

    const isMobile = useMediaQuery("(max-width: 1298px)");
    const PageSize = isMobile ? 6 : 9;
    const [products, setProducts] = useState([]);
    const [filtersAreVisible, setFiltresVisible] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [filterSortParams, setFilterSortParams] = useState({});


    useEffect(() => {
        const initialStateFilter = getQueryParams(queryParams);
        console.log("---->", initialStateFilter);

        if (!areParamsEqual(initialStateFilter, filterSortParams)) {
            setFilterSortParams(initialStateFilter);
            const queryString = stringifyParams(initialStateFilter);
            axios.get(`${URL}product/?${queryString}`).then((responce) => {
                setProducts(responce.data.products);
            });
        }
    }, [filterSortParams]);

    //
    // useEffect(() => {
    //     // console.log(filterSortParams);
    //     const newobj = removeEmptyStringKeys(filterSortParams);
    //     setFilterSortParams(newobj);
    //     setSearchParams(newobj);
    //     console.log(searchParams);
    //
    // }, [filterSortParams]);

    // Function to toogle Filters
    const toogleFilters = () => {
        setFiltresVisible(true);
    };
    // Function to switch pages

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const linksObj = {
        home: "/",
    };

    return (
        <section className="section">
            <AdaptiveNav linksObj={linksObj}/>
            <div className={styles.stylePage}>
                <Filters
                    setFiltresVisible={setFiltresVisible}
                    filtersAreVisible={filtersAreVisible}
                    setFilterSortParams={setFilterSortParams}
                    filterSortParams={filterSortParams}
                />
                {/* <FiltersNew
                    setFiltresVisible={setFiltresVisible}
                    filtersAreVisible={filtersAreVisible}
                /> */}
                {products.length > 0 ? (
                    <div className={styles.styleContent}>
                        <div className={styles.styleSorting}>
                            <h2 className={styles.styleTitle}>TITLE</h2>
                            <img
                                className={styles.filterIcon}
                                src={filters}
                                alt="filter icon"
                                width="30"
                                height="30"
                                onClick={toogleFilters}
                            />
                            <Sorting
                                setFilterSortParams={setFilterSortParams}
                            />
                        </div>

                        <ul className={styles.productslist}>
                            {products.map((product) => (
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
                            totalCount={products.length}
                            pageSize={PageSize}
                            onPageChange={handlePageChange}
                        />
                    </div>
                ) : (
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
ProductsWithFiltersAndSorting.propTypes = {
    params: PropTypes.object,
};
export default ProductsWithFiltersAndSorting;
