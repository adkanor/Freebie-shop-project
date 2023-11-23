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

// Action creator to fetch cart items from the server
export const fetchCartItems = () => async (dispatch) => {
    console.log("Fetching");
    try {
        const token = localStorage.getItem("token");

        if (token) {
            const response = await axios.post(`${URL}getBasket`, "", {
                headers: {
                    Authorization: token,
                },
            });

            // Check if the server indicates that the user is not authenticated
            if (response.data.status === 407) {
                const cartItems = localStorage.getItem("cartItems")
                    ? JSON.parse(localStorage.getItem("cartItems"))
                    : [];
                dispatch({
                    type: FETCH_CART_ITEMS_SUCCESS,
                    payload: cartItems,
                });

                // If authenticated, merge local cart items with server cart items
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
            // If no user token, retrieve cart items from local storage
            const cartItems = localStorage.getItem("cartItems")
                ? JSON.parse(localStorage.getItem("cartItems"))
                : [];
            dispatch({ type: FETCH_CART_ITEMS_SUCCESS, payload: cartItems });
        }
    } catch (error) {
        // Handle errors when fetching cart items from the server
        console.error("Error fetching cart items:", error);
        dispatch({ type: FETCH_CART_ITEMS_FAILURE });
    }
};

// Action creator to refresh the cart with a new array of items
export const refreshCart = (array) => ({
    type: REFRESH_CART,
    payload: array,
});

// Action creator to add an item to the cart
export const addToCart = (item) => ({
    type: ADD_TO_CART,
    payload: item,
});

// Action creator to remove an item from the cart
export const removeFromCart = (id, selectedSize) => ({
    type: REMOVE_FROM_CART,
    payload: { id, selectedSize },
});

// Action creator to increment the quantity of an item in the cart
export const incrementItemQuantity = (id, selectedSize) => ({
    type: INCREMENT_ITEM_QUANTITY,
    payload: { id, selectedSize },
});

// Action creator to decrement the quantity of an item in the cart
export const decrementItemQuantity = (id, selectedSize) => ({
    type: DECREMENT_ITEM_QUANTITY,
    payload: { id, selectedSize },
});

// Action creator to clear all items from the cart
export const clearCart = () => ({
    type: CLEAR_CART,
});
