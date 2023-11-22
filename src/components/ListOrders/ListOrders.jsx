import React, { useEffect, useState } from "react";
import styles from "./ListOrders.module.css";
import axios from "axios";
import Preloader from "../Preloader/Preloader";
import { URL } from "../../variables";
import Button from "../../components/Button/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../stores/cartProducts/action";
import { useNavigate } from "react-router-dom";

/* eslint-disable */
const ListOrders = () => {
    const [listOrders, setListOrders] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        setErrorMessage(null);
        if (token) {
            axios
                .post(
                    `${URL}userOrders`,
                    { token: token },
                    {
                        headers: {
                            Authorization: token,
                        },
                    }
                )
                .then((response) => {
                    setListOrders(response.data.orders);
                    setIsLoading(false);
                })
                .catch((error) => {
                    setErrorMessage(error.message);
                    setIsLoading(false);
                });
        }
    }, [token]);

    const handleAdding = (id) => {
        navigate(`/products/${id}`, { state: { fromComponent: 'orders' }})
    }

    const addOrderToCart = (order) => {
        const orderItems = order.goods;
        orderItems.map((orderItem) => {
            dispatch(addToCart(orderItem));
        });
    };

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
                                        Order Date: {order.orderDate}
                                    </span>
                                    <span className={styles.orderStatus}>
                                        Status:
                                        {order.isOpen ? "Open" : "Close"}
                                    </span>
                                    <div className={styles.orderValue}>
                                        Total Value: ${" "}
                                        {order.totalValue.toFixed(2)}
                                    </div>
                                    <Button
                                        type="button"
                                        text="Order again"
                                        style={{
                                            width: "100%",
                                            padding: "16px 0",
                                            margin: "10px auto",
                                            color: "var(--black-color)",
                                            backgroundColor:
                                                "var(--separator-line)",
                                        }}
                                        onClick={() => {
                                            addOrderToCart(order);
                                        }}
                                    />
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
                                                <Button
                                                    onClick={() => handleAdding(product._id)}
                                                    type="button"
                                                    text="Add Review"
                                                    style={{
                                                        width: "100px",
                                                        padding: "10px 10px",
                                                        margin: "5px auto",
                                                        color: "var(--black-color)",
                                                        backgroundColor:
                                                            "var(--separator-line)",
                                                    }}
                                                />
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
