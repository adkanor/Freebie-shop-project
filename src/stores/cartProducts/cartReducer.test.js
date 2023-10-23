import cartReducer from "./cartReducer";
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREMENT_ITEM_QUANTITY,
    DECREMENT_ITEM_QUANTITY,
    CLEAR_CART,
} from "./action";
import {
    calculateDiscount,
    calculateAmountOfDiscount,
    calculateFinalTotal,
    updateLocalStorage,
} from "./cartReducer";

describe("Cart Reducer", () => {
    it("should add an item to the cart", () => {
        const initialState = {
            cartItems: [],
            cartTotalAmount: 0,
            cartQuantity: 0,
        };

        const newItem = {
            _id: 1,
            selectedSize: "M",
            selectedAmount: 2,
            final_price: 20,
        };

        const action = {
            type: ADD_TO_CART,
            payload: newItem,
        };

        const newState = cartReducer(initialState, action);

        expect(newState.cartItems).toContain(newItem);
        expect(newState.cartTotalAmount).toBe(40);
        expect(newState.cartQuantity).toBe(2);
    });

    it("should remove an item from the cart", () => {
        const initialState = {
            cartItems: [
                {
                    _id: 1,
                    selectedSize: "M",
                    selectedAmount: 2,
                    final_price: 20,
                },
            ],
            cartTotalAmount: 40,
            cartQuantity: 2,
        };

        const itemToRemove = {
            id: 1,
            selectedSize: "M",
        };

        const action = {
            type: REMOVE_FROM_CART,
            payload: itemToRemove,
        };

        const newState = cartReducer(initialState, action);

        expect(newState.cartItems).not.toContainEqual(itemToRemove);
        expect(newState.cartTotalAmount).toBe(0);
        expect(newState.cartQuantity).toBe(0);
    });
    it("should clear the cart", () => {
        const initialState = {
            cartItems: [
                {
                    _id: "1",
                    selectedSize: "M",
                    selectedAmount: 2,
                    final_price: 10,
                    sizes: [
                        { size: "S", count: 5 },
                        { size: "M", count: 10 },
                        { size: "L", count: 8 },
                    ],
                },
                {
                    _id: "1",
                    selectedSize: "M",
                    selectedAmount: 2,
                    final_price: 10,
                    sizes: [
                        { size: "S", count: 5 },
                        { size: "M", count: 10 },
                        { size: "L", count: 8 },
                    ],
                },
            ],
            cartTotalAmount: 20,
            cartQuantity: 2,
            discount: 0,
            deliveryFee: 15,
            amountOfDiscount: 0,
            final_total: 25,
        };

        const action = {
            type: CLEAR_CART,
        };

        const updatedState = cartReducer(initialState, action);

        expect(updatedState.cartItems.length).toBe(0);

        expect(updatedState.cartTotalAmount).toBe(0);
        expect(updatedState.cartQuantity).toBe(0);
        expect(updatedState.discount).toBe(0);
        expect(updatedState.deliveryFee).toBe(initialState.deliveryFee);
        expect(updatedState.amountOfDiscount).toBe(0);
        expect(updatedState.final_total).toBe(0);
    });
    it("should return the default cart state", () => {
        const initialState = undefined;
        const action = {};

        const updatedState = cartReducer(initialState, action);

        expect(updatedState).toEqual({
            cartItems: [],
            cartTotalAmount: 0,
            cartQuantity: 0,
            discount: 0,
            deliveryFee: 15,
            amountOfDiscount: 0,
            final_total: 0,
        });
    });
    it("should increment item quantity in the cart", () => {
        const initialState = {
            cartItems: [
                {
                    _id: "1",
                    selectedSize: "M",
                    selectedAmount: 1,
                    final_price: 10,
                    sizes: [
                        { size: "S", count: 5 },
                        { size: "M", count: 10 },
                        { size: "L", count: 8 },
                    ],
                },
                {
                    _id: "1",
                    selectedSize: "M",
                    selectedAmount: 2,
                    final_price: 10,
                    sizes: [
                        { size: "S", count: 5 },
                        { size: "M", count: 10 },
                        { size: "L", count: 8 },
                    ],
                },
            ],
            cartTotalAmount: 10,
            cartQuantity: 1,
            discount: 0,
            deliveryFee: 15,
            amountOfDiscount: 0,
            final_total: 25,
        };

        const itemToIncrement = {
            _id: "1",
            selectedSize: "M",
            selectedAmount: 1,
        };

        const action = {
            type: INCREMENT_ITEM_QUANTITY,
            payload: itemToIncrement,
        };

        const updatedState = cartReducer(initialState, action);

        expect(updatedState.cartItems.length).toBe(
            initialState.cartItems.length
        );

        const updatedItem = updatedState.cartItems.find(
            (item) =>
                item._id === itemToIncrement._id &&
                item.selectedSize === itemToIncrement.selectedSize
        );
        expect(updatedItem.selectedAmount).toBe(
            initialState.cartItems.find(
                (item) =>
                    item._id === itemToIncrement._id &&
                    item.selectedSize === itemToIncrement.selectedSize
            ).selectedAmount
        );

        expect(updatedState.discount).toBe(initialState.discount);
        expect(updatedState.deliveryFee).toBe(initialState.deliveryFee);
        expect(updatedState.amountOfDiscount).toBe(
            initialState.amountOfDiscount
        );
        expect(updatedState.final_total).toBe(initialState.final_total);
    });
    it("should decrement item quantity in the cart", () => {
        const initialState = {
            cartItems: [
                {
                    _id: "1",
                    selectedSize: "M",
                    selectedAmount: 2,
                    final_price: 10,
                    sizes: [
                        { size: "S", count: 5 },
                        { size: "M", count: 10 },
                        { size: "L", count: 8 },
                    ],
                },
                {
                    _id: "1",
                    selectedSize: "M",
                    selectedAmount: 2,
                    final_price: 10,
                    sizes: [
                        { size: "S", count: 5 },
                        { size: "M", count: 10 },
                        { size: "L", count: 8 },
                    ],
                },
            ],
            cartTotalAmount: 20,
            cartQuantity: 2,
            discount: 0,
            deliveryFee: 15,
            amountOfDiscount: 0,
            final_total: 25,
        };

        const itemToDecrement = {
            _id: "1",
            selectedSize: "M",
            selectedAmount: 1,
        };

        const action = {
            type: DECREMENT_ITEM_QUANTITY,
            payload: itemToDecrement,
        };

        const updatedState = cartReducer(initialState, action);

        expect(updatedState.cartItems.length).toBe(
            initialState.cartItems.length
        );

        const updatedItem = updatedState.cartItems.find(
            (item) =>
                item._id === itemToDecrement._id &&
                item.selectedSize === itemToDecrement.selectedSize
        );
        expect(updatedItem.selectedAmount).toBe(
            initialState.cartItems.find(
                (item) =>
                    item._id === itemToDecrement._id &&
                    item.selectedSize === itemToDecrement.selectedSize
            ).selectedAmount
        );

        expect(updatedState.discount).toBe(initialState.discount);
        expect(updatedState.deliveryFee).toBe(initialState.deliveryFee);
        expect(updatedState.amountOfDiscount).toBe(
            initialState.amountOfDiscount
        );
        expect(updatedState.final_total).toBe(initialState.final_total);
    });
});
describe("Cart Helper Functions", () => {
    it("should calculate the discount correctly", () => {
        expect(calculateDiscount(1)).toBe(0);
        expect(calculateDiscount(2)).toBe(12);
        expect(calculateDiscount(3)).toBe(20);
        expect(calculateDiscount(4)).toBe(25);
        expect(calculateDiscount(5)).toBe(25);
    });

    it("should calculate the amount of discount correctly", () => {
        expect(calculateAmountOfDiscount(100, 25)).toBe(25);
        expect(calculateAmountOfDiscount(100, 0)).toBe(0);
    });

    it("should calculate the final total correctly", () => {
        expect(calculateFinalTotal(100, 15, 25)).toBe(90);
        expect(calculateFinalTotal(100, 0, 0)).toBe(100);
    });

    it("should update local storage correctly", () => {
        const cartItems = [
            {
                _id: "1",
                selectedSize: "M",
                selectedAmount: 2,
                final_price: 10,
                sizes: [
                    { size: "S", count: 5 },
                    { size: "M", count: 10 },
                    { size: "L", count: 8 },
                ],
            },
            {
                _id: "1",
                selectedSize: "M",
                selectedAmount: 2,
                final_price: 10,
                sizes: [
                    { size: "S", count: 5 },
                    { size: "M", count: 10 },
                    { size: "L", count: 8 },
                ],
            },
        ];
        const cartTotalAmount = 100;
        const cartQuantity = 5;
        const discount = 25;
        const amountOfDiscount = 25;
        const finalTotal = 90;

        updateLocalStorage(
            cartItems,
            cartTotalAmount,
            cartQuantity,
            discount,
            amountOfDiscount,
            finalTotal
        );
    });
});
