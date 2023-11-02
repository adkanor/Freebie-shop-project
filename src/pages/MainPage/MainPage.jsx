import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./MainPage.module.css";
import { Link } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import BrandBox from "../../components/BrandsRow/BrandsRow";
import CommentsSlider from "../../components/CommentsSlider/СommentsSlider";
import PropTypes from "prop-types";
import RecommendationProducts from "../../components/RecommendationProducts/RecommendationProducts";
import Button from "../../components/Button/Button";
import { addArrivalsList } from "../../stores/newArrivals/actions";
import { addTopSellingList } from "../../stores/topSelling/actions";
import { scrollToTop } from "../../utils/scrollToTop";
import { GMAILID } from "../../config";

const MainPage = () => {
    const dispatch = useDispatch();
    const newArrivals = useSelector((state) => state.newArrivalsReducer);
    const topSaleList = useSelector((state) => state.topSaleReducer);
    const dressStyles = [
        {
            to: "/casual",
            label: "Casual",
        },
        {
            to: "/formal",
            label: "Formal",
        },
        {
            to: "/party",
            label: "Party",
        },
        {
            to: "/gym",
            label: "Gym",
        },
    ];
    useEffect(() => {
        dispatch(addTopSellingList());
        dispatch(addArrivalsList());
        console.log(GMAILID);
    }, [dispatch]);

    return (
        <section className="section">
            <Slider />
            <BrandBox />
            <RecommendationProducts
                arrayofProducts={newArrivals}
                title={"New Arrivals"}
            >
                <Link to="search/new-arrivals" onClick={scrollToTop}>
                    <Button
                        text="View all"
                        style={{
                            margin: "0px auto",
                            display: "block",
                            color: "var(--black-text)",
                            width: "30%",
                            padding: "16px 0px",
                            backgroundColor: "var(--gray-secondary)",
                        }}
                        type="text"
                    />
                </Link>
            </RecommendationProducts>
            <RecommendationProducts
                title={"Top Selling"}
                arrayofProducts={topSaleList}
            >
                <Link to="search/top-selling" onClick={scrollToTop}>
                    <Button
                        text="View all"
                        style={{
                            margin: "0px auto",
                            display: "block",
                            color: "var(--black-text)",
                            width: "30%",
                            padding: "16px 0px",
                            backgroundColor: "var(--gray-secondary)",
                        }}
                        type="text"
                    />
                </Link>
            </RecommendationProducts>
            <div className={styles.browseContainer}>
                <div className={styles.title}>BROWSE BY DRESS STYLE</div>
                <div className={styles.gridContainer}>
                    {dressStyles.map((style) => (
                        <Link
                            key={style.to}
                            to={style.to}
                            onClick={scrollToTop}
                            className={styles.gridItem}
                        >
                            <p className={styles.label}>{style.label}</p>
                        </Link>
                    ))}
                </div>
            </div>
            <CommentsSlider
                title={"Our happy customers"}
                link={
                    "https://shopcoserver-git-main-chesterfalmen.vercel.app/api/getCountComments/10"
                }
            />
        </section>
    );
};

MainPage.propTypes = {
    addArrivalsList: PropTypes.func,
    addTopSelling: PropTypes.func,
    topSaleList: PropTypes.array,
    newArrivals: PropTypes.array,
    state: PropTypes.object,
};

export default MainPage;
