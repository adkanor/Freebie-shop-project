import React from "react";
import styles from "./MainPage.module.css";
import { Link } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import BrandBox from "../../components/BrandsRow/BrandsRow";
import CommentsSlider from "../../components/CommentsSlider/СommentsSlider";
import PropTypes from "prop-types";
import RecommendationProducts from "../../components/RecommendationProducts/RecommendationProducts";
import Button from "../../components/Button/Button";
import { scrollToTop } from "../../utils/scrollToTop";
import { URL } from "../../variables";
import { defaultParams } from "../../variables";
const MainPage = () => {
    const dressStyles = [
        {
            to: "casual",
            label: "Casual",
        },
        {
            to: "formal",
            label: "Formal",
        },
        {
            to: "party",
            label: "Party",
        },
        {
            to: "gym",
            label: "Gym",
        },
    ];

    return (
        <section className="section">
            <Slider />
            <BrandBox />
            <RecommendationProducts
                urlParams={"page=1&limit=4&sort=new"}
                title={"New Arrivals"}
            >
                <Link
                    to="/otherproduct?page=1&limit=8&sort=new"
                    onClick={scrollToTop}
                >
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
                urlParams={"page=1&limit=4&sort=topsales"}
                title={"Top Selling"}
            >
                <Link
                    to="/otherproduct?page=1&limit=8&sort=topsales"
                    onClick={scrollToTop}
                >
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
                            to={`${defaultParams}style=${style.to}`}
                            onClick={() => {
                                scrollToTop();
                            }}
                            className={styles.gridItem}
                        >
                            <p className={styles.label}>{style.label}</p>
                        </Link>
                    ))}
                </div>
            </div>
            <CommentsSlider
                title={"Our happy customers"}
                link={`${URL}getcomments/?page=1&limit=10&sort=new`}
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
    setParams: PropTypes.func,
};

export default MainPage;
