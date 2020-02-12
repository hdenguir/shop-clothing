import cartActionTypes from './cart.types';
import { AddItemToCart } from './cart.utils';
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
    default:
      return state;
  }
};

export default cartReducer;
