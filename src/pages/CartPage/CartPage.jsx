import React from "react";
import styles from "./CartPage.module.css";
import CartItem from "../../components/CartItem/CartItem.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import EmptyCartPage from "./EmptyCartPage/EmptyCartPage";
import AdaptiveNav from "../../components/AdaptiveNav/AdaptiveNav";
import CartSummary from "../../components/CartSummary/CartSummary";
import DiscountCounter from "../../components/DiscountCounter/DiscountCounter";
import { cartSummaryCalculate } from "../../stores/cartProducts/utils";
import { fetchCartItems } from "../../stores/cartProducts/action";

const CartPage = () => {
    const dispatch = useDispatch();
    const cartProducts = useSelector((state) => state.cartReducer.cartItems);
    const [cartSummary, setCartSummary] = useState({
        deliveryFee: 15,
        discount: 0,
        cartSubtotalAmount: 0,
        cartTotalQuantity: 0,
        amountOfDiscount: 0,
        finalTotal: 0,
        discountMessage: "",
    });
    useEffect(() => {
        dispatch(fetchCartItems());
    }, [dispatch]);

    useEffect(() => {
        const summary = cartSummaryCalculate(cartProducts);
        console.log(cartProducts);

        setCartSummary(summary);
        //eslint-disable-next-line
    }, [cartProducts]);

    return (
        <>
            <section className="section">
                <AdaptiveNav
                    linksObj={{
                        home: "/",
                        cart: "/cart",
                    }}
                />

                {cartProducts.length > 0 ? (
                    <>
                        <h1 className={styles.cartPageTitle}>Your cart</h1>
                        <DiscountCounter
                            discount={cartSummary.discount}
                            discountMessage={cartSummary.discountMessage}
                        />
                        <div className={styles.cartContainer}>
                            <ul className={styles.cartContent}>
                                {cartProducts.map((product) => (
                                    <CartItem
                                        id={product._id}
                                        key={`${product._id}-${product.selectedSize}`}
                                        name={product.name}
                                        final_price={Number(
                                            product.final_price
                                        )}
                                        selectedSize={product.selectedSize}
                                        selectedAmount={Number(
                                            product.selectedAmount
                                        )}
                                        imageURL={product.url_image[0]}
                                    />
                                ))}
                            </ul>
                            <CartSummary
                                discount={cartSummary.discount}
                                cartSubtotal={cartSummary.cartSubtotalAmount}
                                deliveryFee={cartSummary.deliveryFee}
                                amountOfDiscount={cartSummary.amountOfDiscount}
                                total={cartSummary.finalTotal}
                            />
                        </div>
                    </>
                ) : (
                    <EmptyCartPage />
                )}
            </section>
        </>
    );
};

export default CartPage;
