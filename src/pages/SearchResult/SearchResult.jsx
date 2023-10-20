import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    getAllProducts,
    getFilteredProducts,
} from "../../stores/searchProducts/actions";
import { useParams } from "react-router-dom";

import { addArrivalsList } from "../../stores/newArrivals/actions";
import { addTopSellingList } from "../../stores/topSelling/actions";
import RenderComponent from "./RenderComponent/RenderComponent";

const SearchResult = () => {
    const { value } = useParams();
    const dispatch = useDispatch();
    let allProducts = useSelector(
        (state) => state.searchProductsReducer.filteredData
    );
    const allArrivals = useSelector((state) => state.newArrivalsReducer);
    const allTopSelling = useSelector((state) => state.topSaleReducer);

    useEffect(() => {
        dispatch(addTopSellingList());
        dispatch(addArrivalsList());
    }, [dispatch]);

    useEffect(() => {
        const fetchData = async () => {
            if (allProducts.length > 0) {
                await dispatch(getFilteredProducts(value));
            } else {
                await dispatch(getAllProducts());
                await dispatch(getFilteredProducts(value));
            }
        };

        fetchData();
    }, [value, dispatch, allProducts.length]);

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
