/* eslint-disable */
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,

} from "./action";

const initialState =  {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount:0,
};

const cartReducer = (state = initialState, action) =>{
    let newItem;
    let existingItemIndex;
   
    switch (action.type) {
    case ADD_TO_CART:
        newItem = action.payload;
        existingItemIndex = state.cartItems.findIndex((item) => (
            item.id === newItem.id && item.selectedSize === newItem.selectedSize
        ));
        if (existingItemIndex !== -1) {
            const updatedItems = [...state.cartItems];
            updatedItems[existingItemIndex].selectedAmount += newItem.selectedAmount;
    
            return {
                ...state,
                cartItems: updatedItems,
            };
        } else {
            return {
                ...state,
                cartItems: [...state.cartItems, newItem],
            };
        }
        
    case REMOVE_FROM_CART:
        const { id, selectedSize } = action.payload; 
        const updatedCartItems = state.cartItems.filter(
            (item) => !(item._id === id && item.selectedSize === selectedSize)
        );
        return {
            ...state,
            cartItems: updatedCartItems,
        };
    default:
        return state;
    }
};

export default cartReducer;
/* eslint-disable */