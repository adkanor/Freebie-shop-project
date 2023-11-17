export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREMENT_ITEM_QUANTITY = "INCREMENT_ITEM_QUANTITY";
export const DECREMENT_ITEM_QUANTITY = "DECREMENT_ITEM_QUANTITY";
export const CLEAR_CART = "CLEAR_CART";
export const REFRESH_CART = "REFRESH_CART";
export const SENDTOSERVER = "SENDTOSERVER";
export const sendToServerAfterUnmount = () => ({
    type: SENDTOSERVER,
});
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
