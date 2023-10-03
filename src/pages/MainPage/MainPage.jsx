import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./MainPage.module.css";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { fetchProducts } from "../../stores/action";
import Slider from "../../components/Slider/Slider";
import CommentariesSlider from "../../components/commentariesSlider/СommentariesSlider";
import BrandBox from "../../components/BrandsRow/BrandsRow";
import Filters from "../../components/Filters/Filters";
import RecommendationProducts from "../../components/RecommendationProducts/RecommendationProducts";

const MainPage = () => {
    const dispatch = useDispatch();
    const products = useSelector(
        (state) => state.getAllProductsReducer.allProducts
    );
    const firstFourProducts = products.slice(0, 4); // первые 4 карточки товара для отображения новых поступлений
    const secondFourProducts = products.slice(4, 8);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <section className="section">
            <Filters />
            <Slider />
            <BrandBox />
            <RecommendationProducts
                title={"New Arrivals"}
                arrayofProducts={firstFourProducts}
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
            </RecommendationProducts>
            <RecommendationProducts
                title={"Top Selling"}
                arrayofProducts={secondFourProducts}
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
            </RecommendationProducts>
            <div className={styles.browseContainer}>
                <div className={styles.title}>BROWSE BY DRESS STYLE</div>
                <div className={styles.gridContainer}>
                    <Link to="/casual" className={styles.gridItem}>
                        <p className={styles.label}>Casual</p>
                    </Link>
                    <Link to="/formal" className={styles.gridItem}>
                        <p className={styles.label}>Formal</p>
                    </Link>
                    <Link to="/party" className={styles.gridItem}>
                        <p className={styles.label}>Party</p>
                    </Link>
                    <Link to="/gym" className={styles.gridItem}>
                        <p className={styles.label}>Gym</p>
                    </Link>
                </div>
            </div>

            <CommentariesSlider />
        </section>
    );
};

export default MainPage;
