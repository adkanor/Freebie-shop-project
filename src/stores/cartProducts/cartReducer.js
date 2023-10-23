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
    discount: localStorage.getItem("discount")
        ? JSON.parse(localStorage.getItem("discount"))
        : 0,
    deliveryFee: localStorage.getItem("deliveryFee")
        ? JSON.parse(localStorage.getItem("deliveryFee"))
        : 15,
    amountOfDiscount: localStorage.getItem("amountOfDiscount")
        ? JSON.parse(localStorage.getItem("amountOfDiscount"))
        : 0,
    final_total: localStorage.getItem("final_total")
        ? JSON.parse(localStorage.getItem("final_total"))
        : 0,
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

const calculateFinalTotal = (totalAmount, deliveryFee, amountOfDiscount) => {
    return Number(totalAmount) + Number(deliveryFee) - Number(amountOfDiscount);
};

const updateLocalStorage = (
    cartItems,
    cartTotalAmount,
    cartQuantity,
    discount,
    amountOfDiscount,
    final_total
) => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("cartTotalAmount", JSON.stringify(cartTotalAmount));
    localStorage.setItem("cartTotalQuantity", JSON.stringify(cartQuantity));
    localStorage.setItem("discount", JSON.stringify(discount));
    localStorage.setItem("amountOfDiscount", JSON.stringify(amountOfDiscount));
    localStorage.setItem("final_total", JSON.stringify(final_total));
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
                toast.error("Already in cart!");
                return state;
            } else {
                // Adding to cart functionality
                const updatedTotalAmount =
                    state.cartTotalAmount +
                    newItem.selectedAmount * newItem.final_price;
                const updatedCartQuantity =
                    state.cartQuantity + newItem.selectedAmount;
                const discount = calculateDiscount(updatedCartQuantity);
                const amountOfDiscount = calculateAmountOfDiscount(
                    updatedTotalAmount,
                    discount
                );
                const final_total = calculateFinalTotal(
                    updatedTotalAmount,
                    state.deliveryFee,
                    amountOfDiscount
                );
                toast.success("New item added to cart!");
                updatedState = {
                    ...state,
                    cartItems: [...state.cartItems, newItem],
                    cartTotalAmount: updatedTotalAmount,
                    cartQuantity: updatedCartQuantity,
                    discount,
                    amountOfDiscount,
                    final_total,
                };
                updateLocalStorage(
                    updatedState.cartItems,
                    updatedState.cartTotalAmount,
                    updatedState.cartQuantity,
                    updatedState.discount,
                    updatedState.amountOfDiscount,
                    updatedState.final_total
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
            const updatedCartQuantity =
                state.cartQuantity - removedItem.selectedAmount;
            const discount = calculateDiscount(updatedCartQuantity);
            const amountOfDiscount = calculateAmountOfDiscount(
                updatedTotalAmount,
                discount
            );
            const final_total = calculateFinalTotal(
                updatedTotalAmount,
                state.deliveryFee,
                amountOfDiscount
            );
            toast.success("Delete item from the cart");
            updatedState = {
                ...state,
                cartItems: updatedCartItems,
                cartTotalAmount: updatedTotalAmount,
                cartQuantity: updatedCartQuantity,
                discount,
                amountOfDiscount,
                final_total,
            };
            updateLocalStorage(
                updatedState.cartItems,
                updatedState.cartTotalAmount,
                updatedState.cartQuantity,
                updatedState.discount,
                updatedState.amountOfDiscount,
                updatedState.final_total
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
                    const updatedCartQuantity = state.cartQuantity + 1;
                    const discount = calculateDiscount(updatedCartQuantity);
                    const amountOfDiscount = calculateAmountOfDiscount(
                        updatedTotalAmount,
                        discount
                    );
                    const final_total = calculateFinalTotal(
                        updatedTotalAmount,
                        state.deliveryFee,
                        amountOfDiscount
                    );
                    toast.success("Quantity increased by 1");
                    updatedState = {
                        ...state,
                        cartItems: updatedItems,
                        cartTotalAmount: updatedTotalAmount,
                        cartQuantity: updatedCartQuantity,
                        discount,
                        amountOfDiscount,
                        final_total,
                    };
                    updateLocalStorage(
                        updatedState.cartItems,
                        updatedState.cartTotalAmount,
                        updatedState.cartQuantity,
                        updatedState.discount,
                        updatedState.amountOfDiscount,
                        updatedState.final_total
                    );

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

                const updatedTotalAmount =
                    state.cartTotalAmount -
                    updatedItems[decrementItemIndex].final_price;
                const updatedCartQuantity = state.cartQuantity - 1;
                const discount = calculateDiscount(updatedCartQuantity);
                const amountOfDiscount = calculateAmountOfDiscount(
                    updatedTotalAmount,
                    discount
                );
                const final_total = calculateFinalTotal(
                    updatedTotalAmount,
                    state.deliveryFee,
                    amountOfDiscount
                );
                toast.success("Quantity decreased by 1");
                updatedState = {
                    ...state,
                    cartItems: updatedItems,
                    cartTotalAmount: updatedTotalAmount,
                    cartQuantity: updatedCartQuantity,
                    discount,
                    amountOfDiscount,
                    final_total,
                };
                updateLocalStorage(
                    updatedState.cartItems,
                    updatedState.cartTotalAmount,
                    updatedState.cartQuantity,
                    updatedState.discount,
                    updatedState.amountOfDiscount,
                    updatedState.final_total
                );

                return updatedState;
            }
            return state;
        case CLEAR_CART:
            localStorage.removeItem("cartItems");
            localStorage.removeItem("cartTotalAmount");
            localStorage.removeItem("cartTotalQuantity");
            localStorage.removeItem("discount");
            localStorage.removeItem("amountOfDiscount");
            localStorage.removeItem("final_total");
            updatedState = {
                ...state,
                cartItems: [],
                cartTotalAmount: 0,
                cartQuantity: 0,
                discount: 0,
                amountOfDiscount: 0,
                final_total: 0,
            };
            return updatedState;
        default:
            return state;
    }
};

export default cartReducer;

/* eslint-disable */
