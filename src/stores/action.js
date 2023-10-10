export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREMENT_ITEM_QUANTITY = "INCREMENT_ITEM_QUANTITY";
export const DECREMENT_ITEM_QUANTITY = "DECREMENT_ITEM_QUANTITY";

export const addToCart = (item) => ({
    type: ADD_TO_CART,
    payload: item,
});

export const removeFromCart = (id, selectedSize) => ({
    type: REMOVE_FROM_CART,
    payload: { id, selectedSize },
});
