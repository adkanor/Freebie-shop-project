import React from "react";
import styles from "./DetailProduct.module.css";
import { Link } from "react-router-dom";
import stylesCartPage from "../CartPage/CartPage.module.css";
import stylesCard from "../../components/CartItem/CartItem.module.css";
// import { useParams } from "react-router-dom";
import StarRating from "../../components/StarRating/StarRating";
import BlackButton from "../../components/Button/Button";
import { Formik, Form } from "formik";
import arrow from "../../assets/icons/Cart/arrow-right-bold.svg";
import DetailProductSlider from "./DetailProductSlider/DetailProductSlider";

const style = {
    backgroundColor: "var(--gray-primary)",
    color: "black",
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
};

const styleBlack = {
    backgroundColor: "black",
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
};
const handleSubmit = (values) => {
    console.log("Отправка формы с данными:", values);
};

const DetailProduct = () => {
    // const { id } = useParams();
    // const cardToShow = data.find((item) => item.id === Number(id));
    const initialValues = {
        color: "",
        size: "",
        amount: 0,
    };

    return (
        <div className={"section"}>
            <nav className={stylesCartPage.sectionNav}>
                <ul className={stylesCartPage.breadcrumbsList}>
                    <li>
                        <Link
                            to="/"
                            className={stylesCartPage.breadcrumbsLinkToHome}
                        >
                            Home
                        </Link>
                    </li>
                    <img
                        className={stylesCartPage.breadcrumbsArrow}
                        src={arrow}
                        alt="arrowLeft"
                        width="14"
                        height="14"
                    />
                    <li>
                        <Link
                            to="/cart"
                            className={stylesCartPage.breadcrumbsLinkToCart}
                        >
                            T-shirts
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.productWrapper}>
                <DetailProductSlider />
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    {({ values }) => (
                        <Form>
                            <div className={styles.productContent}>
                                <h1 className={styles.productTitle}>
                                    One Life Graphic T-shirt
                                </h1>
                                <div className={styles.ratingContainer}>
                                    <StarRating
                                        rating={4.5}
                                        starSize="1.6rem"
                                    />
                                    <p className={styles.ratingValue}>4.5/5</p>
                                </div>
                                <div className={styles.productPriceContainer}>
                                    <h2 className={styles.currentPrice}>
                                        $260
                                    </h2>
                                    <h2 className={styles.oldPrice}>$300</h2>
                                    <span className={styles.discount}>
                                        -40%
                                    </span>
                                </div>
                                <p className={styles.productText}>
                                    This graphic t-shirt which is perfect for
                                    any occasion. Crafted from a soft and
                                    breathable fabric, it offers superior
                                    comfort and style.
                                </p>

                                <div className={styles.colorFilter}>
                                    <p className={styles.filterTitle}>
                                        Select Colors
                                    </p>
                                    <div className={styles.colors}>
                                        {/* работаю над этим */}
                                        <div className={styles.color}></div>
                                        <div className={styles.color}></div>
                                        <div className={styles.color}></div>
                                    </div>
                                </div>
                                <div className={styles.sizeFilter}>
                                    <p className={styles.filterSize}>
                                        Select Size
                                    </p>
                                    <div className={styles.size}>
                                        <BlackButton
                                            text={"Small"}
                                            style={style}
                                        />
                                        <BlackButton
                                            text={"Medium"}
                                            style={style}
                                        />
                                        <BlackButton
                                            text={"Large"}
                                            style={style}
                                        />
                                        <BlackButton
                                            text={"X-Large"}
                                            style={style}
                                        />
                                    </div>
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
                                            4
                                        </span>
                                        <button
                                            className={stylesCard.quantityBtnUp}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <BlackButton
                                        type={"submit"}
                                        text="Add to cart"
                                        style={styleBlack}
                                    />
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default DetailProduct;
