import {
  addToCart,
  removeFromCart,
  incrementItemQuantity,
  decrementItemQuantity,
  clearCart,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_ITEM_QUANTITY,
  DECREMENT_ITEM_QUANTITY,
  CLEAR_CART,
} from './action';

describe('Cart Actions', () => {
  it('should create an action to add an item to the cart', () => {
    const item = { id: 1, name: 'Sample Item', price: 10 };
    const expectedAction = {
      type: ADD_TO_CART,
      payload: item,
    };
    expect(addToCart(item)).toEqual(expectedAction);
  });

  it('should create an action to remove an item from the cart', () => {
    const id = 1;
    const selectedSize = 'M';
    const expectedAction = {
      type: REMOVE_FROM_CART,
      payload: { id, selectedSize },
    };
    expect(removeFromCart(id, selectedSize)).toEqual(expectedAction);
  });

  it('should create an action to increment item quantity in the cart', () => {
    const id = 1;
    const selectedSize = 'M';
    const expectedAction = {
      type: INCREMENT_ITEM_QUANTITY,
      payload: { id, selectedSize },
    };
    expect(incrementItemQuantity(id, selectedSize)).toEqual(expectedAction);
  });

  it('should create an action to decrement item quantity in the cart', () => {
    const id = 1;
    const selectedSize = 'M';
    const expectedAction = {
      type: DECREMENT_ITEM_QUANTITY,
      payload: { id, selectedSize },
    };
    expect(decrementItemQuantity(id, selectedSize)).toEqual(expectedAction);
  });

  it('should create an action to clear the cart', () => {
    const expectedAction = {
      type: CLEAR_CART,
    };
    expect(clearCart()).toEqual(expectedAction);
  });
});
