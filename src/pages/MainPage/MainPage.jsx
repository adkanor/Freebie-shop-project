import React from "react";
import { useSelector } from "react-redux";
import styles from "./MainPage.module.css";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Slider from "../../components/Slider/Slider";
import BrandBox from "../../components/BrandsRow/BrandsRow";
import RecommendationProducts from "../../components/RecommendationProducts/RecommendationProducts";
import CommentsSlider from "../../components/CommentsSlider/СommentsSlider";


const MainPage = () => {
    const products = useSelector(
        (state) => state.getAllProductsReducer.allProducts
    );
    const firstFourProducts = products.slice(0, 4); // первые 4 карточки товара для отображения новых поступлений
    const secondFourProducts = products.slice(0, 4); // вторые  4 карточки товара для отображения новых поступлений

    return (
        <section className="section">
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
            <CommentsSlider/>


        </section>
    );
};

export default MainPage;
