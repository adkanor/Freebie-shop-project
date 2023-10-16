import React, { useState, useEffect, useCallback } from "react";
import styles from "./DetailProduct.module.css";
import stylesCard from "../../components/CartItem/CartItem.module.css";
import { useParams } from "react-router-dom";
import StarRating from "../../components/StarRating/StarRating";
import BlackButton from "../../components/Button/Button";
import { Formik, Form, Field } from "formik";
import DetailProductSlider from "../../components/DetailProductSlider/DetailProductSlider";
import DetailProductButtonGroup from "../../components/DetailProductButtonGroup/DetailProductButtonGroup";
import axios from "axios";
import NoPage from "../NoPage/NoPage";
import DetaiLComentsCard from "../../components/DetaliComentsCard/DetaliComentsCard";
import AdaptiveNav from "../../components/AdaptiveNav/AdaptiveNav";
import Counter from "../../components/Counter/Counter";
import { useDispatch } from "react-redux";
import { addToCart } from "../../stores/cartProducts/action";
import { toast } from "react-toastify";
import RecommendationProducts from "../../components/RecommendationProducts/RecommendationProducts";

const styleBlack = {
    backgroundColor: "black",
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
};

const DetailProduct = () => {
    const [noAvailability, setNoAvailability] = useState(null);
    const [recommendations, setRecommendations] = useState([]);
    const [info, setInfo] = useState(null);
    const { id } = useParams();
    const dispatch = useDispatch();

    const recommendationsFilter = useCallback(
        (arr) => {
            const filterArr = arr.filter((item) => item._id !== info._id);
            setRecommendations(filterArr);
        },
        [info]
    );

    useEffect(() => {
        axios
            .get(
                `https://shopcoserver-git-main-chesterfalmen.vercel.app/api/oneGoods/${id}`
            )
            .then((res) => {
                setInfo(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);

    useEffect(() => {
        if (info) {
            axios
                .get(
                    `https://shopcoserver-git-main-chesterfalmen.vercel.app/api/category/${info.category}`
                )
                .then((response) => {
                    recommendationsFilter(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [info, recommendationsFilter]);

    const handleSubmit = (values, { setSubmitting }) => {
        console.log("Data:", values);
        setNoAvailability(null);
        const selectedSize = values.size;
        const selectedAmount = values.amount;
        const selectedSizeObj = info.sizes.find(
            (item) => item.size === selectedSize
        );
        if (selectedSizeObj && selectedSizeObj.count >= selectedAmount) {
            const tryToCart = {
                ...info,
                selectedAmount: selectedAmount,
                selectedSize: selectedSize,
            };
            dispatch(addToCart(tryToCart));
        } else {
            const errorMessage = "Not enough items available.";
            setNoAvailability(errorMessage);
            console.warn("No item is available.Choose less amount");
            toast.error("This quantity is  not available", {
                position: "bottom-left",
                autoClose: 5000,
            });
        }
        setSubmitting(false);
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
                    [info.sex]: `/${info.sex}`,
                    [info.category]: `/${info.style}/${info.sex}/${info.category}`,
                }}
            />
            <div className={styles.productWrapper}>
                <DetailProductSlider imageArr={info.url_image} />
                <Formik
                    initialValues={{
                        size: info.sizes[0].size,
                        amount: Number(1),
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
                                        ${info.final_price}
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
                                {noAvailability ? (
                                    <p>{noAvailability}</p>
                                ) : null}
                                <div className={styles.purchaseFilter}>
                                    <div
                                        className={stylesCard.cartQuantity}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Field name="amount">
                                            {({ field, form }) => (
                                                <Counter
                                                    quantity={field.value}
                                                    onDecrease={() =>
                                                        form.setFieldValue(
                                                            "amount",
                                                            field.value - 1
                                                        )
                                                    }
                                                    onIncrease={() =>
                                                        form.setFieldValue(
                                                            "amount",
                                                            field.value + 1
                                                        )
                                                    }
                                                />
                                            )}
                                        </Field>
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
            <RecommendationProducts
                title={"You might also like"}
                arrayofProducts={recommendations}
            ></RecommendationProducts>
        </div>
    );
};

export default DetailProduct;
