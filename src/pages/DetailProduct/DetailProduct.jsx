import React, {useState, useEffect} from "react";
import styles from "./DetailProduct.module.css";
import stylesCard from "../../components/CartItem/CartItem.module.css";
import {useParams} from "react-router-dom";
import StarRating from "../../components/StarRating/StarRating";
import BlackButton from "../../components/Button/Button";
import {Formik, Form, Field} from "formik";
import DetailProductSlider from "../../components/DetailProductSlider/DetailProductSlider";
import DetailProductButtonGroup from "../../components/DetailProductButtonGroup/DetailProductButtonGroup";
import axios from "axios";
import NoPage from "../NoPage/NoPage";
import DetaiLComentsCard from "../../components/DetaliComentsCard/DetaliComentsCard";
import AdaptiveNav from "../../components/AdaptiveNav/AdaptiveNav";
import Counter from "../../components/Counter/Counter";
import {useDispatch} from "react-redux";
import {addToCart} from "../../stores/cartProducts/action";
import {toast} from "react-toastify";
import RecommendationProducts from "../../components/RecommendationProducts/RecommendationProducts";
import Preloader from "../../components/Preloader/Preloader";
import {scrollToTop} from "../../utils/scrollToTop";

const styleBlack = {
    backgroundColor: "black",
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
};

const styleDisabled = {
    ...styleBlack,
    pointerEvents: "none",
    backgroundColor: "#dd6464",
};

const DetailProduct = () => {
    const [recomendUrl, setRecomendUrl] = useState("");
    const [info, setInfo] = useState(null);
    const {id} = useParams();
    const dispatch = useDispatch();


    const generatorUrl = (obj) => {
        const url = `page=1&limit=4&sex=${obj.sex}&category=${obj.category}`;
        setRecomendUrl(url);
    };

    useEffect(() => {
        scrollToTop();
        setInfo(null);
        axios
            .get(
                `https://shopcoserver-git-main-chesterfalmen.vercel.app/api/oneGoods/${id}`
            )
            .then((res) => {
                setInfo(res.data);
                generatorUrl(res.data);

            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);


    const handleSubmit = (values, {setSubmitting}) => {
        console.log("Data:", values);
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
            console.warn("No item is available.Choose less amount");
            toast.error("This quantity is  not available");
        }
        setSubmitting(false);
    };

    if (!/^[0-9a-fA-F]{24}$/.test(id)) {
        return <NoPage/>;
    } else if (!info) {
        return <Preloader/>;
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
                <DetailProductSlider info={info}/>
                <Formik
                    initialValues={{
                        size:
                            info.sizes.find((size) => size.count !== 0)?.size ||
                            null,
                        amount: Number(1),
                    }}
                    onSubmit={handleSubmit}
                >
                    {({values}) => (
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
                                        sizes={info.sizes}
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
                                        {values.size && (
                                            <Field name="amount">
                                                {({field, form}) => (
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
                                        )}
                                    </div>
                                    <BlackButton
                                        type="submit"
                                        text={
                                            values.size
                                                ? "Add to cart"
                                                : "No items left"
                                        }
                                        style={
                                            values.size
                                                ? styleBlack
                                                : styleDisabled
                                        }
                                    />
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
            <DetaiLComentsCard
                idGoods={id}
                details={info.details}
                FAQ={info.about}
            />
            <RecommendationProducts
                title={"You might also like"}
                urlParams={recomendUrl}
            ></RecommendationProducts>
        </div>
    );
};

export default DetailProduct;
