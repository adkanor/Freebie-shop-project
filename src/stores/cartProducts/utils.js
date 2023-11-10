import axios from "axios";
import { URL } from "../../variables";

export const getCartItems = async () => {
    const token = localStorage.getItem("token");
    if (token) {
        const response = await axios.post(`${URL}getBasket`, "", {
            headers: {
                Authorization: token,
            },
        });

        if (response.data.status === 407) {
            const cartItems = localStorage.getItem("cartItems")
                ? JSON.parse(localStorage.getItem("cartItems"))
                : [];
            return cartItems;
        } else if (localStorage.getItem("cartItems")) {
            const cartItemsFromLocal = JSON.parse(
                localStorage.getItem("cartItems")
            );
            const responseToMerge = await axios.post(
                `${URL}mergeBasket`,
                { basket: cartItemsFromLocal },
                {
                    headers: {
                        Authorization: token,
                    },
                }
            );
            const cartItems = responseToMerge.data.basket;
            return cartItems;
        } else {
            const cartItems = response.data.basket;
            return cartItems;
        }
    } else {
        const cartItems = localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : [];
        return cartItems;
    }
};

export const sendCartToServer = async (updatedState) => {
    const token = localStorage.getItem("token");
    const basket = { basket: updatedState };
    if (token) {
        const response = await axios.post(`${URL}refreshBasket`, basket, {
            headers: {
                Authorization: token,
            },
        });
        if (response.data.status === 200) {
            localStorage.removeItem("cartItems");
        }
        if (response.data.status === 407) {
            localStorage.setItem("cartItems", JSON.stringify(updatedState));
        }
    } else {
        localStorage.setItem("cartItems", JSON.stringify(updatedState));
    }
};
const calculateDiscount = (quantity) => {
    if (quantity === 1) {
        return 0;
    } else if (quantity === 2) {
        return 12;
    } else if (quantity === 3) {
        return 20;
    } else if (quantity >= 4) {
        return 25;
    } else {
        return 0;
    }
};
const calculateAmountOfDiscount = (totalAmount, discount) => {
    if (discount === 0) {
        return 0;
    }
    return (Number(totalAmount) * Number(discount)) / 100;
};
const calculateFinalTotal = (
    cartSubtotalAmount,
    deliveryFee,
    amountOfDiscount
) => {
    return (
        Number(cartSubtotalAmount) +
        Number(deliveryFee) -
        Number(amountOfDiscount)
    );
};
const setMessageAboutDiscount = (cartTotalQuantity) => {
    if (cartTotalQuantity === 1) {
        return "Add 1 more to unlock 12% off";
    } else if (cartTotalQuantity === 2) {
        return "🎉 Congratulations! You've unlocked 12% off! Add 1 more to unlock 20% off";
    } else if (cartTotalQuantity === 3) {
        return "🎉 Congratulations! You've unlocked 20% off! Add more 1 to unlock 25% off";
    } else if (cartTotalQuantity >= 4) {
        return "🎉 Congratulations! You've unlocked 25% off!";
    } else {
        return "";
    }
};

export const cartSummaryCalculate = (cartItems) => {
    const deliveryFee = 15;
    const cartSubtotalAmount = cartItems.reduce(
        (total, item) => total + item.final_price * item.selectedAmount,
        0
    );
    const cartTotalQuantity = cartItems.reduce(
        (total, item) => total + item.selectedAmount,
        0
    );
    const discount = calculateDiscount(cartTotalQuantity);

    const amountOfDiscount = calculateAmountOfDiscount(
        cartSubtotalAmount,
        discount
    );
    const finalTotal = calculateFinalTotal(
        cartSubtotalAmount,
        deliveryFee,
        amountOfDiscount
    );
    const discountMessage = setMessageAboutDiscount(cartTotalQuantity);
    return {
        deliveryFee,
        discount,
        cartSubtotalAmount,
        cartTotalQuantity,
        amountOfDiscount,
        finalTotal,
        discountMessage,
    };
};
