/* eslint-disable */
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREMENT_ITEM_QUANTITY,
    DECREMENT_ITEM_QUANTITY,
    CLEAR_CART,
} from "./action";
import { toast } from "react-toastify";

const cartItems = localStorage.getItem("cartItems");
const cartTotalAmount = localStorage.getItem("cartTotalAmount");
const cartTotalQuant = localStorage.getItem("cartTotalQuantity");
const initialState = {
    cartItems: cartItems ? JSON.parse(cartItems) : [],
    cartTotalAmount: cartTotalAmount ? JSON.parse(cartTotalAmount) : 0,
    cartQuantity: cartTotalQuant ? JSON.parse(cartTotalQuant) : 0,
};

const updateLocalStorage = (cartItems, cartTotalAmount, cartQuantity) => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("cartTotalAmount", JSON.stringify(cartTotalAmount));
    localStorage.setItem("cartTotalQuantity", JSON.stringify(cartQuantity));
};

const cartReducer = (state = initialState, action) => {
    let newItem;
    let existingItemIndex;
    let id;
    let selectedSize;
    let updatedState;

    if (action.payload) {
        id = action.payload.id;
        selectedSize = action.payload.selectedSize;
    }

    switch (action.type) {
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
                toast.error("Already in cart!", {
                    position: "bottom-left",
                    autoClose: 2500,
                });
                return state;
            } else {
                // Adding to cart functionality
                const updatedTotalAmount =
                    state.cartTotalAmount +
                    newItem.selectedAmount * newItem.final_price;
                toast.success("New item added to cart!", {
                    position: "bottom-left",
                    autoClose: 2500,
                });
                updatedState = {
                    ...state,
                    cartItems: [...state.cartItems, newItem],
                    cartTotalAmount: updatedTotalAmount,
                    cartQuantity: state.cartQuantity + newItem.selectedAmount,
                };
                updateLocalStorage(
                    updatedState.cartItems,
                    updatedState.cartTotalAmount,
                    updatedState.cartQuantity
                );

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
            const updatedTotalAmount =
                state.cartTotalAmount -
                removedItem.selectedAmount * removedItem.final_price;
            toast.success("Delete item from the cart", {
                position: "bottom-left",
                autoClose: 2500,
            });
            updatedState = {
                ...state,
                cartItems: updatedCartItems,
                cartTotalAmount: updatedTotalAmount,
                cartQuantity: state.cartQuantity - removedItem.selectedAmount,
            };
            updateLocalStorage(
                updatedState.cartItems,
                updatedState.cartTotalAmount,
                updatedState.cartQuantity
            );

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

                    const updatedTotalAmount =
                        state.cartTotalAmount +
                        updatedItems[incrementItemIndex].final_price;
                    toast.success("Quantity increased by 1", {
                        position: "bottom-left",
                        autoClose: 2500,
                    });
                    updatedState = {
                        ...state,
                        cartItems: updatedItems,
                        cartTotalAmount: updatedTotalAmount,
                        cartQuantity: state.cartQuantity + 1,
                    };
                    updateLocalStorage(
                        updatedState.cartItems,
                        updatedState.cartTotalAmount,
                        updatedState.cartQuantity
                    );

                    return updatedState;
                } else {
                    toast.error("Maximum available quantity", {
                        position: "bottom-left",
                        autoClose: 2500,
                    });
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

                const updatedTotalAmount =
                    state.cartTotalAmount -
                    updatedItems[decrementItemIndex].final_price;
                toast.success("Quantity decreased by 1", {
                    position: "bottom-left",
                    autoClose: 2500,
                });
                updatedState = {
                    ...state,
                    cartItems: updatedItems,
                    cartTotalAmount: updatedTotalAmount,
                    cartQuantity: state.cartQuantity - 1,
                };
                updateLocalStorage(
                    updatedState.cartItems,
                    updatedState.cartTotalAmount,
                    updatedState.cartQuantity
                );

                return updatedState;
            }
            return state;
        case CLEAR_CART:
            localStorage.clear();
            updatedState = {
                ...state,
                cartItems: [],
                cartTotalAmount: 0,
                cartQuantity: 0,
            };
            return updatedState;
        default:
            return state;
    }
};

export default cartReducer;

/* eslint-disable */
