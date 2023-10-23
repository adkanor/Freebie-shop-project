import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import { addArrivalsList } from "../../stores/newArrivals/actions";
import { addTopSellingList } from "../../stores/topSelling/actions";
import RenderComponent from "./RenderComponent/RenderComponent";

const SearchResult = () => {
    const { value } = useParams();
    const dispatch = useDispatch();
    const allArrivals = useSelector((state) => state.newArrivalsReducer);
    const allTopSelling = useSelector((state) => state.topSaleReducer);

    useEffect(() => {
        dispatch(addTopSellingList());
        dispatch(addArrivalsList());
    }, [dispatch]);

    const [arrayFromServer, setArrayFromServer] = useState([]);

    useEffect(() => {
        axios
            .post(
                "https://shopcoserver-git-main-chesterfalmen.vercel.app/api/search",
                { word: value }
            )
            .then((res) => {
                setArrayFromServer(res.data.resultArray);
                console.log(res.data.resultArray);
            });
    }, [value]);

    return (
        <div className="section">
            {value === "new-arrivals" ? (
                <RenderComponent type={allArrivals} />
            ) : value === "top-selling" ? (
                <RenderComponent type={allTopSelling} />
            ) : (
                <RenderComponent type={arrayFromServer} />
            )}
        </div>
    );
};

export default SearchResult;
