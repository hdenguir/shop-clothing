import cartActionTypes from './cart.types';
import { AddItemToCart, removeItemFromCart } from './cart.utils';
const initState = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: AddItemToCart(state.cartItems, payload)
      };
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload)
      };
    case cartActionTypes.CLEAR_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== payload.id
        )
      };
    case cartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: []
      };
    default:
      return state;
  }
};

export default cartReducer;
