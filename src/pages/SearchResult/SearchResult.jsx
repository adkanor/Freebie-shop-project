import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSearchResult } from "../../stores/searchResult/actions";
import { useParams } from "react-router-dom";
import { addArrivalsList } from "../../stores/newArrivals/actions";
import { addTopSellingList } from "../../stores/topSelling/actions";
import RenderComponent from "../../components/RenderComponent/RenderComponent";
import Preloader from "../../components/Preloader/Preloader";

const SearchResult = () => {
    const { value } = useParams();
    const dispatch = useDispatch();
    const allArrivals = useSelector((state) => state.newArrivalsReducer);
    const allTopSelling = useSelector((state) => state.topSaleReducer);
    const [isLoading, setIsLoading] = useState(true);
    const searchResultData = useSelector((state) => state.searchResultReducer);

    useEffect(() => {
        dispatch(addTopSellingList());
        dispatch(addArrivalsList());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getSearchResult(value)).then(() => setIsLoading(false));
    }, [dispatch, value]);

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
                <RenderComponent type={searchResultData} />
            )}
        </div>
    );
};

export default SearchResult;
