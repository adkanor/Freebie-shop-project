import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    getAllProducts,
    getFilteredProducts,
} from "../../stores/searchProducts/actions";
import axios from "axios";
import { useParams } from "react-router-dom";
import Preloader from "../../components/Preloader/Preloader";
import { addArrivalsList } from "../../stores/newArrivals/actions";
import { addTopSellingList } from "../../stores/topSelling/actions";
import RenderComponent from "./RenderComponent/RenderComponent";

const SearchResult = () => {
    const { value } = useParams();
    const dispatch = useDispatch();
    let allProducts = useSelector(
        (state) => state.searchProductsReducer.filteredData
    );
    const [isLoading, setIsLoading] = useState(true);
    const allArrivals = useSelector((state) => state.newArrivalsReducer);
    const allTopSelling = useSelector((state) => state.topSaleReducer);

    useEffect(() => {
        dispatch(addTopSellingList());
        dispatch(addArrivalsList());
    }, [dispatch]);

    useEffect(() => {
        axios
            .post(
                "https://shopcoserver-git-main-chesterfalmen.vercel.app/api/search",
                { word: value }
            )
            .then((res) => console.log(res));
    }, [value]);

    useEffect(() => {
        const fetchData = async () => {
            if (allProducts.length > 0) {
                try {
                    await dispatch(getFilteredProducts(value));
                    setIsLoading(false);
                } catch (error) {
                    console.error(error);
                    setIsLoading(false);
                }
            } else {
                try {
                    await dispatch(getAllProducts());
                    await dispatch(getFilteredProducts(value));
                    setIsLoading(false);
                } catch (error) {
                    console.error(error);
                    setIsLoading(false);
                }
            }
        };

        fetchData();
    }, [value, dispatch, allProducts.length]);

    if (isLoading) {
        return <Preloader />;
    }

    return (
        <div className="section">
            {value === "new-arrivals" ? (
                <RenderComponent type={allArrivals} />
            ) : value === "top-selling" ? (
                <RenderComponent type={allTopSelling} />
            ) : (
                <RenderComponent type={allProducts} />
            )}
        </div>
    );
};

export default SearchResult;
