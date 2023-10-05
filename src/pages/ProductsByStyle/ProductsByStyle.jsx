import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ClosedProductCard from "../../components/ClosedProductCard/ClosedProductCard";
import axios from "axios";
import arrow from "../../assets/icons/Cart/arrow-right-bold.svg";
import styles from "./ProductsByStyle.module.css";
import { Link } from "react-router-dom";
import Filters from "../../components/Filters/Filters";
const ProductsByStyle = () => {
    const [productByStyle, setProductByStyle] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { style } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://shopcoserver-git-main-chesterfalmen.vercel.app/api/styles/${style}`,
                    {
                        params: {
                            style: `${style}`,
                        },
                    }
                );
                setProductByStyle(response.data);
                setFilteredProducts(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [style]);

    return (
        <section className="section">
            <nav className={styles.sectionNav}>
                <ul className={styles.breadcrumbsList}>
                    <li>
                        <Link to="/" className={styles.breadcrumbsLinkToHome}>
                            Home
                        </Link>
                    </li>
                    <img
                        className={styles.breadcrumbsArrow}
                        src={arrow}
                        alt="arrowLeft"
                        width="14"
                        height="14"
                    />
                    <li>
                        <Link
                            to={`/${style}`}
                            className={styles.breadcrumbsLinkToCart}
                        >
                            {style}
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className={styles.stylePage}>
                <Filters
                    productByStyle={productByStyle}
                    filteredProducts={filteredProducts}
                    setFilteredProducts={setFilteredProducts}
                />
                <div className={styles.styleContent}>
                    <div>
                        <h2 className={styles.styleTitle}>{style}</h2>
                        <p>dsfsdf</p>
                    </div>
                    <ul className={styles.productslist}>
                        {filteredProducts.map((product) => (
                            <ClosedProductCard
                                key={product._id}
                                id={product._id}
                                name={product.name}
                                price={Number(product.price)}
                                imageURL={product.url_image[0]}
                                rating={Number(product.rating)}
                                sale={Number(product.discount)}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ProductsByStyle;
