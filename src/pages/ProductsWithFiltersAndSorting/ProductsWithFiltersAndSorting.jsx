import ClosedProductCard from "../../components/ClosedProductCard/ClosedProductCard";
import AdaptiveNav from "../../components/AdaptiveNav/AdaptiveNav";
import styles from "./ProductsWithFiltersAndSorting.module.css";
import Pagination from "../../components/Pagination/Pagination";
import Sorting from "../../components/SortingBlock/Sorting";
import { useLocation } from "react-router-dom";
import { stringifyParams } from "../../utils/stringifyParams";
import filters from "../../assets/icons/Filter/Edit.svg";
import Filters from "../../components/Filters/Filters";
import { useMediaQuery } from "@react-hook/media-query";
import Button from "../../components/Button/Button";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { URL } from "../../urlVariable";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import { areParamsEqual } from "../../utils/areParamsEqual";
import axios from "axios";
import { clearParametre } from "../../stores/queryParametre/action";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
const ProductsWithFiltersAndSorting = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const [searchParams, setSearchParams] = useSearchParams();

    const firstQueryParametre = useSelector(
        (state) => state.queryParametreReducer
    );

    const isMobile = useMediaQuery("(max-width: 1298px)");
    const PageSize = isMobile ? 6 : 9;
    const [products, setProducts] = useState([]);
    const [filtersAreVisible, setFiltresVisible] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [filterSortParams, setFilterSortParams] = useState({});

    useEffect(() => {
        if (Object.keys(firstQueryParametre).length) {
            setFilterSortParams(firstQueryParametre);
            setSearchParams(filterSortParams);
            dispatch(clearParametre);
            console.log(searchParams);
        }
        const search = queryParams.get("search") || "";
        const sex = queryParams.get("sex") || "";
        const category = queryParams.get("category") || "";
        const style = queryParams.get("style") || "";
        const size = queryParams.get("size") || "";
        const minprice = queryParams.get("minprice") || "";
        const maxprice = queryParams.get("maxprice") || "";
        const page = queryParams.get("page") || "";
        const limit = queryParams.get("limit") || "";
        const sort = queryParams.get("sort") || "";
        const hasDiscount = queryParams.get("hasdiscount") || "";

        const initialStateFilter = {
            search,
            sex,
            category,
            style,
            size,
            minprice,
            maxprice,
            page,
            limit,
            sort,
            hasDiscount,
        };
        const queryParamsToSearch = stringifyParams(initialStateFilter);

        axios.get(`${URL}product/?${queryParamsToSearch}`).then((responce) => {
            setProducts(responce.data.products);
        });
        // else if (Object.keys(filterSortParams).length) {
        // const queryParams = stringifyParams(filterSortParams);
        //     setSearchParams(queryParams);
        //     axios.get(`${URL}product/?${queryParams}`).then((responce) => {
        //         setProducts(responce.data.products);
        //     });
        // } else {

        //     if (!areParamsEqual(initialStateFilter, filterSortParams)) {
        //         setFilterSortParams(initialStateFilter);
        //         console.log("+++++");
        //         console.log(initialStateFilter);
        //         const queryString = stringifyParams(initialStateFilter);
        //         axios.get(`${URL}product/?${queryString}`).then((responce) => {
        //             setProducts(responce.data.products);
        //         });
        //     }
        // }
    }, [filterSortParams]);

    // useEffect(() => {
    //     if (Object.keys(firstQueryParametre).length) {
    //         setFilterSortParams(firstQueryParametre);
    //         const queryParams = stringifyParams(filterSortParams);
    //         console.log(queryParams);
    //         navigate(`/allproducts/?${queryParams.toString()}`);
    //         axios.get(`${URL}product/?${queryParams}`).then((responce) => {
    //             console.log(responce.data.products);
    //             setProducts(responce.data.products);
    //         });
    //         dispatch(clearParametre);
    //     } else if (Object.keys(filterSortParams).length) {
    //         console.log("fsg");
    //         const queryParams = stringifyParams(filterSortParams);
    //         navigate(`/allproducts/?${queryParams.toString()}`);
    //         axios.get(`${URL}product/?${queryParams}`).then((responce) => {
    //             setProducts(responce.data.products);
    //         });
    //     } else {
    //         const search = queryParams.get("search") || "";
    //         const sex = queryParams.get("sex") || "";
    //         const category = queryParams.get("category") || "";
    //         const style = queryParams.get("style") || "";
    //         const size = queryParams.get("size") || "";
    //         const minprice = queryParams.get("minprice") || "";
    //         const maxprice = queryParams.get("maxprice") || "";
    //         const page = queryParams.get("page") || "";
    //         const limit = queryParams.get("limit") || "";
    //         const sort = queryParams.get("sort") || "";
    //         const hasDiscount = queryParams.get("hasdiscount") || "";

    //         const initialStateFilter = {
    //             search,
    //             sex,
    //             category,
    //             style,
    //             size,
    //             minprice,
    //             maxprice,
    //             page,
    //             limit,
    //             sort,
    //             hasDiscount,
    //         };

    //         if (!areParamsEqual(initialStateFilter, filterSortParams)) {
    //             setFilterSortParams(initialStateFilter);
    //             console.log("+++++");
    //             console.log(initialStateFilter);
    //             const queryString = stringifyParams(initialStateFilter);
    //             axios.get(`${URL}product/?${queryString}`).then((responce) => {
    //                 setProducts(responce.data.products);
    //             });
    //         }
    //     }
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

    if (firstQueryParametre.value) {
        linksObj[firstQueryParametre.value] = `/${firstQueryParametre.value}`;
    } else if (filterSortParams.style) {
        linksObj[filterSortParams.style] = `/${filterSortParams.style}`;
    }
    return (
        <section className="section">
            <AdaptiveNav linksObj={linksObj} />

            <div className={styles.stylePage}>
                <Filters
                    style={firstQueryParametre.value}
                    setFiltresVisible={setFiltresVisible}
                    filtersAreVisible={filtersAreVisible}
                    setFilterSortParams={setFilterSortParams}
                    filterSortParams={filterSortParams}
                />

                {products.length > 0 ? (
                    <div className={styles.styleContent}>
                        <div className={styles.styleSorting}>
                            <h2 className={styles.styleTitle}>
                                {firstQueryParametre.value
                                    ? firstQueryParametre.value
                                    : filterSortParams.style}
                            </h2>
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
