import React from "react";
import styles from "./CartPage.module.css";
import CartItem from "../../components/CartItem/CartItem.jsx";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import EmptyCartPage from "./EmptyCartPage/EmptyCartPage";
import AdaptiveNav from "../../components/AdaptiveNav/AdaptiveNav";
import CartSummary from "../../components/CartSummary/CartSummary";
import DiscountCounter from "../../components/DiscountCounter/DiscountCounter";

const CartPage = () => {
    const [discountMessage, setDiscountMessage] = useState("");
    const cartReducer = useSelector((state) => state.cartReducer);
    const cartProducts = cartReducer.cartItems;
    const cartSubtotalAmount = cartReducer.cartTotalAmount;
    const cartTotalQuantity = cartReducer.cartQuantity;
    const cartDiscount = cartReducer.discount;
    const amountOfDiscount = cartReducer.amountOfDiscount;
    const deliveryFee = cartReducer.deliveryFee;
    const finalTotal = cartReducer.final_total;

    useEffect(() => {
        if (cartTotalQuantity === 1) {
            setDiscountMessage("Add 1 more to unlock 12% off");
        } else if (cartTotalQuantity === 2) {
            setDiscountMessage(
                "🎉 Congratulations! You've unlocked 12% off! Add 1 more to unlock 20% off"
            );
        } else if (cartTotalQuantity === 3) {
            setDiscountMessage(
                "🎉 Congratulations! You've unlocked 20% off! Add more 1 to unlock 25% off"
            );
        } else if (cartTotalQuantity >= 4) {
            setDiscountMessage("🎉 Congratulations! You've unlocked 25% off!");
        } else {
            setDiscountMessage("");
        }
    }, [cartTotalQuantity]);

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
                            discount={cartDiscount}
                            discountMessage={discountMessage}
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
                                discount={cartDiscount}
                                cartSubtotal={cartSubtotalAmount}
                                deliveryFee={deliveryFee}
                                amountOfDiscount={amountOfDiscount}
                                total={finalTotal}
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
