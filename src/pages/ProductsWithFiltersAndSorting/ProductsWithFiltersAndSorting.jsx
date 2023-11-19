import ClosedProductCard from "../../components/ClosedProductCard/ClosedProductCard";
import AdaptiveNav from "../../components/AdaptiveNav/AdaptiveNav";
import styles from "./ProductsWithFiltersAndSorting.module.css";
import Sorting from "../../components/SortingBlock/Sorting";
import { stringifyParams } from "../../utils/stringifyParams";
import filters from "../../assets/icons/Filter/Edit.svg";
import Filters from "../../components/Filters/Filters";
import Button from "../../components/Button/Button";
import React, { useEffect, useState } from "react";
import { URL } from "../../variables";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { paramsBrouserStr } from "../../utils/paramsObjectWidthBrowserStr";
import { removeEmptyStringKeys } from "../../utils/removeEmptyStringKeys";
import PaginationNew from "../../components/Pagination/PaginationNew";
import Preloader from "../../components/Preloader/Preloader";
import { getStyleValue } from "../../utils/generateTitle";
import { getCategoryLinks } from "../../utils/generateTitle";

const ProductsWithFiltersAndSorting = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [nedRefreshParams, setNedRefreshParams] = useState(true);
    const [products, setProducts] = useState([]);
    const [filtersAreVisible, setFiltresVisible] = useState(false);
    const [filterSortParams, setFilterSortParams] = useState({});
    const [resetState, setResetState] = useState(false);
    const [hasNextPage, setHasNextPage] = useState(true);
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState("All Products");

    useEffect(() => {
        if (!resetState) {
            setLoading(true);
            const browserStr = paramsBrouserStr(searchParams);
            setFilterSortParams(browserStr);
            const queryString = stringifyParams(browserStr);
            axios.get(`${URL}product/?${queryString}`).then((responce) => {
                setHasNextPage(responce.data.hasNextPage);
                setProducts(responce.data.products);
                setLoading(false);
            });
        } else {
            resetFilter({ page: 1, limit: 9, minprice: 0, maxprice: 1000 });
            setResetState(false);
            setLoading(false);
        }

        //eslint-disable-next-line
    }, [nedRefreshParams, searchParams]);
    useEffect(() => {
        const titleValue = getStyleValue(filterSortParams);
        setTitle(titleValue);
    }, [filterSortParams]);
    const changeFilter = (obj) => {
        const filterObj = removeEmptyStringKeys(obj);
        const parametrsObj = { ...filterSortParams, ...filterObj };
        setFilterSortParams(parametrsObj);
        setSearchParams(parametrsObj);
        setNedRefreshParams(true);
    };

    const resetFilter = (obj) => {
        const parametrsObj = removeEmptyStringKeys(obj);
        setFilterSortParams({});
        setSearchParams(parametrsObj);
        setNedRefreshParams(true);
        setResetState(true);
    };

    // Function to toogle Filters
    const toogleFilters = () => {
        setFiltresVisible(true);
    };

    const linksObj = getCategoryLinks(title);

    return (
        <section className="section">
            <AdaptiveNav linksObj={linksObj} />
            <div className={styles.stylePage}>
                <Filters
                    setFiltresVisible={setFiltresVisible}
                    filtersAreVisible={filtersAreVisible}
                    filterSortParams={filterSortParams}
                    changeFilter={changeFilter}
                    resetFilter={resetFilter}
                />
                {loading ? (
                    <div className={styles.PreloaderBox}>
                        <Preloader />
                    </div>
                ) : products.length > 0 ? (
                    <div className={styles.styleContent}>
                        <div className={styles.styleSorting}>
                            <h2 className={styles.styleTitle}>{title}</h2>
                            <img
                                className={styles.filterIcon}
                                src={filters}
                                alt="filter icon"
                                width="30"
                                height="30"
                                onClick={toogleFilters}
                            />
                            <Sorting
                                changeFilter={changeFilter}
                                filterSortParams={filterSortParams}
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
                        <PaginationNew
                            pageProps={parseInt(filterSortParams.page)}
                            isAble={hasNextPage}
                            changeFilter={changeFilter}
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
