import React, {useEffect} from "react";
import {connect} from "react-redux";
import styles from "./MainPage.module.css";
import { Link } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import BrandBox from "../../components/BrandsRow/BrandsRow";
import CommentsSlider from "../../components/CommentsSlider/СommentsSlider";
import {
    saveArrivalsListOperation,
    saveTopSellingListOperations
} from "../../stores/getArrivals_and_getTopSelling/operation/operation";
import axios from "axios";
import PropTypes from "prop-types";
import RecommendationProducts from "../../components/RecommendationProducts/RecommendationProducts";
import Button from "../../components/Button/Button";







const MainPage = ({addArrivalsList, addTopSelling, topSaleList, newArrivals}) => {
    // const [rerender, setRerender] = "off";
    // const products = useSelector(
    //     (state) => state.getAllProductsReducer.allProducts
    // );
    // const firstFourProducts = products.slice(0, 4); // первые 4 карточки товара для отображения новых поступлений
    // const secondFourProducts = products.slice(0, 4); // вторые  4 карточки товара для отображения новых поступлений

    useEffect(()=>{
        axios.get("https://shopcoserver-git-main-chesterfalmen.vercel.app/api/goods/10")
            .then(response => {
                addArrivalsList(response.data);
            })
            .catch(error => {
                console.error(error);
            });

        axios.get("https://shopcoserver-git-main-chesterfalmen.vercel.app/api/getRatingGoods/10")
            .then(response => {
                addTopSelling(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    },[addArrivalsList,addTopSelling]);

    return (
        <section className="section">
            <Slider />
            <BrandBox />
            <RecommendationProducts
                arrayofProducts={newArrivals}
                title={"New Arrivals"}
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
                arrayofProducts={topSaleList}
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

const mapStateToProps = ({ newArrivalsReducer, topSaleReducer }) => ({
    newArrivals: newArrivalsReducer,
    topSaleList: topSaleReducer
});

const mapDispatchToProps =(dispatch)=>({
    addArrivalsList:(items)=>dispatch(saveArrivalsListOperation(items)),
    addTopSelling:(items) => dispatch(saveTopSellingListOperations(items))

});

MainPage.propTypes = {
    addArrivalsList: PropTypes.func,
    addTopSelling: PropTypes.func,
    topSaleList: PropTypes.array,
    newArrivals: PropTypes.array,
    state:PropTypes.object
};


export default connect (mapStateToProps, mapDispatchToProps) (MainPage);
