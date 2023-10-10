import React, { useState, useEffect } from "react";
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
import { addToCart } from "../../stores/action";
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

    const [info, setInfo] = useState(null);
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get(`https://shopcoserver-git-main-chesterfalmen.vercel.app/api/oneGoods/${id}`);
                setInfo(response.data);
            
                console.log(response);
            } catch (error) {
                console.error("Ошибка при получении данных:", error);
            }
        };
        fetchData();
    }, [id]);

    const handleSubmit = (values, { setSubmitting }) => {
        console.log("Data:", values);
        setNoAvailability(null);
        const selectedSize = values.size;
        const selectedAmount = values.amount;
        const selectedSizeObj = info.sizes.find((item) => item.size === selectedSize);
        if(selectedSizeObj && selectedSizeObj.count >= selectedAmount){
            const tryToCart = {...info, selectedAmount:selectedAmount, selectedSize:selectedSize };
            dispatch(addToCart(tryToCart));

        } else {
            const errorMessage = "Not enough items available.";
            setNoAvailability(errorMessage);
            console.log("No item is available");
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
                    [info.sex]: `/${info.style}/${info.sex}`,
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
                                {noAvailability ? <p>{noAvailability}</p>: null}
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
        </div>
    );
};

export default DetailProduct;
