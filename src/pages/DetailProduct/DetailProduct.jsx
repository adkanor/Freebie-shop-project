import React, { useState, useEffect } from "react";
import styles from "./DetailProduct.module.css";
import stylesCard from "../../components/CartItem/CartItem.module.css";
import { useParams } from "react-router-dom";
import StarRating from "../../components/StarRating/StarRating";
import BlackButton from "../../components/Button/Button";
import { Formik, Form } from "formik";
import DetailProductSlider from "../../components/DetailProductSlider/DetailProductSlider";
import DetailProductButtonGroup from "../../components/DetailProductButtonGroup/DetailProductButtonGroup";
import { useSelector } from "react-redux";
import NoPage from "../NoPage/NoPage";
import DetaiLComentsCard from "../../components/DetaliComentsCard/DetaliComentsCard";
import AdaptiveNav from "../../components/AdaptiveNav/AdaptiveNav";

const styleBlack = {
    backgroundColor: "black",
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
};

const DetailProduct = () => {
    const products = useSelector(
        (state) => state.getAllProductsReducer.allProducts
    );
    const [info, setInfo] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const productInfo = products.find((item) => item._id === id);
        productInfo && setInfo(productInfo);
    }, [id, products]);

    const handleSubmit = (values) => {
        console.log("Data:", values);
    };

    if (!/^[0-9a-fA-F]{24}$/.test(id)) {
        return <NoPage />;
    } else if (!info) {
        return <div>Loading...</div>;
    }

    return (
        <div className={"section"}>
            <AdaptiveNav
                linksObj={{
                    home: "/",
                    [info.style]: `/${info.style}`,
                    [info.sex]: `/${info.style}/${info.sex}`,
                    [info.category]: `/${info.style}/${info.sex}/${info.category}`
                }}
            />
            <div className={styles.productWrapper}>
                <DetailProductSlider imageArr={info.url_image} />
                <Formik
                    initialValues={{
                        size: info.sizes[0].size,
                        amount: 1,
                    }}
                    onSubmit={handleSubmit}
                >
                    {({ values }) => (
                        <Form>
                            <div className={styles.productContent}>
                                <h1 className={styles.productTitle}>
                                    {info.name}
                                </h1>
                                <div className={styles.ratingContainer}>
                                    <StarRating
                                        rating={Number(info.rating)}
                                        starSize="1.6rem"
                                    />
                                    <p className={styles.ratingValue}>
                                        {info.rating}/5
                                    </p>
                                </div>
                                <div className={styles.productPriceContainer}>
                                    <h2 className={styles.currentPrice}>
                                        ${info.price}
                                    </h2>
                                    {!!Number(info.discount) && (
                                        <>
                                            <h2 className={styles.oldPrice}>
                                                ${info.price}
                                            </h2>
                                            <span className={styles.discount}>
                                                -{info.discount}%
                                            </span>
                                        </>
                                    )}
                                </div>
                                <p className={styles.productText}>
                                    {info.description}
                                </p>
                                <div className={styles.sizeFilter}>
                                    <DetailProductButtonGroup
                                        sizes={info.sizes.map(
                                            (item) => item.size
                                        )}
                                        values={values}
                                    />
                                </div>
                                <div className={styles.purchaseFilter}>
                                    <div
                                        className={stylesCard.cartQuantity}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <button
                                            type="button"
                                            className={
                                                stylesCard.quantityBtnDown
                                            }
                                        >
                                            -
                                        </button>
                                        <span
                                            className={
                                                stylesCard.quantityNumber
                                            }
                                        >
                                            {values.amount}
                                        </span>
                                        <button
                                            type="button"
                                            className={stylesCard.quantityBtnUp}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <BlackButton
                                        type="submit"
                                        text="Add to cart"
                                        style={styleBlack}
                                    />
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
            <DetaiLComentsCard idGoods={id} />
        </div>
    );
};

export default DetailProduct;
