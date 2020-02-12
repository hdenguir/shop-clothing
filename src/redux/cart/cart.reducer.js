import cartActionTypes from './cart.types';
const initState = {
  hidden: true
};

const cartReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};

export default cartReducer;
