import React from "react";
import styles from "./ListOrders.module.css";
/* eslint-disable */

const ListOrders = () => {
    const fakeOrders = [
        {
            id: 1,
            date: "2023-10-18",
            value: 100.0,
            status: "pending",
            products: [
                {
                    id: 101,
                    name: "Product 1",
                    price: 25.0,
                    image: "product1.jpg",
                },
                {
                    id: 102,
                    name: "Product 2",
                    price: 30.0,
                    image: "product2.jpg",
                },
            ],
        },
        {
            id: 2,
            date: "2023-10-19",
            value: 150.0,
            status: "shipped",
            products: [
                {
                    id: 201,
                    name: "Product 3",
                    price: 40.0,
                    image: "product3.jpg",
                },
            ],
        },
        {
            id: 3,
            date: "2023-10-20",
            value: 200.0,
            status: "delivered",
            products: [
                {
                    id: 301,
                    name: "Prааааааааааааааааааааааааааааааoduct 4",
                    price: 50.0,
                    image: "product4.jpg",
                },
                {
                    id: 301,
                    name: "Produіваіваіваіваіваct 4",
                    price: 50.0,
                    image: "product4.jpg",
                },
                {
                    id: 301,
                    name: "Productіваіваіваіваіваіва 4",
                    price: 50.0,
                    image: "product4.jpg",
                },

                {
                    id: 302,
                    name: "Proіваіваіваduct 5",
                    price: 55.0,
                    image: "product5.jpg",
                },
            ],
        },
    ];
    return (
        <div className={styles.listOrders}>
            <h2 className={styles.listOrdersTitle}>Your Orders</h2>
            {fakeOrders.map((order) => (
                <div key={order.id} className={styles.order}>
                    <div className={styles.orderInfo}>
                        <div className={styles.orderHeader}>
                            <span className={styles.orderID}>
                                Order ID: {order.id}
                            </span>
                            <span className={styles.orderDate}>
                                Order Date: {order.date}
                            </span>
                            <span className={styles.orderStatus}>
                                Status:{" "}
                                <span
                                    className={
                                        order.status === "pending"
                                            ? styles.pending
                                            : order.status === "shipped"
                                            ? styles.shipped
                                            : styles.delivered
                                    }
                                >
                                    {order.status}
                                </span>
                            </span>
                            <div className={styles.orderValue}>
                                Total Value: ${order.value}
                            </div>
                        </div>
                        <div className={styles.productsWrapper}>
                            {order.products.map((product, index) => (
                                <div
                                    key={index}
                                    className={styles.productContainer}
                                >
                                    <img
                                        src={product.image}
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
    );
};

export default ListOrders;
