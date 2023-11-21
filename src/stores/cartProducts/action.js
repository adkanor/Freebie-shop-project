import axios from "axios";
import { URL } from "../../variables";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREMENT_ITEM_QUANTITY = "INCREMENT_ITEM_QUANTITY";
export const DECREMENT_ITEM_QUANTITY = "DECREMENT_ITEM_QUANTITY";
export const CLEAR_CART = "CLEAR_CART";
export const REFRESH_CART = "REFRESH_CART";
export const FETCH_CART_ITEMS_SUCCESS = "FETCH_CART_ITEMS_SUCCESS";
export const FETCH_CART_ITEMS_FAILURE = "FETCH_CART_ITEMS_FAILURE";

export const fetchCartItems = () => async (dispatch) => {
    try {
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
                dispatch({
                    type: FETCH_CART_ITEMS_SUCCESS,
                    payload: cartItems,
                });
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
                dispatch({
                    type: FETCH_CART_ITEMS_SUCCESS,
                    payload: cartItems,
                });
            } else {
                const cartItems = response.data.basket;
                dispatch({
                    type: FETCH_CART_ITEMS_SUCCESS,
                    payload: cartItems,
                });
            }
        } else {
            const cartItems = localStorage.getItem("cartItems")
                ? JSON.parse(localStorage.getItem("cartItems"))
                : [];
            dispatch({ type: FETCH_CART_ITEMS_SUCCESS, payload: cartItems });
        }
    } catch (error) {
        console.error("Error fetching cart items:", error);
        dispatch({ type: FETCH_CART_ITEMS_FAILURE });
    }
};

export const refreshCart = (array) => ({
    type: REFRESH_CART,
    payload: array,
});

export const addToCart = (item) => ({
    type: ADD_TO_CART,
    payload: item,
});

export const removeFromCart = (id, selectedSize) => ({
    type: REMOVE_FROM_CART,
    payload: { id, selectedSize },
});

export const incrementItemQuantity = (id, selectedSize) => ({
    type: INCREMENT_ITEM_QUANTITY,
    payload: { id, selectedSize },
});

export const decrementItemQuantity = (id, selectedSize) => ({
    type: DECREMENT_ITEM_QUANTITY,
    payload: { id, selectedSize },
});
export const clearCart = () => ({
    type: CLEAR_CART,
});
