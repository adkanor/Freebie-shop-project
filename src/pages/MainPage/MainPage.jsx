import React from "react";
import styles from "./MainPage.module.css";
import { Link } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import CommentariesSlider from "../../components/commentariesSlider/СommentariesSlider";
import BrandBox from "../../components/BrandsRow/BrandsRow";
const MainPage = () => {
    return (
        <section className="section">
            <Slider/>
            <BrandBox />
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
            <CommentariesSlider/>


        </section>
    );

};

export default MainPage;
