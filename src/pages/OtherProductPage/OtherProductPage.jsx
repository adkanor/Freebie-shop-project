import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { paramsBrouserStr } from "../../utils/paramsObjectWidthBrowserStr";
import { stringifyParams } from "../../utils/stringifyParams";
import axios from "axios";
import { URL } from "../../variables";
import ClosedProductCard from "../../components/ClosedProductCard/ClosedProductCard";
import styles from "../FavouritesPage/FavouritesPage.module.css";
import TitleOtherPage from "../../components/TitleOtherPage/TitleOtherPage";
import PaginationNew from "../../components/Pagination/PaginationNew";
import style from "./OtherProductPage.module.css";
import Button from "../../components/Button/Button";
import Preloader from "../../components/Preloader/Preloader";

const OtherProductPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [nedRefreshParams, setNedRefreshParams] = useState(true);
    const [products, setProducts] = useState([]);
    const [searchParamsObj, setSearchParamsObj] = useState({});
    const [hasNextPage, setHasNextPage] = useState(true);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(true);

    const changePage = (object) => {
        const newObj = { ...searchParamsObj, ...object };
        setSearchParams(newObj);
        setNedRefreshParams(true);
    };

    useEffect(() => {
        if (parseInt(searchParamsObj.page) >= 3) {
            setHasNextPage(false);
        }
    }, [searchParamsObj]);

    useEffect(() => {
        const browserStr = paramsBrouserStr(searchParams);
        setSearchParamsObj(browserStr);
        if (parseInt(searchParamsObj.page) <= 3) {
            setLoading(true);
            const queryString = stringifyParams(browserStr);
            axios.get(`${URL}productOther/?${queryString}`).then((responce) => {
                setProducts(responce.data.products);
                setLoading(false);
            });
            setPage(searchParamsObj.page);
            setHasNextPage(true);
        }

        setNedRefreshParams(false);
        // eslint-disable-next-line
    }, [nedRefreshParams]);

    return (
        <div className={`section ${style.otherPageContainer}`}>
            <TitleOtherPage paramsObj={searchParamsObj} />
            {loading ? (
                <Preloader />
            ) : products.length > 0 ? (
                <>
                    <ul className={styles.favList}>
                        {products.map((fav) => (
                            <ClosedProductCard key={fav._id} info={fav} />
                        ))}
                    </ul>
                    <PaginationNew
                        pageProps={page}
                        isAble={hasNextPage}
                        changeFilter={changePage}
                    />
                </>
            ) : (
                <div className={`section ${style.noProducts}`}>
                    <h2 className={style.noProductsError}>No products found</h2>
                    <p className={style.noProductsMessage}>
                        Sorry, there are currently no products available.
                    </p>
                    <Link className={style.goHomeLink} to="/">
                        <Button
                            type={"text"}
                            text={"Go to main page"}
                            style={{
                                backgroundColor: "var(--gray-text-secondary)",
                                color: "var(--white-text)",
                                width: "100%",
                                padding: "15px 0",
                            }}
                        />
                    </Link>
                </div>
            )}
        </div>
    );
};

export default OtherProductPage;
