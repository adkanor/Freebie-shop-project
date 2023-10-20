import React, { useEffect, useState } from "react";
import styles from "./ListOrders.module.css";
import axios from "axios";
import Preloader from "../Preloader/Preloader";
/* eslint-disable */
const ListOrders = () => {
    const [listOrders, setListOrders] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    // const token = localStorage.getItem("token");
    const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzAyMjAzN2I1OTczNDZiODlmNzllMCIsImlhdCI6MTY5Nzc0MzgwMiwiZXhwIjoxNjk3ODMwMjAyfQ.Sz6QnK_Yr6ol472ncke0ZNBOJfy5PVDSR1149Y_Z9M8";
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        setErrorMessage(null);
        if (token) {
            axios
                .post(
                    "https://shopcoserver-git-main-chesterfalmen.vercel.app/api/userOrders",
                    { token: token },
                    {
                        headers: {
                            Authorization: token,
                        },
                    }
                )
                .then((response) => {
                    console.log(response.data);
                    setListOrders(response.data.orders);
                    setIsLoading(false);
                })
                .catch((error) => {
                    setErrorMessage(error.message);
                    setIsLoading(false);
                });
        }
    }, [token]);
    if (isLoading) {
        return <Preloader />;
    } else if (errorMessage) {
        return (
            <div className={styles.errorMessage}>
                Error: {errorMessage}. Please try later
            </div>
        );
    }

    return (
        <>
            {listOrders.length ? (
                <div className={styles.listOrders}>
                    <h2 className={styles.listOrdersTitle}>Your Orders</h2>
                    {listOrders.map((order) => (
                        <div key={order._id} className={styles.order}>
                            <div className={styles.orderInfo}>
                                <div className={styles.orderHeader}>
                                    <span className={styles.orderID}>
                                        Order ID: <span>{order._id}</span>
                                    </span>
                                    <span className={styles.orderDate}>
                                        Order Date: 20.02.2022
                                    </span>
                                    <span className={styles.orderStatus}>
                                        Status: <span>Open</span>
                                    </span>
                                    <div className={styles.orderValue}>
                                        Total Value: $456
                                    </div>
                                </div>
                                <div className={styles.productsWrapper}>
                                    {order.goods.map((product, index) => (
                                        <div
                                            key={index}
                                            className={styles.productContainer}
                                        >
                                            <img
                                                src={product.url_image[0]}
                                                alt="Product Img"
                                                className={styles.productImg}
                                            />

                                            <p className={styles.productPrice}>
                                                ${product.price}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className={styles.errorMessage}>
                    There is no orders yet.
                </div>
            )}
        </>
    );
};

export default ListOrders;
