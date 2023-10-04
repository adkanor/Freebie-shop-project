import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ClosedProductCard from "../ClosedProductCard/ClosedProductCard";

const DressStyle = () => {
    const products = useSelector(
        (state) => state.getAllProductsReducer.allProducts
    );
    const [productByStyle, setProductByStyle] = useState([]);
    // const [filteredProducts, setFilteredProducts] = useState([]);
    const { style } = useParams();

    useEffect(() => {
        const productInfo = products.filter((item) => item.style === style);
        productInfo && setProductByStyle(productInfo);
    }, [style, products]);

    return (
        <div>
            {productByStyle.map((product) => (
                <ClosedProductCard
                    key={product._id}
                    id={product._id}
                    name={product.name}
                    price={Number(product.price)}
                    imageURL={product.url_image}
                    rating={Number(product.rate)}
                    sale={Number(product.discount)}
                    salePrice={Number(product.price)}
                />
            ))}
        </div>
    );
};

export default DressStyle;
