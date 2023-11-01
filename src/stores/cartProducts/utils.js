import axios from "axios";
import { URL } from "../../urlVariable";

export const getCartItems = async () => {
    const token = localStorage.getItem("token");

    console.log("Инициализация корзині");

    if (token) {
        console.log("Щас будем запрос слать, токен есть ");

        const response = await axios.post(`${URL}getBasket`, "", {
            headers: {
                Authorization: token,
            },
        });

        if (response.data.status === 407) {
            console.log("хуйовый токен");
            const cartItems = localStorage.getItem("cartItems")
                ? JSON.parse(localStorage.getItem("cartItems"))
                : [];
            console.log(cartItems);
            return cartItems;
        } else if (localStorage.getItem("cartItems")) {
            console.log(
                "нормальный токен и мы зашли в локал щас будем делать мердж"
            );
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
            console.log(cartItems);
            return cartItems;
        } else {
            console.log("токен был норм но в локал ничего не было ");
            const cartItems = response.data.basket;
            return cartItems;
        }
    } else {
        console.log("no token");
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

// export const cartSummaryCalculate = (cartItems) => {};

// export const calculateDiscount = (quantity) => {
//     if (quantity === 1) {
//         return 0;
//     } else if (quantity === 2) {
//         return 12;
//     } else if (quantity === 3) {
//         return 20;
//     } else if (quantity >= 4) {
//         return 25;
//     } else {
//         return 0;
//     }
// };
// export const calculateAmountOfDiscount = (totalAmount, discount) => {
//     if (discount === 0) {
//         return 0;
//     }
//     return (Number(totalAmount) * Number(discount)) / 100;
// };

// export const calculateFinalTotal = (
//     totalAmount,
//     deliveryFee,
//     amountOfDiscount
// ) => {
//     return Number(totalAmount) + Number(deliveryFee) - Number(amountOfDiscount);
// };
// export const updateLocalStorage = (
//     cartItems,
//     cartTotalAmount,
//     cartQuantity,
//     discount,
//     amountOfDiscount,
//     final_total
// ) => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//     localStorage.setItem("cartTotalAmount", JSON.stringify(cartTotalAmount));
//     localStorage.setItem("cartTotalQuantity", JSON.stringify(cartQuantity));
//     localStorage.setItem("discount", JSON.stringify(discount));
//     localStorage.setItem("amountOfDiscount", JSON.stringify(amountOfDiscount));
//     localStorage.setItem("final_total", JSON.stringify(final_total));
// };
//
// const updatedTotalAmount =
// state.cartTotalAmount +
// newItem.selectedAmount * newItem.final_price;
// const updatedCartQuantity =
// state.cartQuantity + newItem.selectedAmount;
// const discount = calculateDiscount(updatedCartQuantity);
// const amountOfDiscount = calculateAmountOfDiscount(
// updatedTotalAmount,
// discount
// );
// const final_total = calculateFinalTotal(
// updatedTotalAmount,
// state.deliveryFee,
// amountOfDiscount
// );
