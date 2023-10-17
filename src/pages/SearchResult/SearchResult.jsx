import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getAllProducts,
    getFilteredProducts,
} from "../../stores/searchProducts/actions";
import { useParams } from "react-router-dom";
import RenderComponent from "./RenderComponent/RenderComponent";

const SearchResult = () => {
    const dispatch = useDispatch();
    let allProducts = useSelector(
        (state) => state.searchProductsReducer.filteredData
    );
    let allArrivals = useSelector((state) => state.newArrivalsReducer);
    let allTopSelling = useSelector((state) => state.topSaleReducer);
    const { value } = useParams();

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getFilteredProducts(value));
    }, [value, dispatch]);

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
