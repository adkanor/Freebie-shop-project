import cartReducer from "./cartReducer";
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    REFRESH_CART,
    CLEAR_CART,
    DECREMENT_ITEM_QUANTITY,
} from "./action";

describe("cartReducer", () => {
    it("should handle ADD_TO_CART", () => {
        const initialState = { cartItems: [] };
        const newItem = { _id: "item1", selectedSize: "M" };
        const action = { type: ADD_TO_CART, payload: newItem };

        const newState = cartReducer(initialState, action);

        expect(newState.cartItems).toHaveLength(1);
        expect(newState.cartItems[0]).toEqual(newItem);
    });

    it("should handle REMOVE_FROM_CART", () => {
        const initialState = {
            cartItems: [{ _id: "item1", selectedSize: "M" }],
        };
        const action = {
            type: REMOVE_FROM_CART,
            payload: { id: "item1", selectedSize: "M" },
        };

        const newState = cartReducer(initialState, action);

        expect(newState.cartItems).toHaveLength(0);
    });

    it("should handle DECREMENT_ITEM_QUANTITY", () => {
        const initialState = {
            cartItems: [{ _id: "item1", selectedSize: "M", selectedAmount: 2 }],
        };
        const action = {
            type: DECREMENT_ITEM_QUANTITY,
            payload: { id: "item1", selectedSize: "M" },
        };

        const newState = cartReducer(initialState, action);

        expect(newState.cartItems[0].selectedAmount).toBe(1);
    });

    it("should not decrement below 1 in DECREMENT_ITEM_QUANTITY", () => {
        const initialState = {
            cartItems: [{ _id: "item1", selectedSize: "M", selectedAmount: 1 }],
        };
        const action = {
            type: DECREMENT_ITEM_QUANTITY,
            payload: { id: "item1", selectedSize: "M" },
        };

        const newState = cartReducer(initialState, action);

        expect(newState.cartItems[0].selectedAmount).toBe(1);
    });

    it("should handle CLEAR_CART", () => {
        const initialState = {
            cartItems: [{ _id: "item1", selectedSize: "M", selectedAmount: 1 }],
        };
        const action = { type: CLEAR_CART };

        const newState = cartReducer(initialState, action);

        expect(newState.cartItems).toHaveLength(0);
    });

    it("should handle REFRESH_CART", () => {
        const initialState = { cartItems: [] };
        const newCartItems = [
            { _id: "item1", selectedSize: "M", selectedAmount: 1 },
        ];
        const action = { type: REFRESH_CART, payload: newCartItems };

        const newState = cartReducer(initialState, action);

        expect(newState.cartItems).toEqual(newCartItems);
    });
});
