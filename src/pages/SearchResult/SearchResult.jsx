import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addArrivalsList } from "../../stores/newArrivals/actions";
import { addTopSellingList } from "../../stores/topSelling/actions";
import RenderComponent from "../../components/RenderComponent/RenderComponent";

const SearchResult = () => {
    const { value } = useParams();

    const dispatch = useDispatch();
    const allArrivals = useSelector((state) => state.newArrivalsReducer);
    const allTopSelling = useSelector((state) => state.topSaleReducer);

    useEffect(() => {
        dispatch(addTopSellingList());
        dispatch(addArrivalsList());
    }, [dispatch]);

    return (
        <div className="section">
            {value === "new-arrivals" ? (
                <RenderComponent type={allArrivals} />
            ) : (
                <RenderComponent type={allTopSelling} />
            )}
        </div>
    );
};

export default SearchResult;
