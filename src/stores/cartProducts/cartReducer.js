/* eslint-disable */
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREMENT_ITEM_QUANTITY,
    DECREMENT_ITEM_QUANTITY,
    CLEAR_CART,
    REFRESH_CART,
} from "./action";

import { toast } from "react-toastify";
import { getCartItems } from "./utils";
import { sendCartToServer } from "./utils";
const cart = getCartItems();
const initialState = {
    cartItems: cart,
};

const cartReducer = (state = initialState, action) => {
    let newItem;
    let existingItemIndex;
    let id;
    let selectedSize;
    let updatedState;
    const token = localStorage.getItem("token");

    if (action.payload) {
        id = action.payload.id;
        selectedSize = action.payload.selectedSize;
    }

    switch (action.type) {
        case REFRESH_CART:
            return { ...state, cartItems: action.payload };
        // Adding to cart
        case ADD_TO_CART:
            newItem = action.payload;
            existingItemIndex = state.cartItems.findIndex(
                (item) =>
                    item._id === newItem._id &&
                    item.selectedSize === newItem.selectedSize
            );
            // If already in cart
            if (existingItemIndex !== -1) {
                toast.error("Already in cart!");
                return state;
            } else {
                // Adding to cart functionality
                toast.success("New item added to cart!");
                updatedState = {
                    cartItems: [...state.cartItems, newItem],
                };
                sendCartToServer(updatedState.cartItems);

                return updatedState;
            }
        // Removing from cart
        case REMOVE_FROM_CART:
            const removedItem = state.cartItems.find(
                (item) => item._id === id && item.selectedSize === selectedSize
            );
            const updatedCartItems = state.cartItems.filter(
                (item) =>
                    !(item._id === id && item.selectedSize === selectedSize)
            );
            toast.success("Delete item from the cart");
            updatedState = {
                cartItems: updatedCartItems,
            };

            sendCartToServer(updatedState.cartItems);

            return updatedState;
        // Increment item quantity(already in cart)
        case INCREMENT_ITEM_QUANTITY:
            const incrementItemIndex = state.cartItems.findIndex(
                (item) => item._id === id && item.selectedSize === selectedSize
            );

            if (incrementItemIndex !== -1) {
                const updatedItems = [...state.cartItems];

                const selectedSizeObj = updatedItems[
                    incrementItemIndex
                ].sizes.find((size) => size.size === selectedSize);

                // Checking for item quantity is not bigger than real count of this item
                if (
                    selectedSizeObj &&
                    updatedItems[incrementItemIndex].selectedAmount + 1 <=
                        selectedSizeObj.count
                ) {
                    updatedItems[incrementItemIndex].selectedAmount += 1;

                    toast.success("Quantity increased by 1");
                    updatedState = {
                        cartItems: updatedItems,
                    };

                    sendCartToServer(updatedState.cartItems);

                    return updatedState;
                } else {
                    toast.error("Maximum available quantity");
                }
            }
            return state;

        // Decrement item for 1 in the cart
        case DECREMENT_ITEM_QUANTITY:
            const decrementItemIndex = state.cartItems.findIndex(
                (item) => item._id === id && item.selectedSize === selectedSize
            );
            if (
                decrementItemIndex !== -1 &&
                state.cartItems[decrementItemIndex].selectedAmount > 1
            ) {
                const updatedItems = [...state.cartItems];
                updatedItems[decrementItemIndex].selectedAmount -= 1;

                toast.success("Quantity decreased by 1");
                updatedState = {
                    cartItems: updatedItems,
                };
                sendCartToServer(updatedState.cartItems);

                return updatedState;
            }
            return state;
        case CLEAR_CART:
            localStorage.removeItem("cartItems");

            updatedState = {
                cartItems: [],
            };
            return updatedState;
        default:
            return state;
    }
};

export default cartReducer;
